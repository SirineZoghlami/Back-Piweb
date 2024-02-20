import express from 'express';
// User model
import User from '../../models/User.js';

const userRouter = express.Router();
/**
 * @route   GET api/users
 * @desc    Get all Users
 * @access  Public
 */
userRouter.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   GET api/users/:id
 * @desc    Get a User
 * @access  Public
 */
userRouter.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   POST api/users
 * @desc    Create a User
 * @access  Public
 */
userRouter.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
  });

  newUser
    .save()
    .then(user =>
      res.json({
        success: true,
        message: `${user.name} has been successful created`,
        user:user
      
      })
    )
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   PUT api/users/:id
 * @desc    Update a User
 * @access  Public
 */
userRouter.put('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      // Update name here
      user.set({ name: req.body.name });
      user.save().then(() =>
        res.json({
          success: true,
          message: `${user.name} has been successful updated`,
        })
      );
    })
    .catch(err =>
      res.status(404).json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   DELETE api/users/:id
 * @desc    Delete a User
 * @access  Public
 */
userRouter.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user =>
      user.deleteOne().then(() =>
        res.json({
          success: true,
          message: `${user.name} has been successful deleted`,
        })
      )
    )
    .catch(err =>
      res.status(404).json({
        success: false,
        message: `${err}`,
      })
    );
});




export default userRouter;