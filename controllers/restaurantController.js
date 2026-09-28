import restaurantModel from "../models/restaurantModel.js";

// Create Restaurent's
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
            rating,
            ratingCount,
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
            rating,
            ratingCount,
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


// Edit Restaurent Data
export const editRestaurentController = async (req, resp) => {

    try {
        const restaurent_data = await restaurantModel.findById(req.params.id)

        if (!restaurent_data) {
            return resp.status(200).send({
                success: false,
                message: "No data found."
            });
        }

        return resp.status(200).send({
            success: true,
            message: "Restaurent's data found.",
            data: restaurent_data
        })

    } catch (error) {

        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "Intenal server error, Unable to fetch the data.",
            error
        })
    }

};


// Update Restaurent Data
export const updateRestaurentController = async (req, resp) => {

    try {

        const restaurentId = req.params.id;
        // Allowed fields 
        const { title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            code,
            location } = req.body;

        const updateData = {};

        if (title !== undefined) updateData.title = title;
        if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
        if (foods !== undefined) updateData.foods = foods;
        if (time !== undefined) updateData.time = time;
        if (pickup !== undefined) updateData.pickup = pickup;
        if (delivery !== undefined) updateData.delivery = delivery;
        if (isOpen !== undefined) updateData.isOpen = isOpen;
        if (logoUrl !== undefined) updateData.logoUrl = logoUrl;
        if (code !== undefined) updateData.code = code;
        if (location !== undefined) updateData.location = location;

        // Nothing to update
        if (Object.keys(updateData).length === 0) {
            return resp.status(200).send({
                success: false,
                message: "Please provide the data to update."
            });
        }

        const restaurent = await restaurantModel.findByIdAndUpdate(
            restaurentId, updateData,
            {
                new: true,
                runValidators: true,
            });

        if (!restaurent) {
            return resp.status(200).send({
                success: true,
                message: "Restaurent not updated."
            });
        }

        return resp.status(200).send({
            success: true,
            message: "Restaurent Data update successfully.",
            data: restaurent
        });


    } catch (error) {

        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "Internal server error, Unable to Update Data.",
            error
        })
    }
}


// Delete Restarunt Data
export const deleteRestaruntController = async (req, resp) => {
    try {
        const data = await restaurantModel.findByIdAndDelete(req.params.id)
        if (!data) {
            return resp.status(200).send({
                success: false,
                message: "Data not found."
            });
        }
        return resp.status(200).send({
            success: true,
            message: data.title+ "Delete Successfully."
        });
    } catch (error) {
        console.log(error)
        return resp.status(500).send({
            success: false,
            message: "Internal server error. Unable to delete data.",
            error
        });
    }
}