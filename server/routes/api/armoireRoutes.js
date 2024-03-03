import express from 'express';
import {
  createArmoire,
  getAllArmoires,
  getArmoireById,
  updateArmoire,
  deleteArmoire
} from '../../../controllers/armoireController.js'; 

const router = express.Router();

// Route pour créer une nouvelle armoire
router.post('/armoires', createArmoire);

// Route pour récupérer toutes les armoires
router.get('/armoires', getAllArmoires);

// Route pour récupérer une armoire par son ID
router.get('/armoires/:id', getArmoireById);

// Route pour mettre à jour une armoire
router.put('/armoires/:id', updateArmoire);

// Route pour supprimer une armoire
router.delete('/armoires/:id', deleteArmoire);

export default router;
