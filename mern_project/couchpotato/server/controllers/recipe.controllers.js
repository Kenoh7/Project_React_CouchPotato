const Recipe = require("../models/recipe.models");

module.exports.findAllData = (req, res) => {
    Recipe.find({ name: req.params.name })
    // IMPORTANT what we return here is what we will receive in REACT
        .then(allData => res.json({ recipe: allData, message: "success" }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAllfavoriteData = (req, res) => {
    Recipe.find()
    // IMPORTANT what we return here is what we will receive in REACT
        .then(allData => res.json({ recipe: allData, message: "success" }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// READ ONE
module.exports.findOneSingleData = (req, res) => {
	Recipe.findOne({ _id: req.params.id })
		.then(oneSingleData => res.json({ recipe: oneSingleData, message: "success"  }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

// CREATE
module.exports.createNewData = (req, res) => {
    console.log(req.body);
    Recipe.create(req.body)
    .then(newlyCreatedData => res.json({ recipe: newlyCreatedData, message: "success"  }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

// UPDATE
module.exports.updateExistingData = (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    // In axios if you would do response.data -> response.data.jokes
    .then(updatedData => res.json({ recipe: updatedData, message: "success" }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// DELETE
module.exports.deleteAnExistingData = (req, res) => {
    Recipe.deleteOne({ _id: req.params.id })
    .then(result => res.json({ recipe: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};