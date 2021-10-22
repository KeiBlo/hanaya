import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const getProductsByCategory = asyncHandler(async (req, res) => {
  const categoryName = req.path.replace(/\//g, '').replace('category', '')

  const products = await Product.find({ category: categoryName })

  res.json(products)
})

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

//@desc Get  products with highest rating
//@route GET /api/products/top
//@access Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'top-sales' })

  res.json(products)
})

export { getProducts, getProductById, getTopProducts, getProductsByCategory }
