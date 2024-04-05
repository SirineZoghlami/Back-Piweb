const express = require("express");
const router = express.Router();
const {
    getAllAirEquipments,
    createAirEquipment,
    getAirEquipmentById,
    updateAirEquipment,
    deleteAirEquipment,
    insertAll,
    deleteAll,
} = require("../controllers/airEquipmentControllers");

router.post("/", createAirEquipment);
router.post("/all", insertAll);
router.get("/", getAllAirEquipments);
router.get("/:id", getAirEquipmentById);
router.put("/:id", updateAirEquipment);
router.delete("/:id", deleteAirEquipment);

module.exports = router;
