import express from "express"
const router = express.Router()
import {
  getProducts,
  getProductById,
  getTopProducts,
  getProductsByCategory,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from "../controllers/productController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").get(getProducts).post(protect, admin, createProduct)
router.route("/:id/reviews").post(protect, createProductReview)
router.route("/search").get(getProducts)
router.get("/top", getTopProducts)
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
router.route("/category/:name").get(getProductsByCategory)

export default router
