const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  nombre: {
    type: String
  },
  apellido: {
    type: String
  },
  email: {
    type: String
  },
  edad: {
    type: Number
  }
});

module.exports = mongoose.model("users", UserSchema);
