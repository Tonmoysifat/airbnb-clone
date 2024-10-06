const CategoryModel = require("../models/CategoryModel");
const CategoryService = async () => {
    try {
        let data = await CategoryModel.find();
        return {status: "Success", data: data}
    } catch (e) {
        return {status: "Fail", data: e.toString()}
    }
}

module.exports = {
    CategoryService
}
