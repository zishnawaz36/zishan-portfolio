import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address"
        ]
    },
    phone: {
        type: String,
        required: true,
        match: [
            /^\d{10}$/,
            "Please enter a valid 10-digit phone number"
        ]
    },
    message: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("ContactMe", contactSchema);
