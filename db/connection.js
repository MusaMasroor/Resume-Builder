const mongoose = require("mongoose");
const Db = process.env.DB_CONNECTION_STRING;
const connectToDatabase = async () => {
  try {
    await mongoose.connect(Db);
    console.log("Connected to database");
  } catch (error) {
    console.error(`Error connecting to database${error}`);
    throw error;
  }
};
connectToDatabase();
module.exports = connectToDatabase;
