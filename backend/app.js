import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";  
import ContactMe from "./model/schema.js";
dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000; 

// CORS Configuration
const corsOptions = {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"], 
};

app.use(cors(corsOptions)); 
app.use(express.json()); 

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); 
    });


app.post("/api/contactme", async (req, res) => {
    const { name, email, message, phone } = req.body;


    if (!name || !email || !message || !phone) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const contact = await ContactMe.create({ name, email, message, phone });
        res.status(201).json({ message: "Created successfully", contact });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
