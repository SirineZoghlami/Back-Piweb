"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _machineController = require("../../../controllers/machineController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Import the controller functions

var router = _express["default"].Router();

// Create a new machine
router.post('/machines', function (req, res) {
  console.log('Request Body:', req.body); // Log the request body
  (0, _machineController.createMachine)(req, res); // Call the controller function
});

// Get all machines
router.get('/machines', _machineController.getAllMachines);

// Get a machine by ID
router.get('/machines/:id', _machineController.getMachineById);

// Update a machine by ID
router.put('/machines/:id', _machineController.updateMachineById);

// Delete a machine by ID
router["delete"]('/machines/:id', _machineController.deleteMachineById);
var _default = exports["default"] = router;