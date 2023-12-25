import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.listen(3000, () => {
	console.log("Server started on port 3000");
});

import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/todoapp")
	.then(() => console.log("Connected!"));

var db = mongoose.connection;
db.on("open", () => {
	console.log("Connected to mongoDB");
});
db.on("error", (error) => {
	console.log(error);
});

export const viteNodeApp = app;