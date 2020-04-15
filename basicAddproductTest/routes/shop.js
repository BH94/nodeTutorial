const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile('/views/shop/html');
  res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //__dirname => routes 폴더를 가르킴
});

module.exports = router;
