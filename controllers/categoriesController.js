const categoriesDB = require("../models/categoriesModel");

// retrieve all categories
const getAllCategories = async (req, res) => {
  const categoryCollection = await categoriesDB();
  const categories = await categoryCollection.find().toArray();
  res.json(categories);
};

module.exports = {
  getAllCategories,
};
