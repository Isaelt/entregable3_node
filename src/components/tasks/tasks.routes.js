import { Router } from "express";
import { createCompleted, createTasks, deleteTaskById, getCompleted, getTasks, updateTaskCompleted } from "./tasks.controllers.js";

const router = Router();

router.route('/users/tasks')
  .post(createTasks)
  

router.route('/users/tasks/:id')
  .get(getTasks)
  .put(updateTaskCompleted)
  .delete(deleteTaskById)

router.route('/completed')
  .get(getCompleted)
  .post(createCompleted)


export default router;