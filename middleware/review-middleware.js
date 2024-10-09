import Joi from "joi";
export const reviewvalidate =(req,res,next)=>{
const reviewValidation = Joi.object({
    
    comment: Joi.string(),
    rating: Joi.number().required()
});


    try {
        const{error} = reviewValidation.validate(req.body)
        if (error) {
            return res.status(400).json(error)
        }

            else {

                next();
            }
    } catch (error) {
       next(error) 
    }
}

