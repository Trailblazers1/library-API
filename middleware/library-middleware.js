import Joi from "joi";
export const bookvalidate =(req,res,next)=>{
const bookValidation = Joi.object({
    title: Joi.string().required(),
    summary: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    cover: Joi.string().required(),
    content: Joi.string().required(),
    year: Joi.number().required(),
});

    try {
        const{error} = bookValidation.validate(req.body)
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