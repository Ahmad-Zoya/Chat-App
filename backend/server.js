import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes.js";

const app = express();

const PORT = process.env.PORT || 5000
app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.use("/api/user/login", router)

app.listen(PORT,() => console.log('Server Running on part ${PORT}'));