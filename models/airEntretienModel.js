// airEntretienModel.js

import mongoose from "mongoose";

const airEntretienSchema = new mongoose.Schema({
    equipementair: String,
    superviseur: String,
    date_entretien: Date,
    dateperiodesecheur: Date,
    nbrhprochain: Number,
    hfonctionnement: Number,
    remarque: String,
    niveauprobleme: String,
    dateajout: Date,
    datemodif: Date,
    datesuppression: Date,
    suppression: Boolean,
});

const AirEntretien = mongoose.model("AirEntretien", airEntretienSchema);

export default AirEntretien;
