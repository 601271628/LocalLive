const express = require("express");
const address = require("address");
const locahost = address.ip() || "0.0.0.0";

//创建web服务器 （像http.createServe()）
const app = express();

// 图片资源
app.use("/img", express.static("./img")); //加上访问前缀

app.get("/shopList/:id/:currentPage/:pageSize", (req, res) => {
  //   console.log(req.body);
  //   console.log(req.query);
  console.log(req.params);

  let shopList = new Array(10).fill({
    title: "虾仁寿司披萨",
    // imgSrc: "http://localhost:3006/img/food.jpeg",
    imgSrc: `http://${locahost}:3006/img/food.jpeg`,
    phone: "15540980866",
    address: "深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳深圳",
    time: "周一至周日10:00-21:00",
  });

  res.send({
    status: 200,
    message: "请求成功!",
    data: {
      shopList,
      total: 30,
    },
  });
});

//2 启动web服务器
// app.listen(3006, () => {
//   console.log("express服务器启动成功 http://127.0.0.1:3006");
// });
app.listen(3006, locahost, 0, () => {
  console.log(`express服务器启动成功 ${locahost}`);
});
