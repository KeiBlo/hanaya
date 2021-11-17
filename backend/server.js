import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
// import profileRoutes from "./routes/profileRoutes.js"
import contactFormRoutes from "./routes/contactFormRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

dotenv.config()

//Connect Database
connectDB()
const app = express()

//Init Middleware
app.use(express.json())
app.use(cors())

//Define Routes
app.use("/api/products", productRoutes)
app.use("/api/email", contactFormRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

// app.use("/api/profile", profileRoutes)

app.use("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
const PORT = process.env.PORT || 7777

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} at ${process.env.NODE_ENV} mode`)
})
