const animalsDB = require("../models/animalsModel");

// retrieve all animals
const getAllAnimals = async (req, res) => {
  const category = req?.query?.category;
  const animalCollection = await animalsDB();
  const animals = await animalCollection
    .find({ category: { $regex: new RegExp(`^${category}$`, "i") } })
    .toArray();
  res.json(animals);
};

module.exports = {
  getAllAnimals,
};
