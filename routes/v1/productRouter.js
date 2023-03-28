const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

//Route

router.route("/bulk-update").patch(productController.bulkUpdateProduct);

//Root Route
router
  .route("/")
  .get(productController.getAllProduct)
  .post(productController.saveAProduct);

//Dynamic Route
router
  .route("/:id")
  .get(productController.getProductById)
  .patch(productController.updateProductById);

module.exports = router;
