const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Success!");
});

app.listen(8080, () => {
  console.log("App is listening on port: http://localhost:8080");
});
