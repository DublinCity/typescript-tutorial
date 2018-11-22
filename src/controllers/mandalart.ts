import express from "express";
import {
  addCell,
  editCellById,
  getAllCell,
  getCellById,
} from "../reducers/mandalart";

const router = express.Router();

// middle ware
router.use((req, res, next) => {
  next();
});

// 전체조회
router.get("/", async (req, res) => {
  const cells = await getAllCell();

  res.json(cells);
});

// id 조회
router.get("/:index", async (req, res) => {
  const { index } = req.params;
  const cell = await getCellById(index);

  res.json(cell);
});

// 등록
router.post("/", async (req, res) => {
  const { index, title, parentId } = req.body;
  const users = await addCell({ index, title, parentId });

  res.end("post success");
});

// update
router.put("/:index", async (req, res) => {
  const { index, body }: { index: string; body: any } = req.params;
  const updatedCell = await editCellById(index, body);
  res.json({});
});
export default router;
