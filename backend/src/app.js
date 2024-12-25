import express from 'express';
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import  { connectToSocket }  from "./controllers/socketManager.js";

import cors from "cors";
import router from "./routes/user.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({ limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

app.use("/api/v1/users", router);

const start = async () => {
    app.set("mongo_user")
    const connectionDB = await mongoose.connect("mongodb+srv://rockersss250:lWPgBYH2Ikcjqz6H@cluster0.8js3c.mongodb.net/");
    console.log(`MONGO Connected DB Host: ${connectionDB.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("listening on port 8000");
    });
};

start();