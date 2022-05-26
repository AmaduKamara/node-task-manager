const express = require("express");
require("./db/mongoose");

const User = require("./models/user");
const Task = require("./models/task");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// POST /users
app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// POST /tasks
app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
