const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow

const RecipeSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Please enter a {PATH}"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    name2: {
        type: String,
        required: [true, "Please enter a {PATH}"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    image: {
        type: String,
        required: [true, "Please enter a {PATH}"],
        minlength: [10, "{PATH} must be at least 10 chars long"]
    },
    ingredients: {
        type: String,
        required: [true, "Please enter a {PATH}"],
        minlength: [10, "{PATH} must be at least 10 chars long"]
    },
    direction1: {
        type: String,
        required: [true, "Please enter a {PATH}"],
        minlength: [10, "{PATH} must be at least 10 chars long"]
    },
    direction2: {
        type: String,
        required: [true, "Please enter a {PATH}"],
        minlength: [10, "{PATH} must be at least 10 chars long"]
    },
    direction3: {
        type: String,
        required: [true, "Please enter a {PATH}"],
        minlength: [10, "{PATH} must be at least 10 chars long"]
    },
    time: {
        type: Number,
        required: [true, "Please enter a {PATH}"],
        min: [1, "{PATH} must be greater than 1"]
    },
    favorite: {
        type: Boolean,
        default: false
    }
}, {timestamps:true});

// the model - this is what we use to make the actual queries to the DB
const Recipe = mongoose.model("Recipe", RecipeSchema)

// eport the model
module.exports = Recipe;