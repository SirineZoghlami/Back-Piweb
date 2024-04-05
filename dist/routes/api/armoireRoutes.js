"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _armoireController = require("../../../controllers/armoireController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// Route to create a new armoire
router.post('/armoires', _armoireController.createArmoire);

// Route to retrieve all armoires
router.get('/armoires', _armoireController.getAllArmoires);

// Route to retrieve an armoire by its ID
router.get('/armoires/:id', _armoireController.getArmoireById);

// Route to update an armoire
router.put('/armoires/:id', _armoireController.updateArmoire);

// Route to delete an armoire
router["delete"]('/armoires/:id', _armoireController.deleteArmoire);
var _default = exports["default"] = router;