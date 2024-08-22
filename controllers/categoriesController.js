const categoriesDB = require("../models/categoriesModel");

// retrieve all categories
const getAllCategories = async (req, res) => {
  const categoryCollection = await categoriesDB();
  const categories = await categoryCollection.find().toArray();
  res.json(categories);
};

// retrieve all categories
const addCategory = async (req, res) => {
  const newCategory = req.body;
  const categoryCollection = await categoriesDB();
  const result = await categoryCollection.insertOne(newCategory);
  res.json(result);
};

module.exports = {
  getAllCategories,
  addCategory,
};
