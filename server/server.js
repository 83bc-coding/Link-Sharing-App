const express = require("express");
const connectDB = require("./config/db.config");
 const authUser = require('./routes/userRout')
connectDB();
const app = express();
app.use(express.json());
app.use("/api/users", authUser);
app.listen(5000, () => {
	console.log("I am listening in port 5000");
});