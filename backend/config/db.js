import mongoose from 'mongoose'

// connect to mongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MDB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    console.log('Connected to mongoDB')

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
