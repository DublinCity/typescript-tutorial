import {Instance} from "sequelize";

export interface ICellAttributes {
  childrenId: string;
  created_at?: Date;
  index: string;
  parentId: string;
  title: string;
}

export interface ICellInstance extends Instance<ICellAttributes> {
  dataValues: ICellAttributes;
}
