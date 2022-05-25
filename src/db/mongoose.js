const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// const amkam = new User({ name: "Amkam", age: "Samuel" });

// amkam
//   .save()
//   .then((amkam) => {
//     console.log(amkam);
//   })
//   .catch((err) => {
//     console.log("Error: " + err);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

const todo = new Task({ description: "Learn Node", completed: false });

todo
  .save()
  .then((todo) => {
    console.log(todo);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
