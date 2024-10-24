const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
        anyType: {type: Boolean},
        entireRoom: {type: Boolean},
        room: {type: Boolean},
        propertyId: {type: mongoose.Schema.Types.ObjectId, required: true, unique:true},
    },
    {timestamps: true, versionKey: false}
)
const PrivacyTypeModal = mongoose.model('ptypes', DataSchema)
module.exports = PrivacyTypeModal