import express from "express";
const router = express.Router();
import {
    getAllAirEntretiens,
    createAirEntretien,
    getAirEntretienById,
    updateAirEntretien,
    deleteAirEntretien,
    insertAll,
} from "../../../controllers/airEntretienControllers.js";

router.post("/", createAirEntretien);
router.get("/", getAllAirEntretiens);
router.post("/all", insertAll);
router.get("/:id", getAirEntretienById);
router.put("/:id", updateAirEntretien);
router.delete("/:id", deleteAirEntretien);

export default router;
