const express = require("express");
const {
  getAllAnimals,
  addAnimal,
} = require("../controllers/animalsController");

const router = express.Router();

router.get("/", getAllAnimals);
router.post("/add", addAnimal);

module.exports = router;
