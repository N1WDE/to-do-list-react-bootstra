const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "URI_MONGODB"
    );

    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;