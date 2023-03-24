const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

// router.post("/", productController.saveAProduct);

// router.get("/", productController.getAllProducts);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.saveAProduct);

// router.get("/:id", productController.getASingleProduct);

// router.patch(":/id", productController.updateAProduct);
router
  .route("/:id")
  .get(productController.getASingleProduct)
  .patch(productController.updateAProduct);

module.exports = router;
