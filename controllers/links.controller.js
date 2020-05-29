const Link = require('../models/Link')
const Str = require('@supercharge/strings')



const createLink = (req,res)=>{
    try{
        const slug = req.body.slug
        if(!slug)
        const randomSlug = Str.random(6) // creating a random slug if not sent in request 



    }
    catch(error){
        return res.status(500).send('Server Error')
    }
}

module.exports={
    createLink
}