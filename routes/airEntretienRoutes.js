const express = require("express");
const router = express.Router();
const {
    getAllAirEntretiens,
    createAirEntretien,
    getAirEntretienById,
    updateAirEntretien,
    deleteAirEntretien,
    insertAll,
} = require("../controllers/airEntretienControllers");

router.post("/", createAirEntretien);
router.get("/", getAllAirEntretiens);
router.post("/all", insertAll);
router.get("/:id", getAirEntretienById);
router.put("/:id", updateAirEntretien);
router.delete("/:id", deleteAirEntretien);

module.exports = router;
