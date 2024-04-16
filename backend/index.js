const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");

const app = express();

// Middlewares
dotenv.config();
app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path + " " + req.method);
    next();
});
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);


// Database Connection and Config
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log(error.message);
    }
}

app.get("/", (req,res) => {
    const data = {
        name: "Abhishek",
        age: 19,
        college: "SIT",
    }
    res.status(200).json(data);
})

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server running on port ${process.env.PORT}`);
})
