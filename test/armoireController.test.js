import {
  createArmoire,
  getAllArmoires,
  getArmoireById,
  updateArmoire,
  deleteArmoire,
} from '../controllers/armoireController';
import Armoire from '../models/armoire';

// Mocking the Mongoose model
jest.mock('../models/armoire');

describe('Armoire Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createArmoire', () => {
    it('should create a new armoire', async () => {
      const req = {
        body: {
          /* mock body data */
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const savedArmoire = {
        /* mock saved armoire data */
      };
      Armoire.mockReturnValueOnce({
        save: jest.fn().mockResolvedValueOnce(savedArmoire),
      });

      await createArmoire(req, res);

      expect(res.status).toBe(201);
      expect(res.json).toEqual({
        message: 'Armoire created successfully',
        armoire: savedArmoire,
      });
    });

    it('should handle errors during armoire creation', async () => {
      const req = {
        body: {
          /* mock body data */
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const error = new Error('Test error');
      Armoire.mockReturnValueOnce({
        save: jest.fn().mockRejectedValueOnce(error),
      });

      await createArmoire(req, res);

      expect(console.error).toHaveBeenCalledWith(
        'Error creating armoire:',
        error
      );
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to create armoire',
      });
    });
  });

  describe('getAllArmoires', () => {
    it('should get all armories', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const mockArmories = [
        {
          /* mock armoire data */
        },
        {
          /* mock armoire data */
        },
      ];
      Armoire.find.mockResolvedValueOnce(mockArmories);

      await getAllArmoires(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockArmories);
    });

    it('should handle errors during retrieval of armories', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const error = new Error('Test error');
      Armoire.find.mockRejectedValueOnce(error);

      await getAllArmoires(req, res);

      expect(console.error).toHaveBeenCalledWith(
        'Error retrieving armoires:',
        error
      );
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to retrieve armories',
      });
    });
  });

  describe('getArmoireById', () => {
    it('should get an armoire by ID', async () => {
      const req = { params: { id: 'mockId' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const mockArmoire = {
        /* mock armoire data */
      };
      Armoire.findById.mockResolvedValueOnce(mockArmoire);

      await getArmoireById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockArmoire);
    });

    it('should handle error when armoire by ID is not found', async () => {
      const req = { params: { id: 'nonExistentId' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Armoire.findById.mockResolvedValueOnce(null);

      await getArmoireById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Armoire not found' });
    });

    it('should handle errors during retrieval of armoire by ID', async () => {
      const req = { params: { id: 'mockId' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const error = new Error('Test error');
      Armoire.findById.mockRejectedValueOnce(error);

      await getArmoireById(req, res);

      expect(console.error).toHaveBeenCalledWith(
        'Error retrieving armoire:',
        error
      );
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to retrieve armoire',
      });
    });
  });

  describe('updateArmoire', () => {
    it('should update an armoire by ID', async () => {
      const req = {
        params: { id: 'mockId' },
        body: {
          /* updated armoire data */
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const updatedArmoire = {
        /* mock updated armoire data */
      };
      Armoire.findByIdAndUpdate.mockResolvedValueOnce(updatedArmoire);

      await updateArmoire(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Armoire updated successfully',
        armoire: updatedArmoire,
      });
    });

    it('should handle error when armoire by ID is not found during update', async () => {
      const req = {
        params: { id: 'nonExistentId' },
        body: {
          /* updated armoire data */
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Armoire.findByIdAndUpdate.mockResolvedValueOnce(null);

      await updateArmoire(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Armoire not found' });
    });

    it('should handle errors during armoire update', async () => {
      const req = {
        params: { id: 'mockId' },
        body: {
          /* updated armoire data */
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const error = new Error('Test error');
      Armoire.findByIdAndUpdate.mockRejectedValueOnce(error);

      await updateArmoire(req, res);

      expect(console.error).toHaveBeenCalledWith(
        'Error updating armoire:',
        error
      );
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to update armoire',
      });
    });
  });

  describe('deleteArmoire', () => {
    it('should delete an armoire by ID', async () => {
      const req = { params: { id: 'mockId' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const deletedArmoire = {
        /* mock deleted armoire data */
      };
      Armoire.findByIdAndDelete.mockResolvedValueOnce(deletedArmoire);

      await deleteArmoire(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Armoire deleted successfully',
        armoire: deletedArmoire,
      });
    });

    it('should handle error when armoire by ID is not found during deletion', async () => {
      const req = { params: { id: 'nonExistentId' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      Armoire.findByIdAndDelete.mockResolvedValueOnce(null);

      await deleteArmoire(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Armoire not found' });
    });

    it('should handle errors during armoire deletion', async () => {
      const req = { params: { id: 'mockId' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      const error = new Error('Test error');
      Armoire.findByIdAndDelete.mockRejectedValueOnce(error);

      await deleteArmoire(req, res);

      expect(console.error).toHaveBeenCalledWith(
        'Error deleting armoire:',
        error
      );
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to delete armoire',
      });
    });
  });
});
