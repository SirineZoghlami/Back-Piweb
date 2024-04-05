const AirEquipment = require("../models/airEquipmentModel");
const fs = require("fs");

// Create a new AirEquipment
exports.createAirEquipment = async (req, res) => {
    try {
        const airEquipment = await AirEquipment.create(req.body);
        res.status(201).json(airEquipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all AirEquipments
exports.getAllAirEquipments = async (req, res) => {
    try {
        const airEquipments = await AirEquipment.find();
        res.status(200).json(airEquipments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific AirEquipment by ID
exports.getAirEquipmentById = async (req, res) => {
    try {
        const airEquipment = await AirEquipment.findById(req.params.id);
        if (!airEquipment) {
            return res.status(404).json({ message: "AirEquipment not found" });
        }
        res.status(200).json(airEquipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific AirEquipment by ID
exports.updateAirEquipment = async (req, res) => {
    try {
        const updatedAirEquipment = await AirEquipment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedAirEquipment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific AirEquipment by ID
exports.deleteAirEquipment = async (req, res) => {
    try {
        await AirEquipment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "AirEquipment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.insertAll = async (req, res) => {
    try {
        // Read the JSON file
        const data = JSON.parse(
            fs.readFileSync("generated-data.json", "utf-8")
        );

        // Loop through each object and add them one by one
        for (const item of data) {
            // Create a new document using your Mongoose model
            const airEquipment = await AirEquipment.create(item);
            // Save the document to the database
            console.log("Data added successfully:", airEquipment);
        }
        res.status(200).json({ message: "AirEquipments add successfully" });

        console.log("All data added successfully.");
    } catch (error) {
        console.error("Error adding data:", error);
    }
};
