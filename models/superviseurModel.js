const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisorSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    poste: { type: String, required: true },
    mail: { type: String, required: true },
    tel: { type: Number, required: true },
});

module.exports = mongoose.model("supervisor", supervisorSchema);
