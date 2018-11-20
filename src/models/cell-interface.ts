import {Instance} from "sequelize";

export interface ICellAttributes {
  childrenId: string;
  created_at?: Date;
  index: string;
  parentId: string;
  title: string;
}

export interface ICellAttributes1 {
  childrenId: string;
  created_at?: Date;
  index: string;
  parentId: string;
  title: string;
}

export interface ICellInstance extends Instance<ICellAttributes> {
  dataValues: ICellAttributes;
}

export interface ICellInstance1 extends Instance<ICellAttributes> {
  dataValues: ICellAttributes1;
}
