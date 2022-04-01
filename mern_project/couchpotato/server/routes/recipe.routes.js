const RecipeController = require("../controllers/recipe.controllers");

module.exports = (app) => {
    app.get("/api/recipe/:name", RecipeController.findAllData);
    app.get("/api/favorite", RecipeController.findAllfavoriteData);
    app.get("/api/recipe/view/:id", RecipeController.findOneSingleData);
    app.put("/api/recipe/:id", RecipeController.updateExistingData);
    app.post("/api/recipe/new", RecipeController.createNewData);
    app.delete("/api/recipe/delete/:id", RecipeController.deleteAnExistingData);
};