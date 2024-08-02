import express from "express";
import { getAll, create, getById, update, remove } from "../controllers/controller.js";
const router = express.Router();

// Get all movies
router.get('/', getAll);

// Create a new movie
router.post("/", create);

// Get a single movie by ID
router.get("/:id", getById);

// Update a movie
router.put("/:id", update);

// Delete a movie
router.delete("/:id", remove);

export default router;