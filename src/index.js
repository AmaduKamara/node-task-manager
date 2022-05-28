const express = require("express");
require("./db/mongoose");

const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
