import mongoose from "mongoose";
import next from "next";

const connectMongoDB = async () => {
    try {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.log(error);
    }
  };
  
export default connectMongoDB;