const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
        category: { type: String },
        privacyType: [{
            anyType: Boolean,
            entireRoom: Boolean,
            room: Boolean
        }],
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        },
        guests: { type: Number },
        bedrooms: { type: Number },
        beds: { type: Number },
        bathrooms: { type: Number },
        images: [String],
        title: { type: String },
        price: { type: Number },
        priceWithOutTax: { type: Number },
        hosts: { type: String },
        features: { type: String },
        stays: { type: String },
        stayDate: { type: String },
        amenities: [{
            wifi: Boolean,
            kitchen: Boolean,
            washer: Boolean,
            dryer: Boolean,
            airConditioning: Boolean,
            heating: Boolean
        }],
        availableFrom: { type: Date },
        availableUntil: { type: Date },
    },
    { timestamps: true, versionKey: false });

DataSchema.index({ location: '2dsphere' });

const PropertyModel = mongoose.model('properties', DataSchema);

module.exports = PropertyModel;