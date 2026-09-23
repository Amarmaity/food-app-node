import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

// Register controller
const registerController = async (req, resp) => {

    try {
        const { userName, email, password, phone, address, cnf_password } = req.body

        // validation
        if (!userName || !email || !password || !cnf_password || !phone || !address) {
            return resp.status(400).send({
                success: false,
                mesage: "Please provide all field."
            })
        }

        if (password !== cnf_password) {
            return resp.status(404).send({
                success: false,
                message: "Password and confirm password do not match."
            })
        }

        // check user email
        const existing = await userModel.findOne({ email })
        if (existing) {
            return resp.status(500).send({
                success: false,
                message: "User already registerd, Please login."
            })
        }

        // create user
        const hashPasswprd = await bcrypt.hash(password, 10);
        const user = await userModel.create({ userName, email, password: hashPasswprd, phone, address, cnf_password })
        resp.status(201).send({
            success: true,
            message: "Successfully Registered."
        })

    } catch (error) {
        console.log(error)
        resp.status(500).send({
            success: false,
            message: "Error in Register API."
        })
    }
}


// Login
const loginController = async (req, resp) => {
    try {
        const { email, password, user_type } = req.body
        // Validation
        if (!email) {
            return resp.status(400).send({
                success: false,
                message: "Email is required."
            });
        }
        if (!password) {
            return resp.status(400).send({
                success: false,
                message: "Password is requied"
            })
        }
        if (!user_type) {
            return resp.status = (400).send({
                success: false,
                message: "User type is required."
            })
        }
        const checkCredential = await userModel.findOne({
            email,
            user_type
        });
        if (!checkCredential) {
            return resp.status(404).send({
                success: false,
                message: "Invalide Credintial."
            })
        }

        const checkPassword = await bcrypt.compare(
            password,
            checkCredential.password
        );

        if (!checkPassword) {
            return resp.status(404).send({
                success: false,
                message: "Invalide Credential."
            });
        }

        return resp.status(200).send({
            success: true,
            message: "Login Successfully."
        })

    } catch (error) {
        console.log(error)
        resp.status(500).send({
            success: false,
            message: "Login Failed.",
        })
    }
}


export default { registerController, loginController };