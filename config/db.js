const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost/crud", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log("conectado a la bd de mongo!!!");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

db();

module.exports = db;
