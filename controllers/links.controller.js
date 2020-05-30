const Link = require('../models/Link')
const Str = require('@supercharge/strings')
const linkValidation = require('../Validations/linkValidation').createVal


const errorCreator = (code, message) => ({ error: { code, message } })
const createLink = async (req,res)=>{
    try{
   
     
        const validate = linkValidation(req.body)
    
        if(validate.error){
           
      
            return res.status(400).send(errorCreator(400,`bad request:${validate.error.details[0].message}`))
        }
        const {slug,ios,android,web}=req.body
        if(!slug){
        const randomSlug = Str.random(6) // creating a random slug if not sent in request 
        console.log(randomSlug)
        const newLink = await Link.create({slug:randomSlug,ios:ios,android:android,web:web})
        return res.json({msg:'link created',data:newLink})
        }
        else{
        newLink = await Link.create(req.body)
        return res.json({msg:'link created',data:newLink})
        }
       
    
       
     

       
       



    }
    catch(error){
      return res.status(500).send(errorCreator(500,'server error'))
    }
}

module.exports={
    createLink
}