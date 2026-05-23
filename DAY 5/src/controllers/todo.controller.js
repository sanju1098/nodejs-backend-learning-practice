const todoService = require("../services/todo.service");

const sendResponse = require("../utils/response.util");

// function getTodos(req, res) {
//   const todos = todoService.getAllTodos();

//   sendResponse(res, 200, true, "Todos fetched successfully", todos);
// }

function getTodos(req, res) {
  const { completed } = req.query;

  const todos = todoService.getAllTodos(completed);

  sendResponse(res, 200, true, "Todos fetched successfully", todos);
}

function getTodo(req, res) {
  const todoId = parseInt(req.params.id);

  const todo = todoService.getTodoById(todoId);

  if (!todo) {
    return sendResponse(res, 404, false, "Todo not found");
  }

  sendResponse(res, 200, true, "Todo fetched successfully", todo);
}

function createTodo(req, res) {
  const newTodo = todoService.createTodo(req.body);

  sendResponse(res, 201, true, "Todo created successfully", newTodo);
}

function updateTodo(req, res) {
  const todoId = parseInt(req.params.id);

  const updatedTodo = todoService.updateTodo(todoId, req.body);

  if (!updatedTodo) {
    return sendResponse(res, 404, false, "Todo not found");
  }

  sendResponse(res, 200, true, "Todo updated successfully", updatedTodo);
}

function deleteTodo(req, res) {
  const todoId = parseInt(req.params.id);

  const todo = todoService.getTodoById(todoId);

  if (!todo) {
    return sendResponse(res, 404, false, "Todo not found");
  }

  todoService.deleteTodo(todoId);

  sendResponse(res, 200, true, "Todo deleted successfully");
}

function patchTodo(req, res) {
  const todoId = parseInt(req.params.id);

  const { completed } = req.body;

  const updatedTodo = todoService.patchTodo(todoId, completed);

  if (!updatedTodo) {
    return sendResponse(res, 404, false, "Todo not found");
  }

  sendResponse(
    res,
    200,
    true,
    "Todo completion updated successfully",
    updatedTodo,
  );
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  patchTodo,
};
