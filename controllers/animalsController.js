const animalsDB = require("../models/animalsModel");

// retrieve all animals
const getAllAnimals = async (req, res) => {
  const animalCollection = await animalsDB();
  const animals = await animalCollection.find().toArray();
  res.json(animals);
};

module.exports = {
  getAllAnimals,
};
