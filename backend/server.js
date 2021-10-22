import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

// import userRoutes from './routes/userRoutes.js'
// import profileRoutes from './routes/profileRoutes.js'

dotenv.config()

//Connect Database
connectDB()
const app = express()

//Init Middleware
app.use(express.json())

//Define Routes
app.use('/api/products', productRoutes)

// app.use('/api/users', userRoutes)
// app.use('/api/profile', profileRoutes)

const PORT = process.env.PORT || 7777

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} at ${process.env.NODE_ENV} mode`)
})
