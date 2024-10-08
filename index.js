import express from "express";
import mongoose  from "mongoose";
import cors from 'cors';
import libraryRouter from "./routes/library-routes.js";
import authorRouter from "./routes/author-routes.js";
import reviewRouter from "./routes/review-routes.js";

// create express app
const libraryApp = express();


// connect to the database
await mongoose.connect(process.env.MONGO_URI);


libraryApp.use(cors());
libraryApp.use(express.json());
libraryApp.use(libraryRouter);
libraryApp.use(authorRouter);

libraryApp.use(reviewRouter)

// listen for incoming requests
libraryApp.listen(3002, function(){
    console.log('App is listening on port 3002')
}); 