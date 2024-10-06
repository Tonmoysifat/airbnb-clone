const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const PropertyController = require("../controllers/PropertyController");
const router = express.Router();

router.get("/CategoryList", CategoryController.CategoryList)
router.get("/PropertyList", PropertyController.PropertyList)
router.get("/PropertyListByCategory/:category", PropertyController.PropertyListByCategory)
router.post("/PropertyListByFilter", PropertyController.PropertyListByFilter)
module.exports = router;