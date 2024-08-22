const connectDB = require("../config/db");

const getAnimalsCollection = async () => {
  const db = await connectDB();
  return db.collection("animals");
};

module.exports = getAnimalsCollection;
