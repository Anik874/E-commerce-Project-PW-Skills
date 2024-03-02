/**
 * POST localhost:8080/ecom/api/v1/auth/signup 
 * 
 * I need to intercept this
 */
const authcontroller = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth_mw")

module.exports = (app)=>{
    app.post("/ecom/api/v1/auth/signup",[authMW.verifySignUpBody] ,authcontroller.signup)

    /**
    * Route for:-
    * POST localhost:8080/ecom/api/v1/auth/signin
    */
    app.post("/ecom/api/v1/auth/signin", [authMW.verifySignInBody] ,authcontroller.signin)
}


