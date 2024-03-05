import mongoose from 'mongoose';

// Define the schema for the Machine model
const machineSchema = new mongoose.Schema({
    armoire_id: {
        type: Number,
        default: null
    },
    usage_id: {
        type: Number,
        default: null
    },
    zone_id: {
        type: Number,
        default: null
    },
    production: {
        type: Boolean,
        default: null
    },
    interfaceweb: {
        type: Boolean,
        default: null
    },
    saisie_prodautomatique: {
        type: Boolean,
        default: null
    },
    objectif_khw_t: {
        type: Number,
        default: null
    },
    energie_nominal: {
        type: Number,
        default: 5
    },
    indicateur_cible_kwh_t: {
        type: Number,
        default: null
    },
    indicateur_cible_kwh_km: {
        type: Number,
        default: null
    },
    adressip: {
        type: String,
        default: null
    },
    nom: {
        type: String,
        default: null
    },
    isactive: {
        type: String,
        default: null
    },
    dossier: {
        type: String,
        default: null
    },
    dossierprod: {
        type: String,
        default: null
    },
    tgbt_id: {
        type: Number,
        default: null
    }
}, { collection: 'machine' }); // Specify the collection name here

// Create the Machine model using the schema
const Machine = mongoose.model('Machine', machineSchema);

export default Machine;
