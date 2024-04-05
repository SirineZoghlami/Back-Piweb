import mongoose from 'mongoose';
const { Schema } = mongoose;

// Définition du schéma pour le modèle Equipement
const EquipementSchema = new Schema({
  marque: String, // Marque de l'équipement
  modele: String, // Modèle de l'équipement
  nom: { type: String, required: true }, // Nom de l'équipement (obligatoire)
  puissance_max: String, // Puissance maximale de l'équipement
  debit: String, // Débit de l'équipement
  puissancemoteur: Number, // Puissance du moteur de l'équipement
  nserie: String, // Numéro de série de l'équipement
  pressioncharge: Number, // Pression de charge de l'équipement
  pressiondecharge: Number, // Pression de décharge de l'équipement
  anneefabrication: Number, // Année de fabrication de l'équipement
  type: { type: String, required: true }, // Type de l'équipement (obligatoire)
  alertentretien: { type: String, required: true }, // Alerte d'entretien de l'équipement (obligatoire)
  id_energy: { type: mongoose.Schema.Types.ObjectId, ref: 'Energy' }, // Référence vers l'énergie associée à l'équipement
  local_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Local' }, // Référence vers le local où se trouve l'équipement
  dossier: { type: String, required: true }, // Dossier de l'équipement (obligatoire)
  adresseip: { type: String, required: true } // Adresse IP de l'équipement (obligatoire)
});

// Export du modèle Equipement avec le schéma défini
const Equipement = mongoose.model('Equipement', EquipementSchema);
export default Equipement;