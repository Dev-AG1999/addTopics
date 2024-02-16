import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://aishwariyaghosal04:hQQZ1TZoehlJzKit@cluster0.e3k3u7n.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.log(error);
    }
  };
  
export default connectMongoDB;