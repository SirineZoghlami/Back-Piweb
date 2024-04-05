"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _factureController = require("../../../controllers/factureController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// Route pour créer une nouvelle facture_steg
router.post('/facturesSteg', _factureController.createFactureSteg);

// Route pour récupérer toutes les factures_steg
router.get('/facturesSteg', _factureController.getAllFacturesSteg);

// Route pour récupérer une facture_steg par son ID
router.get('/facturesSteg/:id', _factureController.getFactureStegById);

// Route pour mettre à jour une facture_steg par son ID
router.put('/facturesSteg/:id', _factureController.updateFactureStegById);

// Route pour supprimer une facture_steg par son ID
router["delete"]('/facturesSteg/:id', _factureController.deleteFactureStegById);
var _default = exports["default"] = router;