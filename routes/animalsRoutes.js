const express = require("express");
const { getAllAnimals } = require("../controllers/animalsController");

const router = express.Router();

router.get("/", getAllAnimals);

module.exports = router;
