"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cell = (sequelize, dataType) => {
    return sequelize.define("cell", {
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
exports.default = cell;
//# sourceMappingURL=cell.js.map