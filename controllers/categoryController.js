import categoryModel from "../models/categoryModel.js";

// Create Categry
export const createCategoryController = async (req, resp) => {
    try {

        const { title, imageUrl } = req.body;

        if (!title || !imageUrl) {
            return resp.status(200).send({
                success: false,
                message: "This field's are reuired."
            });
        }
        const category = await categoryModel.create({
            title,
            imageUrl,
        });
        return resp.status(201).send({
            success: true,
            message: category.title + "Cteated Successfully.",
            data: category
        });
    } catch (error) {

        console.log(error)

        return resp.status(500).send({
            success: false,
            message: "Unable to crete. Internal server-error."
        })
    }
}