import express from 'express';
import Entretien from '../../models/air_entretien.js';

const entretienRouter = express.Router();

// Créer un nouvel entretien
entretienRouter.post('/add', async (req, res) => {
  try {
    const newEntretien = new Entretien(req.body); // Créer un nouvel entretien avec les données de la requête
    const savedEntretien = await newEntretien.save(); // Sauvegarder le nouvel entretien dans la base de données
    res.status(201).json(savedEntretien); // Répondre avec le nouvel entretien créé et le statut 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message }); // Répondre avec un message d'erreur et le statut 400 (Bad Request)
  }
});

// Lire tous les entretiens
entretienRouter.get('/get', async (req, res) => {
  try {
    const entretiens = await Entretien.find(); // Récupérer tous les entretiens depuis la base de données
    res.json(entretiens); // Répondre avec la liste des entretiens
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching entretiens' }); // Répondre avec un message d'erreur générique et le statut 500 (Internal Server Error)
  }
});

// Lire un entretien par son ID
entretienRouter.get('/get/:id', async (req, res) => {
  try {
    const entretien = await Entretien.findById(req.params.id); // Récupérer un entretien par son ID depuis la base de données
    if (!entretien) {
      return res.status(404).json({ error: 'Entretien not found' }); // Répondre avec un message d'erreur et le statut 404 (Not Found)
    }
    res.json(entretien); // Répondre avec l'entretien trouvé
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching entretien' });
  }
});

// Mettre à jour un entretien
entretienRouter.put('/put/:id', async (req, res) => {
  try {
    const updatedEntretien = await Entretien.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Mettre à jour l'entretien dans la base de données
    if (!updatedEntretien) {
      return res.status(404).json({ error: 'Entretien not found' }); // Répondre avec un message d'erreur et le statut 404 (Not Found)
    }
    res.json(updatedEntretien); // Répondre avec l'entretien mis à jour
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating entretien' }); // Répondre avec un message d'erreur générique et le statut 500 (Internal Server Error)
  }
});

// Supprimer un entretien
entretienRouter.delete('/delete/:id', async (req, res) => {
  try {
    const deletedEntretien = await Entretien.findByIdAndDelete(req.params.id); // Supprimer l'entretien depuis la base de données
    if (!deletedEntretien) {
      return res.status(404).json({ error: 'Entretien not found' }); // Répondre avec un message d'erreur et le statut 404 (Not Found)
    }
    res.json({ message: 'Entretien deleted successfully' }); // Répondre avec un message de succès
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting entretien' }); // Répondre avec un message d'erreur générique et le statut 500 (Internal Server Error)
  }
});

export default entretienRouter;
