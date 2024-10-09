import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/library-controllers.js";
import { bookvalidate } from "../middleware/library-middleware.js";

// create a router
const libraryRouter = Router();

// define routes
libraryRouter.post('/books', bookvalidate,addBook);
libraryRouter.get('/books', getAllBooks);
libraryRouter.get('/books/:id', getOneBook );
libraryRouter.patch('/books/:id', bookvalidate,updateBook);
libraryRouter.delete('/books/:id', deleteBook)

// export router
export default libraryRouter;
