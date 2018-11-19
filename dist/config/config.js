"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = {
    development: {
        username: "root",
        password: "dublincity",
        database: "mandalart",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    test: {
        username: "root",
        password: "tmon",
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: "tmon",
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};
exports.default = Config;
//# sourceMappingURL=config.js.map