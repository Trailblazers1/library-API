import Joi from "joi";
export const bookValidate =(req,res,next)=>{
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

export const updateBookValidate =(req,res,next)=>{
    const updateValidation = Joi.object({
        title: Joi.string(),
        summary: Joi.string(),
        author: Joi.string(),
        genre: Joi.string(),
        cover: Joi.string(),
        content: Joi.string(),
        year: Joi.number(),
    })

    try {
        const{error} = updateValidation.validate(req.body)
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