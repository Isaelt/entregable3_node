import Category from "../../models/categories.model.js";

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
       res.status(400).json(error) 
    }
}

const createCategories = async (req, res) => {
    try {
        const { body } = req;
        const categories = await Category.create(body);
        res.status(201).json(categories);
    } catch (error) {
        res.status(400).json(error)
    }
}


export {getCategories, createCategories}
