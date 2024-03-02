/**
 * Controller for creating the category
 * 
 * POST localhost:8080/ecom/api/v1/categories
 */
const category_model = require("../models/category.model")

exports.createNewCategory = async (req,res)=>{

    //Read the req body


    //Create a category
    const cat_data = {
        name : req.body.name,
        description : req.body.description
    }

    //Insert into MongoDB
    try{
        const category = await category_model.create(cat_data)
        return res.status(201).send(category)
    }catch(err){
        console.log("Error while creating the category",err)
        return res.status(500).send({
            message : "Error while creating the category"
        })
    }
   

    //return the response of the created category
}


exports.fetchCategories = async (req,res)=>{

    //check if the category is present or not
    const category = await category_model.findOne({name: req.body.name})

    if(category==null){
        res.status(400).send({
            message : "This Category is not present in database"
        })
    }

    res.status(200).send({
        name : category.name,
        description : category.description
    })

}