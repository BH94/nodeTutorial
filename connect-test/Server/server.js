const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");
bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});

app.listen(port, () => console.log("Backend server live on " + port));
