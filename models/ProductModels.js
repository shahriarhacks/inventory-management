const mongoose = require("mongoose");

//Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be Required"],
      trim: true,
      unique: [true, "Name must be Unique"],
      minLength: [3, "Name must be at least three Character"],
      maxLength: [100, "Name is too Large"],
    },
    description: {
      type: String,
      required: [true, "You must need to add Description"],
    },
    price: {
      type: Number,
      required: [true, "Price must be need for your Product"],
      min: [0, "Price can't accept negative"],
    },
    unit: {
      type: String,
      required: [true, "Unit must need for a product"],
      enum: {
        values: ["kg", "liter", "pcs"],
        message:
          "Unit value can't be accepted this {VALUE}, Unit must need kg/liter/pcs",
      },
    },
    quantity: {
      type: Number,
      required: [true, "Quantity must need"],
      min: [0, "Quantity must need positive Number"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity can't be a Float Number",
    },
    status: {
      type: String,
      required: [true, "Status must need"],
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message:
          "Status can't be accept {VALUE}, must need in-stock/out-of-stock/discontinued",
      },
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier Model",
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Mongoose middleware for saving data: two types of middleware in Mongoose : pre and post

productSchema.pre("save", function (next) {
  console.log("Before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});

productSchema.post("save", function (doc, next) {
  console.log("After saving data");
  next();
});

//Model

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
