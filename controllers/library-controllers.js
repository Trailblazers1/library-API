
import { LibraryModel } from "../models/library-models.js";

export const addBook = async (req, res, next) => {
try {
   const bookPost = await LibraryModel.create(req.body);

    // res.status(201).json('A book has been added');
    res.status(201).json(bookPost);

} catch (error) {
    next(error);
}
}


export const getAllBooks = async (req, res, next) => {
    try {
        const books = await LibraryModel.find();
        // res.status(200).json('Get all books');
        res.status(201).json(books);
    } catch (error) {
       next(error); 
    }
    
}


export const getOneBook = async (req, res, next) => {
    try {
        const onebook = await LibraryModel.findById(req.params.id);
        res.status(201).json(onebook);
    } catch (error) {
        next(error)
    }
    
}
export const updateBook = async (req, res, next) => {
    try {
        const update = await LibraryModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(update);
    } catch (error) {
        next (error)
    }
   
}
export const deleteBook = async (req, res, next) => {
    try {
        const bookDelete = await LibraryModel.findByIdAndDelete(req.params.id)
        res.status(200).json(bookDelete);
    } catch (error) {
        next(error)
    }
  
}