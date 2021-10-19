import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('MondoDB connected!!')
  } catch (error) {
    console.error(error)
    //Exit process with failure
    process.exit(1)
  }
}

export default connectDB
