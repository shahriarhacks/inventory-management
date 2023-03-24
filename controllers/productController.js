const {
  getProductServices,
  getAProductService,
  saveProductServices,
  updateAProductService,
} = require("../services/productServices");

exports.getAllProducts = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const filter = { $or: [{ unit: "pcs" }, { status: "out-of-stock" }] };
    // const filter = { status: { $ne: "out-of-stock" } };
    // const filter = { price: { $gte: 349.99 } };
    // const filter = {};
    // const product = await Product.find(filter, "name price status -_id");
    // const product = await Product.where('unit').and(['pcs'])
    // const product = await Product.where("name")
    //   .equals(/\w/)
    //   .where("price")
    //   .gt(350)
    //   .where("unit")
    //   .in(["pcs", "kg"])
    //   .where("price")
    //   .ne(500)
    //   .sort({ createdAt: 1 })
    //   .skip(1);

    const product = await getProductServices();

    res.status(200).json({
      status: "success",
      isDone: true,
      message: "Products getting successful",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      isDone: false,
      message: "There was an error to create a Product",
      error: error.message,
    });
  }
};

exports.getASingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getAProductService(id);
    res.status(200).json({
      status: "success",
      isDone: true,
      message: "Products getting successful",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      isDone: false,
      message: "There was an error to create a Product",
      error: error.message,
    });
  }
};
exports.saveAProduct = async (req, res, next) => {
  try {
    const pd = req.body;
    // if (pd.quantity == 0) {
    //   pd.status = "out-of-stock";
    // }
    // const product = new Product(pd);
    // const result = await product.save();
    const result = await saveProductServices(pd);
    res.status(201).json({
      status: "success",
      isDone: true,
      message: "Product created successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      isDone: false,
      message: "There was an error to create a Product",
      error: error.message,
    });
  }
};

exports.updateAProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateAProductService(id, data);
    res.status(201).json({
      status: "success",
      isDone: true,
      message: "Product created successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      isDone: false,
      message: "There was an error to update a Product",
      error: error.message,
    });
  }
};
