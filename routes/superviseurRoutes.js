const express = require("express");
const router = express.Router();
const {
    getAllSuperviseurs,
    createSuperviseur,
    getSuperviseurById,
    updateSuperviseur,
    deleteSuperviseur,
    insertAll,
} = require("../controllers/superviseurControllers");

router.post("/", createSuperviseur);
router.get("/", getAllSuperviseurs);
router.post("/all", insertAll);

router.get("/:id", getSuperviseurById);
router.put("/:id", updateSuperviseur);
router.delete("/:id", deleteSuperviseur);

module.exports = router;
