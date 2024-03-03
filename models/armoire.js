import mongoose from 'mongoose';

// Définir le schéma pour le modèle d'armoire
const armoireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Ajoutez d'autres champs au besoin
});

// Créer le modèle d'armoire en utilisant le schéma
const Armoire = mongoose.model('Armoire', armoireSchema);

export default Armoire;
