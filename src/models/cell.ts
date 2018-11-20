// import * as SequelizeStatic from "sequelize";
import SequelizeStatic, {DataTypes, Sequelize} from "sequelize";
import { ICellAttributes, ICellInstance1, ICellInstance } from "./cell-interface";

const cell = (sequelize: Sequelize, dataType: DataTypes): SequelizeStatic.Model<ICellInstance, ICellAttributes> => {
  return sequelize.define<ICellInstance1, ICellAttributes>("cell", {
    childrenId: {
      allowNull: false,
      type: dataType.STRING(100),
    },
    created_at: {
      allowNull: false,
      defaultValue: sequelize.literal("now()"),
      type: dataType.DATE,
    },
    index: {
      allowNull: false,
      type: dataType.STRING(100),
      unique: true,
    },
    parentId: {
      allowNull: false,
      type: dataType.STRING(10),
    },
    title: {
      allowNull: true,
      type: dataType.STRING(100),
    },
  }, {
    timestamps: false,
  });
};


export default cell;
