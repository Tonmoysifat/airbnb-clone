const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
        wifi: {type: Boolean},
        kitchen: {type: Boolean},
        washer: {type: Boolean},
        dryer: {type: Boolean},
        airConditioning: {type: Boolean},
        heating: {type: Boolean},
        propertyId: {type: mongoose.Schema.Types.ObjectId, required: true, unique:true},
    },
    {timestamps: true, versionKey: false}
)
const FeatureModal = mongoose.model('features', DataSchema)
module.exports = FeatureModal