export interface Ienv {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
}

interface IConfig {
  [env: string]: Ienv;
}

const Config: IConfig = {
  development: {
    username: "root",
    password: "Dublincity123!",
    database: "sample",
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

export default Config;
