const Superviseur = require("../models/superviseurModel");
const fs = require("fs");

// Create a new Superviseur
exports.createSuperviseur = async (req, res) => {
    try {
        const superviseur = await Superviseur.create(req.body);
        res.status(201).json(superviseur);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Superviseurs
exports.getAllSuperviseurs = async (req, res) => {
    try {
        const superviseurs = await Superviseur.find();
        res.status(200).json(superviseurs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific Superviseur by ID
exports.getSuperviseurById = async (req, res) => {
    try {
        const superviseur = await Superviseur.findById(req.params.id);
        if (!superviseur) {
            return res.status(404).json({ message: "Superviseur not found" });
        }
        res.status(200).json(superviseur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific Superviseur by ID
exports.updateSuperviseur = async (req, res) => {
    try {
        const updatedSuperviseur = await Superviseur.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedSuperviseur);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific Superviseur by ID
exports.deleteSuperviseur = async (req, res) => {
    try {
        await Superviseur.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Superviseur deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.insertAll = async (req, res) => {
    try {
        // Read the JSON file
        const data = JSON.parse(
            fs.readFileSync("superviseur-data.json", "utf-8")
        );

        // Loop through each object and add them one by one
        for (const item of data) {
            // Create a new document using your Mongoose model
            const airEquipment = await Superviseur.create(item);
            // Save the document to the database
            console.log("Data added successfully:", airEquipment);
        }
        res.status(200).json({ message: "Superviseur add successfully" });

        console.log("All data added successfully.");
    } catch (error) {
        console.error("Error adding data:", error);
    }
};
