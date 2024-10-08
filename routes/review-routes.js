import { Router } from "express";
import { addReview, deleteReview, getAllReviews, getOneReview, updateReview } from "../controllers/review-controllers.js";

// create a router
const rewiewRouter = Router();

// define routes
rewiewRouter.post('/reviews', addReview);
rewiewRouter.get('/reviews', getAllReviews);
rewiewRouter.get('/reviews/:id', getOneReview );
rewiewRouter.patch('/reviews/:id', updateReview);
rewiewRouter.delete('/reviews/:id', deleteReview)

// export router
export default rewiewRouter;
