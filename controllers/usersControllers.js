const { find, findById, create, update, erase } = require("../helpers/crud");
const UsersModel = require("../models/Users");

exports.getUsers = async (req, res) => {
  try {
    const users = await find(UsersModel);

    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findById(UsersModel, id);

    res.json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await create(UsersModel, req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await update(UsersModel, req.body, id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await erase(UsersModel, id);

    res.send(deleteUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
