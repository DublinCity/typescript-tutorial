"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const getAllCell = () => __awaiter(this, void 0, void 0, function* () { return yield models_1.Cell.findAll({}); });
exports.getAllCell = getAllCell;
const getCellById = (id) => __awaiter(this, void 0, void 0, function* () {
    return yield models_1.Cell.findOne({
        where: {
            index: id,
        },
    });
});
exports.getCellById = getCellById;
const addCell = ({ index, parentId, title, }) => __awaiter(this, void 0, void 0, function* () {
    return yield models_1.Cell.create({
        index,
        parentId,
        title,
        childrenId: "",
    });
});
exports.addCell = addCell;
const editCellById = (index, body) => __awaiter(this, void 0, void 0, function* () {
    const title = body.title;
    return yield models_1.Cell.update({
        title,
    }, {
        where: {
            index,
        },
    });
});
exports.editCellById = editCellById;
//# sourceMappingURL=mandalart.js.map