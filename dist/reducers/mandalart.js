"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
const models_1 = require("../models");
const DB = {
    5: {
        childrenId: [],
        date: new Date(),
        parentId: "0",
        title: "mandalart",
    },
};
const getAllCell = () => {
    const allCells = Object.keys(DB).map((id) => DB[id]);
    return allCells;
};
exports.getAllCell = getAllCell;
const getCellById = (id) => {
    const cell = DB[id];
    return cell;
};
exports.getCellById = getCellById;
const addCell = ({ parentId, title }) => {
    const id = v4_1.default();
    // console.log(title);
    models_1.Cell.create({
        childrenId: "3",
        index: "7",
        parentId,
        title,
    });
    DB[id] = {
        childrenId: [],
        date: new Date(),
        parentId,
        title,
    };
    DB[parentId] = Object.assign({}, DB[parentId], { childrenId: DB[parentId].childrenId.concat(id) });
};
exports.addCell = addCell;
const editCellById = (id, body) => {
    const title = body.title;
    try {
        DB[id] = Object.assign({}, DB[id], { title });
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.editCellById = editCellById;
//# sourceMappingURL=mandalart.js.map