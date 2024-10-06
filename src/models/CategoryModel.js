const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
        imageUrl:{type:String},
        title: {type: String}
    },
    {timestamps: true, versionKey: false}
)
const CategoryModel = mongoose.model('categories', DataSchema)
module.exports = CategoryModel