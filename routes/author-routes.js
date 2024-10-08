import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getOneAuthor, updateAuthor } from "../controllers/author-controllers.js";


// create a router for the author
const authorRouter = Router();

// define routes
authorRouter.post('/authors',addAuthor );
authorRouter.get('/authors', getAllAuthors);
authorRouter.get('/authors/:id', getOneAuthor );
authorRouter.patch('/authors/:id', updateAuthor);
authorRouter.delete('/authors/:id', deleteAuthor);

// export router
export default authorRouter;