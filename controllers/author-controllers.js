import { AuthorModel } from "../models/author-model.js";
export const addAuthor  = async (req, res, next) => {
    try {
        await AuthorModel.create(req.body);
    
        res.status(201).json('An author has been added');
    
    } catch (error) {
        next(error);
    }
    }
    
    export const getAllAuthors = async (req, res, next) => {
        try {
            const books = await AuthorModel.find();
            res.status(201).json('All authors displayed');
        } catch (error) {
           next(error); 
        }
        
    }

    export const getOneAuthor = (req, res,) => {
        res.json('An author has been displayed');
    }
    export const updateAuthor = (req, res) => {
        res.json('An author has been updated');
    }

    export const deleteAuthor = (req, res, next) => {
        res.json('An author has been deleted');
    }