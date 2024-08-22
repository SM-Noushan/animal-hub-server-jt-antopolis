const connectDB = require("../config/db");

const getCategoriesCollection = async () => {
  const db = await connectDB();
  return db.collection("categories");
};

module.exports = getCategoriesCollection;
