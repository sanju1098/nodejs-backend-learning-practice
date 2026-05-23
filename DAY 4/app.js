// const express = require("express");

// const app = express();

// const PORT = 5000;

// app.use(express.json());

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // Fake Database
// let todos = [
//   {
//     id: 1,
//     title: "Learn Node.js",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Build APIs",
//     completed: true,
//   },
// ];

// // GET All Todos
// app.get("/todos", (req, res) => {
//   res.status(200).json(todos);
// });

// // GET Todo By ID
// app.get("/todos/:id", (req, res) => {
//   const todoID = Number(req.params.id);

//   const todo = todos.find((todo) => todo.id === todoID);
//   if (!todo) {
//     return res.status(404).json({
//       message: "Todo not found",
//     });
//   }
//   res.status(200).json(todo);
// });

// // POST Create Todo
// // app.post("/todos", (req, res) => {
// //   const { title, completed } = req.body;

// //   const newTodo = {
// //     id: todos.length + 1,
// //     title,
// //     completed,
// //   };

// //   todos.push(newTodo);

// //   res.status(201).json({
// //     message: "Todo created successfully",
// //     todo: newTodo,
// //   });
// // });

// // POST Create Todo - Validation
// app.post("/todos", (req, res) => {
//   const { title, completed } = req.body;

//   if (!title) {
//     return res.status(400).json({
//       message: "Title is required",
//     });
//   }

//   const newTodo = {
//     id: todos.length + 1,
//     title,
//     completed: completed || false,
//   };

//   todos.push(newTodo);

//   res.status(201).json({
//     message: "Todo created successfully",
//     todo: newTodo,
//   });
// });

// // PUT Update Todo
// app.put("/todos/:id", (req, res) => {
//   const todoId = parseInt(req.params.id);

//   const { title, completed } = req.body;

//   const todo = todos.find((todo) => todo.id === todoId);

//   if (!todo) {
//     return res.status(404).json({
//       message: "Todo not found",
//     });
//   }

//   todo.title = title;
//   todo.completed = completed;

//   res.status(200).json({
//     message: "Todo updated successfully",
//     todo,
//   });
// });

// // DELETE Todo
// app.delete("/todos/:id", (req, res) => {
//   const todoId = parseInt(req.params.id);

//   const todoExists = todos.some((todo) => todo.id === todoId);

//   if (!todoExists) {
//     return res.status(404).json({
//       message: "Todo not found",
//     });
//   }

//   todos = todos.filter((todo) => todo.id !== todoId);

//   res.status(200).json({
//     message: "Todo deleted successfully",
//   });
// });

// Complete Production-Style Todo API
const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] - ${req.method} ${req.url}`);
  next();
}

app.use(logger);

let todos = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
  },
];

function validateTodo(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  next();
}

app.get("/todos", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Todos fetched successfully",
    data: todos,
  });
});

app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Todo fetched successfully",
    data: todo,
  });
});

app.post("/todos", validateTodo, (req, res) => {
  const { title, completed } = req.body;

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed || false,
  };

  todos.push(newTodo);

  res.status(201).json({
    success: true,
    message: "Todo created successfully",
    data: newTodo,
  });
});

app.put("/todos/:id", validateTodo, (req, res) => {
  const todoId = parseInt(req.params.id);

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  todo.title = req.body.title;
  todo.completed = req.body.completed;

  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
    data: todo,
  });
});

app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoExists = todos.some((todo) => todo.id === todoId);

  if (!todoExists) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  todos = todos.filter((todo) => todo.id !== todoId);

  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
