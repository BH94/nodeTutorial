const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/add-todo", (req, res, next) => {
  res.send(
    '<form action="/todolist" method="POST"><input type="text" name="title"><button type="submit">Add Todo</button></form>'
  );
});

router.post("/todolist", (req, res, next) => {
  console.log(req.body.title); //input name => title
  const message = req.body.title;
  fs.writeFileSync("../requestFile/content.txt", message);
  res.redirect("/");
});

module.exports = router;

//get => action => post
