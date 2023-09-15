import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import usersRoutes from './components/users/users.routes.js';
import categoriesRoutes from './components/categories/categories.routes.js';
import tasksCategories from './components/tasks/tasks.routes.js';
import 'dotenv/config'

initModels();

db.authenticate()
  .then(() => console.log('Base de datos conectada correctamente'))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log('base datos sync'))
  .catch((error) => console.log(error))

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());

app.use(usersRoutes);
app.use(categoriesRoutes);
app.use(tasksCategories);



app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})