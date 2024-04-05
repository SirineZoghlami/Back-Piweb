// eslint-disable-next-line import/extensions
import Armoire from '../models/armoire.js'; // Import the Mongoose model for Armoire

export const createArmoire = async (req, res) => {
  try {
    const newArmoire = new Armoire(req.body);
    const savedArmoire = await newArmoire.save();
    res
      .status(201)
      .json({ message: 'Armoire created successfully', armoire: savedArmoire });
  } catch (error) {
    console.error('Error creating armoire:', error);
    res.status(500).json({ error: 'Failed to create armoire' });
  }
};

//// Function to retrieve all armories with pagination
export const getAllArmoires = async (req, res) => {
  const { page = 1, limit = 5 } = req.query; // Default page to 1 and limit to 5 per page
  try {
    const skip = (page - 1) * limit; // Calculate number of documents to skip
    const armoires = await Armoire.find().skip(skip).limit(limit);
    
    const totalCount = await Armoire.countDocuments(); // Get total count of armories
    res.set('X-Total-Count', totalCount); // Set total count header
    
    res.status(200).json(armoires);
  } catch (error) {
    console.error('Error retrieving armoires:', error);
    res.status(500).json({ error: 'Failed to retrieve armoires' });
  }
};



// Function to retrieve an armoire by its ID
// eslint-disable-next-line consistent-return
export const getArmoireById = async (req, res) => {
  const { id } = req.params;
  try {
    const armoire = await Armoire.findById(id);
    if (!armoire) {
      return res.status(404).json({ error: 'Armoire not found' });
    }
    res.status(200).json(armoire);
  } catch (error) {
    console.error('Error retrieving armoire:', error);
    res.status(500).json({ error: 'Failed to retrieve armoire' });
  }
};

// Function to update an armoire by its ID
// eslint-disable-next-line consistent-return
export const updateArmoire = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedArmoire = await Armoire.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedArmoire) {
      return res.status(404).json({ error: 'Armoire not found' });
    }
    res.status(200).json({
      message: 'Armoire updated successfully',
      armoire: updatedArmoire,
    });
  } catch (error) {
    console.error('Error updating armoire:', error);
    res.status(500).json({ error: 'Failed to update armoire' });
  }
};

// Function to delete an armoire by its ID
// eslint-disable-next-line consistent-return
export const deleteArmoire = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArmoire = await Armoire.findByIdAndDelete(id);
    if (!deletedArmoire) {
      return res.status(404).json({ error: 'Armoire not found' });
    }
    res.status(200).json({
      message: 'Armoire deleted successfully',
      armoire: deletedArmoire,
    });
  } catch (error) {
    console.error('Error deleting armoire:', error);
    res.status(500).json({ error: 'Failed to delete armoire' });
  }
};
