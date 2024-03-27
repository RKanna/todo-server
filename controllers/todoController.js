import TodoTestModal from "../Models/todoModal.js";
import mongoose from "mongoose";

// GetAllTodos
export const getAllTodos = async (req, res) => {
  try {
    const allTodos = await TodoTestModal.find();
    res.status(200).json({ success: true, data: allTodos });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

// DeleteTodoById
export const deleteTodoById = async (req, res) => {
  try {
    const { index } = req.params;
    const Todo = await TodoTestModal.findByIdAndDelete(index);
    res.status(200).json({ success: true, data: Todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getTodoByIdNew = async (req, res) => {
  try {
    const { index } = req.params;
    console.log("Received id:", index);
    const Todo = await TodoTestModal.findById(index);
    res.status(200).json({ success: true, data: Todo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//CreateTodo
export const createTodo = async (req, res) => {
  const Todo = await new TodoTestModal({ ...req.body }).save();
  res.status(201).json({ success: true, data: Todo });
};
