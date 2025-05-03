import React, { useState } from "react";
import axios from "axios";

function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data before submitting
        if (!formData.name || !formData.email || !formData.message || !formData.phone) {
            setErrorMessage("All fields are required.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:4500/api/contactme", formData);
            if (response.status === 201) {
                setSuccessMessage("Thank you for your patience! Message sent successfully!");
                setErrorMessage("");
                setFormData({ name: "", email: "", message: "", phone: "" });
            } else {
                setErrorMessage(`Error: ${response.data.error}`);
                setSuccessMessage("");
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again later.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-600 to-black text-white p-4">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

                {/* Display success or error message */}
                {successMessage && (
                    <div className="bg-green-600 text-white p-2 rounded mb-4 text-center">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="bg-red-600 text-white p-2 rounded mb-4 text-center">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium">
                            Phone:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
