const express = require("express");
const connectDB = require("./config/ConnectDB");
const authRouter = require("./routes/auth");
const itemRouter=require("./routes/item")
const userRouter = require("./routes/user");
const app = express();



//middleWares
app.use(express.json());

// connect database
connectDB();

app.use("/api/auth", authRouter);
app.use("/api/auth", itemRouter);
app.use("/api/auth",userRouter)

//lunch the Server
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Serveris Running on port ${port}....`);
});