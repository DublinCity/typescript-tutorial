"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mandalart_1 = require("../reducers/mandalart");
const router = express_1.default.Router();
router.use((req, res, next) => {
    next();
});
router.get("/", (req, res) => {
    const cells = mandalart_1.getAllCell();
    res.json(cells);
});
router.post("/", (req, res) => {
    // register cell
    // console.log("string", req.body);
    const { title, parentId } = req.body;
    mandalart_1.addCell({ title, parentId });
    res.end("add success");
});
router.get("/:id", (req, res) => {
    // access model
    const { id } = req.params;
    const cell = mandalart_1.getCellById(id);
    res.json(cell);
});
router.put("/:id", (req, res) => {
    const { id, body } = req.params;
    mandalart_1.editCellById(id, body);
});
exports.default = router;
//# sourceMappingURL=mandalart.js.map