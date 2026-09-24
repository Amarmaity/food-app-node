import jwt from "jsonwebtoken";

const middleware = (req, resp, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return resp.status(401).send({
                success: false,
                message: "Unauthorized User"
            });
        }

        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = {
            id: decode.id,
            user_type: decode.user_type
        };

        // console.log("Decoded Token:", decode);
        // console.log("Request User:", req.user);

        next();

    } catch (error) {
        // console.log(error);

        return resp.status(401).send({
            success: false,
            message: "Invalid or expired token."
        });
    }
};

export default middleware;