import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')


const server = config[env].database
const username = config[env].username
const password = config[env].password

export const db = new Sequelize(server, username, password, {
  dialect: config[env].dialect,
  port: config[env].port,
});

db.authenticate()