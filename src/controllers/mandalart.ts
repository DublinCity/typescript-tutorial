import express from "express";
import { addCell, editCellById, getAllCell, getCellById } from "../reducers/mandalart";

const router = express.Router();

router.use((req, res, next) => {
  // console.log("API: mandalart");
  next();
});

router.get("/", (req, res) => {
  const cells = getAllCell();
  res.json(cells);
});

router.post("/", (req, res) => {
  // register cell
  // console.log("s", req.body);
  const {title, parentId}: {title: s, parentId: s} = req.body;

  addCell({title, parentId});
  res.end("add success");
});

router.get("/:id", (req, res) => {
  // access model
  const {id}: {id: s} = req.params;
  const cell = getCellById(id);

  res.json(cell);
});

router.put("/:id", (req, res) => {
  const {id, body}: {id: s, body: any} = req.params;
  editCellById(id, body);
});
export default router;
