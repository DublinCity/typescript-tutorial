"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const cell_1 = __importDefault(require("./cell"));
const env = process.env.NODE_ENV || "development";
const config_1 = __importDefault(require("../config/config"));
const config = config_1.default[env];
class Database {
    constructor() {
        this.sequelize = new sequelize_1.default(config.database, config.username, config.password, config);
        this.dataType = sequelize_1.default;
    }
    getSequelize() {
        return this.sequelize;
    }
    getDataType() {
        return this.dataType;
    }
}
const database = new Database();
exports.sequelize = database.getSequelize();
exports.DataType = database.getDataType();
exports.Cell = cell_1.default(exports.sequelize, exports.DataType);
//# sourceMappingURL=index.js.map