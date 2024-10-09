import { Router } from "express";
import { addReview, deleteReview, getAllReviews, getOneReview, updateReview } from "../controllers/review-controllers.js";
import { reviewvalidate } from "../middleware/review-middleware.js";

// create a router
const rewiewRouter = Router();

// define routes
rewiewRouter.post('/reviews', reviewvalidate,addReview);
rewiewRouter.get('/reviews', getAllReviews);
rewiewRouter.get('/reviews/:id', getOneReview );
rewiewRouter.patch('/reviews/:id', reviewvalidate,updateReview);
rewiewRouter.delete('/reviews/:id', deleteReview)

// export router
export default rewiewRouter;
