// const express = require('express');
import  express  from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'there was an error connecting to MongoDB'))
db.once("open", () => {
    console.log("connected MongoDB")
})

const app = express();
app.use(express.json())
routes(app)

export default app