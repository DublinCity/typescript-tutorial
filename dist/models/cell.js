"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cell = (sequelize, dataType) => {
    return sequelize.define("cell", {
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
    }, {
        timestamps: false,
    });
};
exports.default = cell;
//# sourceMappingURL=cell.js.map