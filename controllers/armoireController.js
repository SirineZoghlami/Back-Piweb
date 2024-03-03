import Armoire from '../models/armoire.js'; // Importer le modèle Mongoose pour l'armoire

// Fonction pour créer un nouveau document d'armoire
export const createArmoire = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newArmoire = new Armoire({ name, description });
    const savedArmoire = await newArmoire.save();
    res.status(201).json({ message: 'Armoire créée avec succès', armoire: savedArmoire });
  } catch (error) {
    console.error('Erreur lors de la création de l\'armoire :', error);
    res.status(500).json({ error: 'Échec de la création de l\'armoire' });
  }
};

// Fonction pour récupérer toutes les armoires
export const getAllArmoires = async (req, res) => {
  try {
    const armoires = await Armoire.find();
    res.status(200).json(armoires);
  } catch (error) {
    console.error('Erreur lors de la récupération des armoires :', error);
    res.status(500).json({ error: 'Échec de la récupération des armoires' });
  }
};

// Fonction pour récupérer une armoire par son ID
export const getArmoireById = async (req, res) => {
  const { id } = req.params;
  try {
    const armoire = await Armoire.findById(id);
    if (!armoire) {
      return res.status(404).json({ error: 'Armoire non trouvée' });
    }
    res.status(200).json(armoire);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'armoire :', error);
    res.status(500).json({ error: 'Échec de la récupération de l\'armoire' });
  }
};

// Fonction pour mettre à jour une armoire
export const updateArmoire = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedArmoire = await Armoire.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedArmoire) {
      return res.status(404).json({ error: 'Armoire non trouvée' });
    }
    res.status(200).json({ message: 'Armoire mise à jour avec succès', armoire: updatedArmoire });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'armoire :', error);
    res.status(500).json({ error: 'Échec de la mise à jour de l\'armoire' });
  }
};

// Fonction pour supprimer une armoire
export const deleteArmoire = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArmoire = await Armoire.findByIdAndDelete(id);
    if (!deletedArmoire) {
      return res.status(404).json({ error: 'Armoire non trouvée' });
    }
    res.status(200).json({ message: 'Armoire supprimée avec succès', armoire: deletedArmoire });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'armoire :', error);
    res.status(500).json({ error: 'Échec de la suppression de l\'armoire' });
  }
};
