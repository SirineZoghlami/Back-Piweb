import express from 'express';
import {
  createArmoire,
  getAllArmoires,
  getArmoireById,
  updateArmoire,
  deleteArmoire
} from '../../../controllers/armoireController.js'; 

const router = express.Router();

// Route to create a new armoire
router.post('/armoires', createArmoire);

// Route to retrieve all armoires
router.get('/armoires', getAllArmoires);

// Route to retrieve an armoire by its ID
router.get('/armoires/:id', getArmoireById);

// Route to update an armoire
router.put('/armoires/:id', updateArmoire);

// Route to delete an armoire
router.delete('/armoires/:id', deleteArmoire);

export default router;
