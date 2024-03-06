import express from 'express';
import AirAlarme from '../../models/airAlarme.js';

const alarmeRouter = express.Router();


alarmeRouter.post('/add', async (req, res) => {
  try {
    // Validate request body (optional but recommended)
    const { id, typealarmeId, equipementairId, dateAlarme, heureAlarme, description, etatvu } = req.body;
    const airAlarme = new AirAlarme({ id, typealarmeId, equipementairId, dateAlarme, heureAlarme, description, etatvu });

    // Save the new air alarm document
    const savedAirAlarme = await airAlarme.save();
    res.status(201).json(savedAirAlarme); // Respond with created air alarm and status code 201 (Created)
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ error: error.message }); // Respond with error message and status code 400 (Bad Request)
  }
});

// **READ (GET)**

// Get all air alarms
alarmeRouter.get('/airalarmes', async (req, res) => {
  try {
    const airalarmes = await AirAlarme.find();
    res.json(airalarmes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching air alarms' }); // Respond with generic error message and status code 500 (Internal Server Error)
  }
});

// Get air alarm by ID
alarmeRouter.get('/airalarmes/:id', async (req, res) => {
  try {
    const airAlarme = await AirAlarme.findById(req.params.id);
    if (!airAlarme) {
      return res.status(404).json({ error: 'Air alarm not found' }); // Respond with error message and status code 404 (Not Found)
    }
    res.json(airAlarme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching air alarm' });
  }
});

// **UPDATE (PUT)**

alarmeRouter.put('/airalarmes/:id', async (req, res) => {
  try {
    const { id, typealarmeId, equipementairId, dateAlarme, heureAlarme, description, etatvu } = req.body;
    const updatedAirAlarme = await AirAlarme.findByIdAndUpdate(
      req.params.id,
      { id, typealarmeId, equipementairId, dateAlarme, heureAlarme, description, etatvu },
      { new: true } // Return the updated document
    );
    if (!updatedAirAlarme) {
      return res.status(404).json({ error: 'Air alarm not found' });
    }
    res.json(updatedAirAlarme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating air alarm' });
  }
});

// **DELETE (DELETE)**

alarmeRouter.delete('/airalarmes/:id', async (req, res) => {
  try {
    const deletedAirAlarme = await AirAlarme.findByIdAndDelete(req.params.id);
    if (!deletedAirAlarme) {
      return res.status(404).json({ error: 'Air alarm not found' });
    }
    res.json({ message: 'Air alarm deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting air alarm' });
  }
});
//Obtenir les alarmes d'air comprimé associées à un équipement spécifique
alarmeRouter.get('/equipements/:equipementId/airalarmes', async (req, res) => {
  try {
    const equipementId = req.params.equipementId;
    const alarmes = await AirAlarme.find({ equipementairId: equipementId });
    res.status(200).json(alarmes);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des alarmes d\'air comprimé pour cet équipement.' });
  }
});
//Marquer une alarme d'air comprimé comme vue (changement de l'état "etatvu") 
alarmeRouter.put('/airalarmes/:id/vue', async (req, res) => {
  try {
    const alarme = await AirAlarme.findByIdAndUpdate(req.params.id, { etatvu: true }, { new: true });
    if (!alarme) {
      return res.status(404).json({ error: 'Alarme d\'air comprimé non trouvée.' });
    }
    res.status(200).json(alarme);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'état vue de l\'alarme d\'air comprimé.' });
  }
});
export default alarmeRouter;
