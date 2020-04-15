const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

//미들웨어는 무조건 위에서 아래로 진행되기 때문에
//미들웨어 가장 밑에 404 error pages를 추가한다.
//status 404는 페이지를 찾을 수 없을 때 전송되는 공동 코드이다.
//그래서 정의되지 않은 페이지의 이름으로 들어오게 되면 page not found를 전송한다.
