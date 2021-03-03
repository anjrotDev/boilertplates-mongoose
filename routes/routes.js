const express = require("express");
const router = express.Router();

const UsersControllers = require("../controllers/usersControllers");

module.exports = () => {
  router.get("/", (req, res) => res.send("Hola Mundo!!!"));

  //Users Routes
  router.get("/users", UsersControllers.getUsers);
  router.get("/users/:id", UsersControllers.getUsersById);
  router.put("/users/:id", UsersControllers.updateUser);
  router.post("/users", UsersControllers.createUser);
  router.delete("/users/:id", UsersControllers.deleteUser);

  return router;
};
