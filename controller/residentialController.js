import Residential from '../model/residentialModel.js'
//
const residentialController = {
    createResident: async (req, res) => {
        try {
            const {
                propertyType, bhkType, ownershipType, builtUpArea, propertyAge, facing,
                floorType, floor, totalFloor, city, locality, landmark, mapForSelectingAddress,
                expectedPrice, maintainceCostForMonthly, avilableFrom, kitchenType, furnishing,
                parking, description, bathrooms, balcony, waterSupply, gym, gatedSecurity,
                powerBackup, secondaryMobileNo, amenities, addPhotos
            } = req.body;

            const newResidential = new Residential({
                propertyType, bhkType, ownershipType, builtUpArea, propertyAge, facing,
                floorType, floor, totalFloor, city, locality, landmark, mapForSelectingAddress,
                expectedPrice, maintainceCostForMonthly, avilableFrom, kitchenType, furnishing,
                parking, description, bathrooms, balcony, waterSupply, gym, gatedSecurity,
                powerBackup, secondaryMobileNo, amenities, addPhotos
            });

            const savedResidential = await newResidential.save();
            // res.status(201).json(savedResidential);
            res.status(201).json({message:"successfully added the data",savedResidential})
        } catch (error) {
            console.error("Error creating residential property:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getAllResident: async (req, res) => {
        try {
            const residents = await Residential.find();
            res.status(200).json(residents);
        } catch (error) {
            console.error("Error fetching residential properties:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

export default residentialController;
