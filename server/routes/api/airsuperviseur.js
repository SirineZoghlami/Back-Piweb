
import express from 'express';
import AirSuperviseur from '../../models/airSuperviseur.js';

const airspvsRouter = express.Router();
/**
 * @route   GET api/airspvs
 * @desc    Get all Supervisors
 * @access  Public
 */
airspvsRouter.get('/', (req, res) => {
  AirSuperviseur.find()
    .sort({ date: -1 })
    .then(airspvs => res.json(airspvs))
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   GET api/airspvs/:id
 * @desc    Get a Supervisor
 * @access  Public
 */
airspvsRouter.get('/:id', (req, res) => {
    AirSuperviseur.findById(req.params.id)
    .then(airspv => res.json(airspv))
    .catch(err =>
      res.json({
        success: false,
        message: `${err}`,
      })
    );
});

/**
 * @route   POST api/airspvs
 * @desc    Create a Supervisor
 * @access  Public
 */
airspvsRouter.post('/', (req, res) => {
    const { nom, prenom, poste, mail, tel } = req.body;

    const newSupervisor = new AirSuperviseur({
        nom,
        prenom,
        poste,
        mail,
        tel
    });

    newSupervisor.save()
        .then(() => res.json({
            success: true,
            message: `${newSupervisor.nom} has been successfully created`,
            supervisor: newSupervisor
        }))
        .catch(err => res.status(400).json({
            success: false,
            message: `${err}`
        }));
});

/**
 * @route   PUT api/airspvs/:id
 * @desc    Update a Supervisor
 * @access  Public
 */
airspvsRouter.put('/:id', (req, res) => {
    AirSuperviseur.findById(req.params.id)
    .then(airspv => {
      
        airspv.set({ nom: req.body.nom });
        airspv.save().then(() =>
        res.json({
          success: true,
          message: `${airspv.nom} has been successful updated`,
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
 * @route   DELETE api/airspvs/:id
 * @desc    Delete a Supervisor
 * @access  Public
 */
airspvsRouter.delete('/:id', (req, res) => {
    AirSuperviseur.findById(req.params.id)
    .then(airspv =>
        airspv.deleteOne().then(() =>
        res.json({
          success: true,
          message: `${airspv.nom} has been successful deleted`,
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




export default airspvsRouter;