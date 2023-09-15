import User from "../../models/users.model.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
       res.status(400).json(error) 
    }
}

const createUser = async (req, res) => {
    try {
        const { body } = req;
        const user = await User.create(body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      await User.destroy({
        where: {id}
      });
      res.status(204).end()
    } catch (error) {
       res.status(400).json(error);
      }
}

export { getAllUsers, createUser, deleteUser }