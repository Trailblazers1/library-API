import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/library-controllers.js";
import { bookValidate, updateBookValidate } from "../validators/library-validators.js";

// create a router
const libraryRouter = Router();

// define routes
libraryRouter.post('/books', bookValidate,addBook);
libraryRouter.get('/books', getAllBooks);
libraryRouter.get('/books/:id', getOneBook );
libraryRouter.patch('/books/:id', updateBookValidate,updateBook);
libraryRouter.delete('/books/:id', deleteBook)

// export router
export default libraryRouter;
