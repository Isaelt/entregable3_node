import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Complete = db.define('completed', {
    completes: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
},{timestamps: false});

export default Complete;
