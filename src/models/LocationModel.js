const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        },
        propertyId: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true},
    },
    {timestamps: true, versionKey: false}
)
const LocationModel = mongoose.model('locations', DataSchema)
module.exports = LocationModel