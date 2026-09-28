import restaurantModel from "../models/restaurantModel.js";


export const createRestaurantController = async (req, resp) => {
    try {
        const {
            title,
            image_url,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            code,
            location,
        } = req.body;

        if (!title?.trim()) {
            return resp.status(400).send({
                success: false,
                message: "Restaurant name is required.",
            });
        }

        if (
            !location?.address?.trim() ||
            location?.latitude == null ||
            location?.longitude == null
        ) {
            return resp.status(400).send({
                success: false,
                message: "Valid restaurant location is required.",
            });
        }

        const newRestaurant = await restaurantModel.create({
            title,
            image_url,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            code,
            location,
        });

        return resp.status(201).send({
            success: true,
            message: `Restaurant ${newRestaurant.title} created successfully.`,
            restaurant: newRestaurant,
        });

    } catch (error) {
        return resp.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
};