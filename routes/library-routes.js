import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/library-controllers.js";
// create a router
const libraryRouter = Router();

// define routes
libraryRouter.post('/books', addBook);
libraryRouter.get('/books', getAllBooks);
libraryRouter.get('/books/:id', getOneBook );
libraryRouter.patch('/books/:id', updateBook);
libraryRouter.delete('/books/:id', deleteBook)

// export router
export default libraryRouter;
