import mongoose from "mongoose";
import user from "./user.model";
import role from "./role.model";
import tutorials from "./tutorials.model";
import dbConfig from "../config/db.config";
mongoose.Promise = global.Promise;

const db: {
  mongoose: any;
  user: any;
  role: any;
  tutorials: any;
  ROLES: string[];
  url: any;
} = {
  mongoose: mongoose,
  user: user,
  role: role,
  tutorials: tutorials,
  ROLES: ["user", "admin", "moderator"],
  url: dbConfig.url,
};

export default db;
