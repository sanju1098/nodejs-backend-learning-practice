const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todo.controller");

const validateTodo = require("../middleware/validate.middleware");

router.get("/", todoController.getTodos);

router.get("/:id", todoController.getTodo);

router.post("/", validateTodo, todoController.createTodo);

router.put("/:id", validateTodo, todoController.updateTodo);

router.patch("/:id", todoController.patchTodo);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
