const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

export default {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
};

// const DB_USER = "root",
//   DB_PASSWORD = 123456,
//   DB_HOST = "127.0.0.1",
//   DB_PORT = 27017,
//   DB_NAME = "utcha_db";

// export default {
//   // url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
//   url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
// };
