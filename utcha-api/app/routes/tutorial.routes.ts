import express from "express";
const router = express.Router();

// Middleware
import * as authJwt from "../middlewares";
// Controllers
import tutorials from "../controllers/tutorial.controller";

// Create a new Tutorial
router.post("/api/tutorials", [authJwt.verifyToken], tutorials.create);

// Retrieve all Tutorials
router.get("/api/tutorials", [authJwt.verifyToken], tutorials.findAll);

// Retrieve all published Tutorials
router.get(
  "/api/tutorials/published",
  [authJwt.verifyToken],
  tutorials.findAllPublished
);

// Retrieve a single Tutorial with id
router.get("/api/tutorials/:id", [authJwt.verifyToken], tutorials.findOne);

// Update a Tutorial with id
router.put("/api/tutorials/:id", [authJwt.verifyToken], tutorials.update);

// Delete a Tutorial with id
router.delete("/api/tutorials/:id", [authJwt.verifyToken], tutorials.deleteId);

// Create a new Tutorial
router.delete("/api/tutorials", [authJwt.verifyToken], tutorials.deleteAll);

export default router;
