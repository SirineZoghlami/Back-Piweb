import mongoose from 'mongoose';

// Define the schema for the Machine model
const machineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Add other fields as needed
}, { collection: 'machine' }); // Specify the collection name here

// Create the Machine model using the schema
const Machine = mongoose.model('Machine', machineSchema);

export default Machine;
