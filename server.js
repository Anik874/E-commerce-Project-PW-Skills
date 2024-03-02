//This will be the starting file of the project.

const express = require("express");                 //using express
const mongoose = require("mongoose");               //using mongoose
const app = express();                              //created our App
const server_config = require("./configs/server.config")  
const db_config = require("./configs/db.config")
const user_model = require("./models/user.model")
const bcrypt = require("bcryptjs")

app.use(express.json())  //It's a middleware to read json as js

/**
 * Create an admin user at the starting of the application
 * if not already present
 */
//Establishing Connection with mongodb
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection;


db.on("error",()=>{
    console.log("Error while connecting to the database")
})
db.once("open",()=>{
    console.log("Connected")
    init();
})

async function init(){
    try{
        let user  = await user_model.findOne({userId : "admin"})

       if(user){
          console.log("Admin is already present")
          return
        }

    }catch(err){
        console.log("Error while reading the data", err)
    }

     try {
        user = await user_model.create({
            name : "Aniket",
            userId : "admin",
            email : "aniketkumar267@gmail.com",
            usertype : "ADMIN",
            password : bcrypt.hashSync("Welcome!",8)
        })
        console.log("Admin Created", user)

     }catch(err){
        console.log("Error while creating admin",err)
     }
}

//stitch  the route to the server
require("./routes/auth.routes")(app)
require("./routes/category.routes")(app)




//Starting the server
app.listen(server_config.PORT, ()=>{
    console.log("Server Started at PORT num = ", server_config.PORT);
})