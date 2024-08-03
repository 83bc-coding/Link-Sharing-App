const express = require("express");
const connectDB = require("./config/db.config");
 
connectDB();
const app = express();








const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
    console.log("Listening on Port: " + PORT);
  });