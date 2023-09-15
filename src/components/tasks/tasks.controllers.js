import Task from "../../models/tasks.model.js";
import Complete from "../../models/completed.model.js";
import User from "../../models/users.model.js";
import Category from "../../models/categories.model.js";

const getTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findAll({
            where:{
                userId:id
            },
            attributes: ["id", "title", "description"],
            include: [{model: User, attributes: ["id", "username"]}, {model: Complete}, {model: Category, attributes: ["id", "name"]}]
        });
        res.json(tasks);
    } catch (error) {
       res.status(400).json(error) 
    }
}

const createTasks = async (req, res) => {
    try {
        const { body } = req;
        const task = await Task.create(body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json(error)
    }
}

const getCompleted = async (req, res) => {
    try {
        const completed = await Complete.findAll()
        res.json(completed)
    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }
}

const createCompleted = async (req, res) => {
    try {
        const { body } = req;
        const completed = await Complete.create(body);
        res.status(201).json(completed);
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateTaskCompleted = async (req, res) => {
    try {
        const { id } = req.params;

        const completed = await Task.update({"completedId":1}, {
            where: {id}
        });
        res.json(completed);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteTaskById = async (req, res) => {
    try {
      const { id } = req.params;
  
      await Task.destroy({
        where: {id}
      });
      res.status(204).end()
    } catch (error) {
       res.status(400).json(error);
      }
}

export {getTasks, createTasks, updateTaskCompleted, getCompleted, createCompleted, deleteTaskById}