const Link = require('../models/Link')
const Str = require('@supercharge/strings')
const linkValidation = require('../Validations/linkValidation')



const createLink = (req,res)=>{
    try{
     
        const validate = linkValidation(linkValidation)
        if(validate.error){
            res.json({msg:validate.error.details[0].message})
            return res.status(400)
        }
        const {slug,ios,andriod,web}=req.body
        if(!slug){
        const randomSlug = Str.random(6) // creating a random slug if not sent in request 
        const newLink = Link.create({slug:randomSlug,ios:ios,andriod:andriod,web:web})
        }
        else
        const newLink = Link.create(req.body)
        return res.status(201)
     

       
       



    }
    catch(error){
        return res.status(500)
    }
}

module.exports={
    createLink
}