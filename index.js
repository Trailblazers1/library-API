import express from "express";
import mongoose  from "mongoose";
import cors from 'cors';
import libraryRouter from "./routes/library-routes.js";
<<<<<<< HEAD
import authorRouter from "./routes/author-routes.js";
=======
import reviewRouter from "./routes/review-routes.js";
>>>>>>> d7c54930c6e63fec7632b80171bd89bc7e4c1e6a

// create express app
const libraryApp = express();


// connect to the database
await mongoose.connect(process.env.MONGO_URI);


libraryApp.use(cors());
libraryApp.use(express.json());
<<<<<<< HEAD
libraryApp.use(libraryRouter);
libraryApp.use(authorRouter);
=======
libraryApp.use(libraryRouter)
libraryApp.use(reviewRouter)
>>>>>>> d7c54930c6e63fec7632b80171bd89bc7e4c1e6a

// listen for incoming requests
libraryApp.listen(3002, function(){
    console.log('App is listening on port 3002')
}); 