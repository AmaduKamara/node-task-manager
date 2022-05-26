const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if(value.toLowerCase().includes("password")) {
        throw new Error("Password must not contain 'password' text within.")
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});

const amkam = new User({ name: " Ranjeet", email: "ranjeet2@email.com     ", age: 30, password: "test12345"});

amkam
  .save()
  .then((amkam) => {
    console.log(amkam);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const todo = new Task({ description: "Learn Node", completed: false });

// todo
//   .save()
//   .then((todo) => {
//     console.log(todo);
//   })
//   .catch((err) => {
//     console.log("Error: " + err);
//   });
