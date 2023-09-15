import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Task = db.define('tasks', {
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(200)
    },
    completedId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "completed_id",
        defaultValue:2
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
    }
    
},{timestamps: false});

export default Task;