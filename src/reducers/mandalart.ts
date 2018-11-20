import uuid from "uuid/v4";
import { Cell } from "../models";

interface ICell {
  childrenId: string[];
  date: Date;
  parentId: string;
  title: string;
}

interface IGeneralObj {
  [id: string]: ICell;
}

const DB: IGeneralObj = {
  5: {
    childrenId: [],
    date: new Date(),
    parentId: "0",
    title: "mandalart",
  },
};

const getAllCell = (): ICell[] => {
  const allCells = Object.keys(DB).map(id => DB[id]);
  return allCells;
};

const getCellById = (id: string): ICell => {
  const cell = DB[id];
  return cell;
};

const addCell = ({parentId, title}: {parentId: string, title: string}): void => {
  const id = uuid();
  console.log(parentId,title)
  Cell.create({
    childrenId: "3",
    index: "7",
    parentId,
    title,
  });
};

const editCellById = (id: string, body: any): boolean => {
  const title: string = body.title;
  try {
      DB[id] = {
      ...DB[id],
      title,
      };
      return true;
  } catch (e) {
      return false;
  }
};

export {
  getAllCell,
  getCellById,
  addCell,
  editCellById,
};
