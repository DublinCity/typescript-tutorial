import SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import cell from "./cell";
const env = process.env.NODE_ENV || "development";
import Config from "../config/config";

const config = Config[env];

class Database {
  private sequelize: Sequelize;
  private dataType: DataTypes;
  constructor() {
    this.sequelize = new SequelizeStatic(config.database, config.username, config.password, config);
    this.dataType = SequelizeStatic;
  }

  public getSequelize() {
    return this.sequelize;
  }

  public getDataType() {
    return this.dataType;
  }
}

const database = new Database();

export const sequelize = database.getSequelize();
export const DataType = database.getDataType();

export const Cell = cell(sequelize, DataType);
