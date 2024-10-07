import express from "express";
import mongoose  from "mongoose";
import cors from 'cors';
import libraryRouter from "./routes/library-routes.js";

// create express app
const libraryApp = express();


// connect to the database
await mongoose.connect(process.env.MONGO_URI);

// define routes
// libraryApp.get('/library', (req, res, next) => {
//     res.json('A book has been found')
// })

libraryApp.use(cors());
libraryApp.use(express.json());
libraryApp.use(libraryRouter)
// listen for incoming requests
libraryApp.listen(3001, function(){
    console.log('App is listening on port 3001')
}); 