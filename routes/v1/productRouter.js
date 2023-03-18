const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

router.post("/", productController.SaveAProduct);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getASingleProduct);

module.exports = router;
