import Joi from "joi";
export const authorvalidate =(req,res,next)=>{
const authorValidation = Joi.object({
    name: Joi.string().required(),
    bio: Joi.string()
});


    try {
        const{error} = authorValidation.validate(req.body)

        if (error) {
        
        return res.status(400).json(error)}

        else {

            next();
        }
        
        
    } catch (error) {
       next(error) 
    }
}