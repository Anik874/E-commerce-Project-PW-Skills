/**
 * POST localhost:8080/ecom/api/v1/auth/categories
 * GET  localhost:8080/ecom/api/v1/auth/categories/fetch
 * 
 * I need to intercept this
 */
// const auth_mw = require("../middlewares/auth_mw")
category_controller = require("../controllers/category.controller")
auth_mw = require("../middlewares/auth_mw")


module.exports = (app)=>{
    app.post("/ecom/api/v1/auth/categories", [auth_mw.verifyToken, auth_mw.isAdmin] ,category_controller.createNewCategory)

    app.get("/ecom/api/v1/auth/categories/fetch", category_controller.fetchCategories)
}