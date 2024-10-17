import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`);

        console.log(`/n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
       console.log("MONGODB connection error: ", error); 
    }
}

export default connectDB