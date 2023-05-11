import express, { Express, Request, Response } from "express";
import cors from "cors";
import db from "./app/models";

import auth from "./app/routes/auth.routes";
import user from "./app/routes/user.routes";
import tutorial from "./app/routes/tutorial.routes";

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const Role = db.role;

console.log(db.url);

db.mongoose.set("strictQuery", false);
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err: any) => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to utcha application." });
});

// routes
app.use("/", auth);
app.use("/", user);
app.use("/", tutorial);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      const user = new Role({ name: "user" });
      const newUser = await user.save();
      const moderator = new Role({ name: "moderator" });
      const newModerator = await moderator.save();
      const admin = new Role({ name: "admin" });
      const newAdmin = await admin.save();
      if (newUser.name === "user") {
        console.log("added 'user' to roles collection");
      }
      if (newModerator.name === "moderator") {
        console.log("added 'moderator' to roles collection");
      }
      if (newAdmin.name === "admin") {
        console.log("added 'user' to roles collection");
      }
    }
  } catch (err: any) {
    console.log("error", err);
  }
}
