import uuid from "uuid/v4";

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
  const allCells = Object.keys(DB).map((id): ICell => DB[id]);
  return allCells;
};

const getCellById = (id: string): ICell => {
  const cell = DB[id];
  return cell;
};

const addCell = ({parentId, title}: {parentId: s, title: s}): void => {
  const id = uuid();
  // console.log(title);
  DB[id] = {
    childrenId: [],
    date: new Date(),
    parentId,
    title,
  };
  DB[parentId] = {
    ...DB[parentId],
    childrenId: DB[parentId].childrenId.concat(id),
  };
};

const editCellById = (id: s, body: any): boolean => {
  const title: s = body.title;
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
