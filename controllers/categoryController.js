import categoryModel from "../models/categoryModel.js";

// Create Categry
export const createCategoryController = async (req, resp) => {
    try {

        const { title, imageUrl } = req.body;

        if (!title || !imageUrl) {
            return resp.status(200).send({
                success: false,
                message: `${!title ? "title" : "imageUrl"} field is required.`
            });
        }

        const onlyLetter = /^[A-Za-z ]+$/;

        if (!onlyLetter.test(title)) {
            return resp.status(200).send({
                success: false,
                message: "Title can contain letters only (A-Z, a-z) "
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


// Edit Category
export const editCategoryController = async (req, resp) => {

    try {
        const category_data = await categoryModel.findById(req.params.id)

        if (!category_data) {
            return resp.status(200).get({
                success: false,
                message: "No data found."
            });
        }

        return resp.status(200).send({
            success: false,
            message: "Successfull fetch data.",
            category_data
        })

    } catch (error) {

        console.log(error)

        return resp.status(500).send({
            success: false,
            message: "Unable to load data. Internal server error."
        });
    }
}



// Update Category
export const updateCategoryController = async (req, resp) => {

    try {
        const categoryId = req.params.id;

        const { title, imageUrl } = req.body;

        const updateCategoryData = {};

        if (title !== undefined) updateCategoryData.title = title;
        if (imageUrl !== undefined) updateCategoryData.imageUrl = imageUrl;

        const onlyLetter = /^[A-Za-z]+$/;

        if (title !== undefined && onlyLetter.test(title)) {
            return resp.status(200).send({
                success: false,
                message: "Title can contain letters only (A-Z, a-z) "
            });
        }

        if (Object.keys(updateCategoryData).length === 0) {
            return resp.status(200).send({
                success: false,
                message: "Provide these field to update."
            });
        }

        const category = await categoryModel.findByIdAndUpdate(categoryId, {
            $set: updateCategoryData
        }, {
            new: true,
            runValidators: true
        });
        if (!category) {
            return resp.status(200).send({
                success: true,
                message: "Not found."
            });
        }
        return resp.status(200).send({
            success: true,
            message: "Category create successfully.",
            data: category
        });
    } catch (error) {
        console.log(error)

        return resp.status(500).send({
            success: false,
            message: "Internam server error, Unable to update data.",
            error
        })
    }
}


// Delete Category
export const deleteCategoryController = async (req, resp) => {
    try {
        const category_data = await categoryModel.findByIdAndDelete(req.params.id);

        if (!category_data) {
            return resp.status(200).send({
                success: false,
                message: "Data not found."
            });
        }
        return resp.status(200).send({
            success: true,
            message: category_data.title+ "delete successfuly."
        });

    } catch (error) {

        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "Unable to delete category. Internal server error.",
            error
        })
    }
}