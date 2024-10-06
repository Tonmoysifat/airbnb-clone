const PropertyModel = require("../models/PropertyModel");
const PropertyService = async () => {
    try {
        let data = await PropertyModel.find();
        return {status: "Success", data: data}
    } catch (e) {
        return {status: "Fail", data: e.toString()}
    }
}

const PropertyServiceByCategory = async (req) => {
    try {
        let category = req.params.category;
        let matchStage = {$match: {category: category}};
        let data = await PropertyModel.aggregate([matchStage])
        return {status: "Success", data: data}
    } catch (e) {
        return {status: "Fail", data: e.toString()}
    }
}

const PropertyServiceByFilter = async (req) => {
    try {
        const { privacyType, bedrooms, beds, bathrooms, guests, priceWithOutTax, amenities, location, startDate, endDate } = req.body;
        const filterQuery = [];

        if (privacyType && privacyType.length > 0) {
            privacyType.forEach(pType => {
                filterQuery.push({ [`privacyType.${pType}`]: true });
            });
        }
        if (guests) {
            filterQuery.push({ guests: { $gte: guests } });
        }
        if (bedrooms) {
            filterQuery.push({ bedrooms: { $gte: bedrooms } });
        }

        if (beds) {
            filterQuery.push({ beds: { $gte: beds } });
        }

        if (bathrooms) {
            filterQuery.push({ bathrooms: { $gte: bathrooms } });
        }

        const aggregationPipeline = [];

        // Add $geoNear stage if location is provided
        if (location && location.coordinates) {
            const [lon, lat] = location.coordinates;
            aggregationPipeline.push({
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [lon, lat],
                    },
                    distanceField: "distance",
                    maxDistance: 1000000,
                    spherical: true,
                }
            });
        }

        if (priceWithOutTax) {
            filterQuery.push({
                priceWithOutTax: {
                    $gte: priceWithOutTax.min,
                    $lte: priceWithOutTax.max
                }
            });
        }

        if (amenities && amenities.length > 0) {
            amenities.forEach(amenity => {
                filterQuery.push({ [`amenities.${amenity}`]: true });
            });
        }

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);

            filterQuery.push({
                $expr: {
                    $and: [
                        { $gte: ["$availableUntil", start] },
                        { $lte: ["$availableFrom", end] },
                    ]
                }
            });
        }

        // Add the $match stage if there are other filters
        if (filterQuery.length > 0) {
            aggregationPipeline.push({
                $match: {
                    $and: filterQuery
                }
            });
        }

        const filteredProperties = await PropertyModel.aggregate(aggregationPipeline);

        return { status: "Success", data: filteredProperties };
    } catch (error) {
        console.error('Error filtering properties:', error);
        return { status: "Fail", data: error.toString() };
    }
};


module.exports = {
    PropertyService,
    PropertyServiceByCategory,
    PropertyServiceByFilter
}
