import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({

    rating:  {type: Number, required: true},
    Comment: {type: String},
library: { type: Types.ObjectId, ref: 'Library'}

   
});

export const ReviewModel = model('Review', userSchema);