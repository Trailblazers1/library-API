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
    export const updateReview = (req, res, next) => {
        res.json('A review has updated');
    }
    export const deleteReview = (req, res, next) => {
        try {
            res.json('A review has been deleted');
        } catch (error) {
            next(error);
        }
       
    }