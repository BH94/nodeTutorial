const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const addTodoRoutes = require("./routes/addTodo");
const homeRoutes = require("./routes/home");

app.use(addTodoRoutes);
app.use(homeRoutes);

app.listen(port);
