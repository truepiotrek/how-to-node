const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>this is users page</h1>");
});

app.use((req, res, next) => {
  res.send("<h1>this is home page</h1>");
});

app.listen(3000);
