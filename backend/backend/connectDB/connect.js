import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,      // Parses connection string
            useUnifiedTopology: true,  // Uses the new server discovery and monitoring engine
        });
        console.log(`MongoDB connected successfully: ${connect.connection.host}`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectDB;
