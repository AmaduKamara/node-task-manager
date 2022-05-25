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

const amkam = new User({ name: "Amkam", age: 27 });

amkam
  .save()
  .then((amkam) => {
    console.log(amkam);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
