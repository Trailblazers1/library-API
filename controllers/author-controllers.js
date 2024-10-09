import { AuthorModel } from "../models/author-model.js";
export const addAuthor  = async (req, res, next) => {
    try {
       const newAuthor = await AuthorModel.create(req.body);
    
        // res.status(201).json('An author has been added');
        res.status(201).json(newAuthor);
    
    } catch (error) {
        next(error);
    }
    }
    
    export const getAllAuthors = async (req, res, next) => {
        try {
            const books = await AuthorModel.find();
            // res.status(201).json('All authors displayed');
            res.status(201).json(books);
        } catch (error) {
           next(error); 
        }
        
    }

    export const getOneAuthor = async (req, res,) => {
        try {
            const oneAuthor = await AuthorModel.findById(req.params.id)
            res.status(201).json(oneAuthor);
        } 
        catch (error) {
            next(error);
        }
        
    }
    export const updateAuthor = async (req, res) => {
        try {
            const authorUpdate = await AuthorModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).json(authorUpdate);
        } catch (error) {
            next (error);
        }
        
    }

    export const deleteAuthor = async (req, res, next) => {
        try {
            const authorDelete = await AuthorModel.findByIdAndDelete(req.params.id);
            res.status(200).json(authorDelete);
        } catch (error) {
            next(error);
        }
        
    }