import Machine from '../models/machine.js';

// Function to create a new machine document
export const createMachine = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newMachine = new Machine({ name, description });
    const savedMachine = await newMachine.save();
    res.status(201).json({ message: 'Machine created successfully', machine: savedMachine });
  } catch (error) {
    console.error('Error creating machine:', error);
    res.status(500).json({ error: 'Failed to create machine' });
  }
};

// Function to get all machine documents
export const getAllMachines = async (req, res) => {
  try {
    const machines = await Machine.find();
    res.status(200).json(machines);
  } catch (error) {
    console.error('Error fetching machines:', error);
    res.status(500).json({ error: 'Failed to fetch machines' });
  }
};

// Function to get a machine document by ID
export const getMachineById = async (req, res) => {
  try {
    const { id } = req.params;
    const machine = await Machine.findById(id);
    if (!machine) {
      return res.status(404).json({ error: 'Machine not found' });
    }
    res.status(200).json(machine);
  } catch (error) {
    console.error('Error fetching machine by ID:', error);
    res.status(500).json({ error: 'Failed to fetch machine' });
  }
};

// Function to update a machine document by ID
export const updateMachineById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedMachine = await Machine.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!updatedMachine) {
      return res.status(404).json({ error: 'Machine not found' });
    }
    res.status(200).json({ message: 'Machine updated successfully', machine: updatedMachine });
  } catch (error) {
    console.error('Error updating machine by ID:', error);
    res.status(500).json({ error: 'Failed to update machine' });
  }
};

// Function to delete a machine document by ID
export const deleteMachineById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMachine = await Machine.findByIdAndDelete(id);
    if (!deletedMachine) {
      return res.status(404).json({ error: 'Machine not found' });
    }
    res.status(200).json({ message: 'Machine deleted successfully' });
  } catch (error) {
    console.error('Error deleting machine by ID:', error);
    res.status(500).json({ error: 'Failed to delete machine' });
  }
};
