import mongoose from "mongoose"

const connectDB = async(req, res, next)=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected to ${conn.connection.host}`.cyan.underline )
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;