const Product = require("../models/ProductModels");

exports.getProductServices = async () => {
  const result = await Product.find({});
  return result;
};

exports.getAProductService = async (id) => {
  const result = await Product.findById(id);
  return result;
};

exports.saveProductServices = async (data) => {
  const result = await Product.create(data);
  return result;
};

exports.updateAProductService = async (productId, data) => {
  const result = await Product.updateOne(
    { _id: productId },
    { $set: data },
    { runValidators: true }
  );

  return result;
};
