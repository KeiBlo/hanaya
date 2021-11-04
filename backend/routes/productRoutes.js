import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  getTopProducts,
  getProductsByCategory,
} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/search').get(getProducts)
router.route('/top').get(getTopProducts)
router.route('/category/:name').get(getProductsByCategory)
router.route('/:id').get(getProductById)

export default router
