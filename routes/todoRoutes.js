import express from "express";
import {
  getAllTodos,
  deleteTodoById,
  getTodoByIdNew,
  createTodo,
} from "../controllers/todoController.js";

const router = express.Router();
// createTodos
// POST => http://localhost:5000/api/v1/blog
router.post("/", createTodo);

// getAllTodos
// GET => http://localhost:5000/api/v1/blog
router.get("/", getAllTodos);

// getTodoById
// GET => http://localhost:5000/api/v1/blog/:id
router.get("/:id", getTodoByIdNew);

// updateTodoById
// PUT => http://localhost:5000/api/v1/blog/:id
// router.put("/:id", updateTodosById);

// deleteTodoById
// DELETE => http://localhost:5000/api/v1/blog/:id
router.delete("/:id", deleteTodoById);

//////////////////////////////////////

export default router;
