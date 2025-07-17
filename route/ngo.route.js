const express = require("express");
const router = express.Router();
const ngoController = require("../controllers/ngo.control");

router.get("/", ngoController.getAllNgos);
router.post("/", ngoController.createNgo);

module.exports = router;
