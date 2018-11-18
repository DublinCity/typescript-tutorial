import Sequelize, { SequelizeStatic } from "sequelize";

const cell = (sequelize: Sequelize.Sequelize, DataType: SequelizeStatic) => {
  return sequelize.define("cell", {
    childrenId: {
      allowNull: false,
      type: DataType.STRING(100),
    },
    created_at: {
      allowNull: false,
      defaultValue: sequelize.literal("now()"),
      type: DataType.DATE,
    },
    index: {
      allowNull: false,
      type: DataType.STRING(100),
      unique: true,
    },
    parentId: {
      allowNull: false,
      type: DataType.STRING(10),
    },
    title: {
      allowNull: true,
      type: DataType.STRING(100),
    },
  });
};
