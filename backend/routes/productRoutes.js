import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductsByCategory,
  getProductById,
  getTopProducts,
  searchProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/category/:name').get(getProductsByCategory)
router.route('/:id/reviews').post(protect, createProductReview)
router.route('/search').get(searchProducts)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
