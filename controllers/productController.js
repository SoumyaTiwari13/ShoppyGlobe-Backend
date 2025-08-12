import Product from "../models/Product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const addProducts= async (req, res) => {
  try {
    const products = await Product.create(req.body);
    return res.status(201).json(addProducts)
  } catch (err) {
    return res.status(500).json({ message: "Server Error"});
  }
};

