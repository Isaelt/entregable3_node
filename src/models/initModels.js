import User from "./users.model.js";
import Task from "./tasks.model.js";
import Complete from "./completed.model.js";
import Category from "./categories.model.js";

const initModels = () => {
    //Un usuario puede tener muchas tareas 
    //una tarea tiene 1 usuarios)
    
    User.hasMany(Task, {foreignKey: 'userId'})
    Task.belongsTo(User, {foreignKey: 'userId'})

    Category.hasMany(Task, {foreignKey: 'categoryId'})
    Task.belongsTo(Category, {foreignKey: 'categoryId'})

    Complete.hasMany(Task, {foreignKey: 'completedId'})
    Task.belongsTo(Complete, {foreignKey: 'completedId'})
};

export default initModels;