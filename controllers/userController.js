
const getUserController = (req, resp) => {
    try {
        resp.status(200).send('User Data')


    } catch (error) {
        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "User's not found."
        })
    }
}


export default {getUserController};