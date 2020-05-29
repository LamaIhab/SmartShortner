const Joi = require("joi");


const createVal = request => {
  const linkData = {
    slug: Joi.string(),
    ios: Joi.object().keys({
        primary:Joi.string().required(),
        fallback:Joi.string().required()


    }),
 
    android: Joi.object().keys({
        primary:Joi.string().required(),
        fallback:Joi.string().required()
    }),
    web:Joi.Sting().required()
    
  };
  return Joi.validate(request, linkData);
};
module.exports = {
  createVal
};