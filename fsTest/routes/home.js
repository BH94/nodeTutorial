const express = require("express");
var fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  const filepath = "../requestFile/content.txt";
  fs.exists(filepath, function(exists) {
    if (exists) {
      const todo = fs.readFileSync("../requestFile/content.txt");
      res.write("<h1>Hello</h1>");
      res.write(`${todo}`);
    } else {
      res.write("<h1>Hello</h1>");
      res.write("<h2>No todo</h2>");
    }
  });
});

module.exports = router;

// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.write(`<h1>${res.json.message}</h1>`);
// });

// module.exports = router;
