const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(4500, () => {
  console.log("Server is listening on http://localhost:4500");
});
