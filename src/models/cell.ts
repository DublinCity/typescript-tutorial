// import * as SequelizeStatic from "sequelize";
import SequelizeStatic, { DataTypes, Sequelize } from "sequelize";
import { ICellAttributes, ICellInstance } from "./cell-interface";

const cell = (
  sequelize: Sequelize,
  dataType: DataTypes
): SequelizeStatic.Model<ICellInstance, ICellAttributes> => {
  return sequelize.define<ICellInstance, ICellAttributes>(
    "cell",
    {
      index: {
        allowNull: false,
        type: dataType.STRING(100),
        unique: true,
      },
      title: {
        allowNull: true,
        type: dataType.STRING(100),
      },
      parentId: {
        allowNull: false,
        type: dataType.STRING(10),
      },
      childrenId: {
        allowNull: false,
        type: dataType.STRING(100),
      },
      created_at: {
        allowNull: false,
        defaultValue: sequelize.literal("now()"),
        type: dataType.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default cell;
