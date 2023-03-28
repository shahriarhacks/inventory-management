const Product = require("../models/ProductModels");

exports.getProductServices = async () => {
  const result = await Product.find({});
  return result;
};

exports.getProductServiceById = async (id) => {
  const result = await Product.findById(id);
  return result;
};

exports.saveProductServices = async (data) => {
  const result = await Product.create(data);
  return result;
};

exports.updateProductServiceById = async (productId, data) => {
  const result = await Product.updateOne(
    { _id: productId },
    { $set: data },
    { runValidators: true }
  );

  return result;
};

exports.bulkUpdateProductService = async (data) => {
  // const result = await Product.updateMany({ _id: data.ids }, data, {
  //   runValidators: true,
  // });
  const products = [];
  data.ids.forEach((product) => {
    const pd = Product.updateOne({ _id: product.id }, product.data, {
      runValidators: true,
    });
    products.push(pd);
  });
  const result = await Promise.all(products);
  return result;
};
