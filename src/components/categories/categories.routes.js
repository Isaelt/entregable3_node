import { Router } from "express";
import { createCategories, getCategories } from "./categories.controllers.js";

const router = Router();

router.route('/categories')
  .get(getCategories)
  .post(createCategories)


export default router;