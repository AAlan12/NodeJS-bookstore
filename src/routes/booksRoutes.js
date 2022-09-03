import  express  from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
    .get("/books",BookController.listBooks)
    .get("/books/:id",BookController.listBookById)
    .post("/books",BookController.registerBook)
    .put("/books/:id",BookController.updatingBook)
    .delete("/books/:id",BookController.removeBook)

export default router;