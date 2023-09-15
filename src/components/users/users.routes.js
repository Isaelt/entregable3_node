import { Router } from "express";
import { getAllUsers } from "./users.controllers.js";
import { createUser, deleteUser } from "./users.controllers.js";


const router = Router();

router.route('/users')
  .get(getAllUsers)
  .post(createUser)

router.route('/users/:id')
  .delete(deleteUser)

export default router;