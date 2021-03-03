module.exports = {
  find: async model => {
    try {
      const users = await model.find();

      return users;
    } catch (error) {
      throw error.message;
    }
  },
  findById: async (model, id) => {
    try {
      const user = await model.findOne({ _id: id });

      return user;
    } catch (error) {
      throw error.message;
    }
  },
  create: async (model, body) => {
    try {
      const user = new model(body);

      const userCreated = await user.save();

      return userCreated;
    } catch (error) {
      throw error.message;
    }
  },
  update: async (model, body, id) => {
    try {
      const user = await model.findByIdAndUpdate(id, body, { new: true });

      return user;
    } catch (error) {
      throw error.message;
    }
  },
  erase: async (model, id) => {
    try {
      await model.findByIdAndDelete(id);

      return "El usuario fue borrado correctamente!!!";
    } catch (error) {
      throw error.message;
    }
  }
};
