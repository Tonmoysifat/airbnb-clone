const {PropertyService, PropertyServiceByCategory, PropertyServiceByFilter} = require("../services/PropertyService");

exports.PropertyList = async (req, res) => {
    let result = await PropertyService();
    return res.status(200).json(result)
}
exports.PropertyListByCategory = async (req, res) => {
    let result = await PropertyServiceByCategory(req);
    return res.status(200).json(result)
}
exports.PropertyListByFilter = async (req, res) => {
    let result = await PropertyServiceByFilter(req);
    return res.status(200).json(result)
}