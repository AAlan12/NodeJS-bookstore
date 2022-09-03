import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/bookstore")

let db = mongoose.connection;
export default db;