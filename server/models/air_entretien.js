import mongoose from 'mongoose';
const { Schema } = mongoose;

const EntretienSchema = new Schema({
 // Référence vers l'utilisateur qui a ajouté l'entretien
 userajout_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  
 // Référence vers l'utilisateur qui a modifié l'entretien
 usermodif_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 
 // Référence vers l'utilisateur qui a supprimé l'entretien
 usersupp_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 
 // Référence vers l'équipement associé à l'entretien
 equipementair_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipement' },
 
 // Référence vers le superviseur en charge de l'entretien
 superviseur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Superviseur' },
 
 // Date de l'entretien (obligatoire)
 date_entretien: { type: Date, required: true },
 
 // Date période de sécheur
 dateperiodesecheur: Date,
 
 // Nombre d'heures avant le prochain entretien
 nbrhprochain: Number,
 
 // Heures de fonctionnement de l'équipement
 hfonctionnement: Number,
 
 // Remarque sur l'entretien (obligatoire)
 remarque: { type: String, required: true },
 
 // Niveau du problème rencontré lors de l'entretien
 niveauprobleme: String,
 
 // Date d'ajout de l'entretien (par défaut, c'est la date actuelle)
 dateajout: { type: Date, default: Date.now },
 
 // Date de la dernière modification de l'entretien
 datemodif: Date,
 
 // Date de suppression de l'entretien
 datesuppresion: Date,
 
 // Indicateur de suppression (par défaut, c'est false)
 suppression: { type: Boolean, default: false }
});
const Entretien = mongoose.model('Entretien', EntretienSchema);
export default Entretien;
