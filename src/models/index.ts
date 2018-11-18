import Sequelize from "sequelize";
const env = process.env.NODE_ENV || "development";
import Config from "../config/config.json";

interface IConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
}

const localConfig: { [key: string]: IConfig } = Config;
const config = localConfig[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

export {
  sequelize,
  Sequelize,
};
