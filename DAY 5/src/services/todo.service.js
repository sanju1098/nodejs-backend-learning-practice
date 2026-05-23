let todos = require("../data/todos");

// function getAllTodos() {
//   return todos;
// }

// Adding Query Params for filtering
function getAllTodos(completed) {
  if (completed === undefined) {
    return todos;
  }

  return todos.filter((todo) => todo.completed === (completed === "true"));
}

function getTodoById(id) {
  return todos.find((todo) => todo.id === id);
}

function createTodo(todoData) {
  const newTodo = {
    id: todos.length + 1,
    ...todoData,
    createdAt: new Date(),
  };

  todos.push(newTodo);

  return newTodo;
}

function updateTodo(id, updatedData) {
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return null;
  }

  todo.title = updatedData.title;
  todo.completed = updatedData.completed;

  return todo;
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);

  return todos;
}

function patchTodo(id, completed) {
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return null;
  }

  todo.completed = completed;

  return todo;
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  patchTodo,
};
