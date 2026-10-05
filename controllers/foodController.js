import foodModel from '../models/foodModel.js';


// Create food controller
export const createFoodController = async (req, resp) => {
    try {
        const { title, fooTag, foodCode, isAvailable, rating, customerId, restaurantId, itmDescription, categoryId, totalPrice, imageUrl, status, paymentStatus, deliveryAddress } = req.body

        if (!title || !fooTag || !foodCode || !customerId || !restaurantId || !itmDescription || !categoryId || !totalPrice) {
            return resp.status(200).send({
                success: false,
                messgage: "Please provide all field."
            });
        }

        const letters_only = /^[A-Za-z ]+$/;
        if (!letters_only.test(title)) {
            return resp.status(200).send({
                success: false,
                messgage: "Title can contain letters only (A-Z, a-z)"
            });
        }
        const price = Number(totalPrice);
        if (Number.isNaN(price)) {
            return resp.status(200).send({
                success: false,
                message: "Total price should be a valide number."
            });
        }
        if (price <= 0) {
            return resp.status(200).send({
                success: false,
                message: "Total price must be grater then 0."
            });
        }

        const newFood = await foodModel.create({
            title,
            foodTag,
            foodCode,
            isAvailable,
            rating,
            customerId,
            rating,
            customerId,
            restaurantId,
            itmDescription,
            categoryId,
            totalPrice,
            imageUrl,
            status,
            paymentStatus,
            deliveryAddress
        });

        return resp.status(201).send({
            success: true,
            message: "Successfully " + newFood.title + " created.",
            date: newFood
        });

    } catch (error) {

        console.log(error)
        return resp.status(500).send({
            success: false,
            messgage: "Internal server error. Error in ceate food api",
            error
        });
    }

}

// Edit Controller
export const editFoodController = async (req, resp) => {
    try {

        


    } catch (error) {

        console.log(error)

        return resp.status(500).send({
            success: false,
            message: "Unable to edit food. Internal senver error.",
            error
        });
    }
}


