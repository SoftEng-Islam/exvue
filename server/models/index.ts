import dbConfig from "../config/db.config.ts";

import { Sequelize, DataTypes, Dialect } from 'sequelize';


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect as Dialect,
	// operatorsAliases: false,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
});

import tutorial from "./tutorial.model.ts";
const db = {
	Sequelize: Sequelize,
	sequelize: sequelize,
	tutorials: tutorial(sequelize, Sequelize)
};

export default db;