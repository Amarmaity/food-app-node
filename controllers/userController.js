import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";


// Get User Data 
const getUserController = async (req, resp) => {
    try {
        const user_data = await userModel.findById(req.user.id).select("-password")

        if (!user_data) {
            return resp.status(200).send({
                success: false,
                message: "User's not found."
            });
        }

        return resp.status(200).send({
            success: true,
            message: "User data fetched successfully.",
            user: user_data
        })

    } catch (error) {
        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "User's not found."
        })
    }
}


// Update User Data
const updateUserController = async (req, resp) => {
    try {
        // Find user
        const update_user = await userModel.findById(req.user.id);

        // Check user
        if (!update_user) {
            return resp.status(404).send({
                success: false,
                message: "User not found."
            });
        }
        // Get update data
        const { userName, address, phone } = req.body;

        // Update allowed fields
        if (userName !== undefined) {
            update_user.userName = userName;
        }

        if (address !== undefined) {
            update_user.address = address;
        }

        if (phone !== undefined) {
            update_user.phone = phone;
        }

        // Save user
        await update_user.save();

        return resp.status(200).send({
            success: true,
            message: "User update successfully.",
            user: update_user
        });

    } catch (error) {
        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "Internal Server error."
        });
    }
}


// Update Password
const updatePasswordController = async (req, resp) => {
    try {

    } catch (error) {
        console.log(error)
    }
}


// Reset Password
const resetPasswordController = async (req, resp) => {
    try {
        const { email, newPassword, answer } = req.body;

        if (!email || !newPassword || !answer) {
            return resp.status(200).send({
                success: false,
                message: "Please provide all fields.",
            });
        }
        const user = await userModel.findOne({ email, answer });
        if (!user) {
            return resp.status(200).send({
                succes: false,
                message: "User not found or invalide answer."
            });
        }
        // Hassing Password
        const hashPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashPassword;
        await user.save();

        return resp.status(200).send({
            succes: true,
            message: "Password reset sucessfully."
        });
    } catch (error) {
        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "Internam server error."
        })
    }
}


export default {
    getUserController,
    updateUserController,
    resetPasswordController,
    updatePasswordController
};
