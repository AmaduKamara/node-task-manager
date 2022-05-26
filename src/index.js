const express = require("express");
require("./db/mongoose");

const User = require("./models/user");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
