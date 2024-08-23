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

// add new animal
const addAnimal = async (req, res) => {
  const newAnimal = req.body;
  const animalCollection = await animalsDB();
  const result = await animalCollection.insertOne(newAnimal);
  res.json(result);
};

module.exports = {
  getAllAnimals,
  addAnimal,
};
