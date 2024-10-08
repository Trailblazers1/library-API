import { ReviewModel } from "../models/review-models.js";

export const addReview = async (req, res, next) => {
    try {
        await ReviewModel.create(req.body);
    
        res.status(201).json('A review has been added');
        
    
    } catch (error) {
        next(error);
    }
    } 
    
    
    export const getAllReviews = async (req, res, next) => {
        try {
            const reviews = await ReviewModel.find();
            // res.status(200).json('Get all reviews');
            res.status(200).json(reviews);
        } catch (error) {
           next(error); 
        }
        
    }
    
    
    export const getOneReview = async (req, res, next) => {
        try {
            const oneReview = await ReviewModel.find();
            res.status(200).json('Get one review');
        } catch (error) {
            next(error);
        }
       
    }
    export const updateReview = async (req, res, next) => {
        try {
            const reviewUpadate = await ReviewModel.updateOne();
            res.status(201).json('A review has updated');
        } 
        catch (error) {
            next(error);
        }
     
    }

    export const deleteReview = async (req, res, next) => {
        try {
            const reviewDel = await ReviewModel.deleteOne();
            res.status(201).json('A review has been deleted');
        } 
        catch (error) {
            next(error);
        }
       
    }