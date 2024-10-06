const {CategoryService} = require("../services/CategoryService");

exports.CategoryList = async (req, res) => {
    let result = await CategoryService();
    return res.status(200).json(result)
}