const express = require("express");

//connect to database
require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use("/auth", require("./router/authRouter"));

app.use("/user", require("./router/userRouter"));

app.listen(4000, () => console.log("Server run and running"));
