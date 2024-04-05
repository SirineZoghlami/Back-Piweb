import express from 'express';
import Equipement from '../../models/air_equipement.js';

const equipementRouter = express.Router();

// CREATE (POST)
equipementRouter.post('/add', async (req, res) => {
  try {
    // Extraire les données du corps de la requête
    const { marque, modele, nom, puissance_max, debit, puissancemoteur, nserie, pressioncharge, pressiondecharge, anneefabrication, type, alertentretien, id_energy, local_id, dossier, adresseip } = req.body;
    
    // Créer une nouvelle instance du modèle Equipement
    const equipement = new Equipement({ marque, modele, nom, puissance_max, debit, puissancemoteur, nserie, pressioncharge, pressiondecharge, anneefabrication, type, alertentretien, id_energy, local_id, dossier, adresseip });

    // Enregistrer le nouvel équipement dans la base de données
    const savedEquipement = await equipement.save();

    // Répondre avec l'équipement créé et le code de statut 201 (Created)
    res.status(201).json(savedEquipement);
  } catch (error) {
    console.error(error); // Journaliser l'erreur pour le débogage
    res.status(400).json({ error: error.message }); // Répondre avec un message d'erreur et le code de statut 400 (Bad Request)
  }
});

// READ (GET)

// Obtenir tous les équipements
equipementRouter.get('/get', async (req, res) => {
  try {
    // Trouver tous les équipements dans la base de données
    const equipements = await Equipement.find();
    
    // Répondre avec la liste des équipements
    res.json(equipements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching equipements' });
  }
});

// Obtenir un équipement par son ID
equipementRouter.get('/get/:id', async (req, res) => {
  try {
    // Trouver l'équipement avec l'ID spécifié dans la base de données
    const equipement = await Equipement.findById(req.params.id);
    
    // Vérifier si l'équipement existe
    if (!equipement) {
      return res.status(404).json({ error: 'Equipement not found' });
    }
    
    // Répondre avec l'équipement trouvé
    res.json(equipement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching equipement' });
  }
});

// UPDATE (PUT)

equipementRouter.put('/put/:id', async (req, res) => {
  try {
    // Extraire les données du corps de la requête
    const { marque, modele, nom, puissance_max, debit, puissancemoteur, nserie, pressioncharge, pressiondecharge, anneefabrication, type, alertentretien, id_energy, local_id, dossier, adresseip } = req.body;
    
    // Mettre à jour l'équipement avec les nouvelles données
    const updatedEquipement = await Equipement.findByIdAndUpdate(
      req.params.id,
      { marque, modele, nom, puissance_max, debit, puissancemoteur, nserie, pressioncharge, pressiondecharge, anneefabrication, type, alertentretien, id_energy, local_id, dossier, adresseip },
      { new: true } // Retourner le document mis à jour
    );

    // Vérifier si l'équipement existe
    if (!updatedEquipement) {
      return res.status(404).json({ error: 'Equipement not found' });
    }
    
    // Répondre avec l'équipement mis à jour
    res.json(updatedEquipement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating equipement' });
  }
});

// DELETE (DELETE)

equipementRouter.delete('/delete/:id', async (req, res) => {
  try {
    // Supprimer l'équipement avec l'ID spécifié de la base de données
    const deletedEquipement = await Equipement.findByIdAndDelete(req.params.id);
    
    // Vérifier si l'équipement existe
    if (!deletedEquipement) {
      return res.status(404).json({ error: 'Equipement not found' });
    }
    
    // Répondre avec un message de succès
    res.json({ message: 'Equipement deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting equipement' });
  }
});

export default equipementRouter;
