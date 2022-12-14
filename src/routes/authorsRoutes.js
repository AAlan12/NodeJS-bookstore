import  express  from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
    .get("/authors",AuthorController.listAuthors)
    .get("/authors/:id",AuthorController.listAuthorById)
    .post("/authors",AuthorController.registerAuthor)
    .put("/authors/:id",AuthorController.updatingAuthor)
    .delete("/authors/:id",AuthorController.removeAuthor)

export default router;