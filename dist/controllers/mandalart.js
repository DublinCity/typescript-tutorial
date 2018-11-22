"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mandalart_1 = require("../reducers/mandalart");
const router = express_1.default.Router();
// middle ware
router.use((req, res, next) => {
    next();
});
// 전체조회
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const cells = yield mandalart_1.getAllCell();
    res.json(cells);
}));
// id 조회
router.get("/:index", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { index } = req.params;
    const cell = yield mandalart_1.getCellById(index);
    res.json(cell);
}));
// 등록
router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { index, title, parentId } = req.body;
    console.log(index, title, parentId);
    const users = yield mandalart_1.addCell({ index, title, parentId });
    res.end("post success");
}));
// update
router.put("/:index", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { index, body } = req.params;
    const updatedCell = yield mandalart_1.editCellById(index, body);
    res.json({});
}));
exports.default = router;
//# sourceMappingURL=mandalart.js.map