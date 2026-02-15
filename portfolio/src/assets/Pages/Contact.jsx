import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    messageText: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    if (!formData.firstname || !formData.email) {
      setMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thank you! We’ll get back to you soon.",
        });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          messageText: "",
        });
      } else {
        setMessage({
          type: "error",
          text: `Failed: ${result.message || "Unknown error"}`,
        });
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const Input = ({ name, type = "text", placeholder, required }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={formData[name]}
      onChange={handleChange}
      required={required}
      className="w-full p-3 border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  );

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-black rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row max-w-5xl w-full">
        {/* FORM SECTION */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-3">
            Get In Touch 👋
          </h1>

          <p className="text-gray-400 mb-8 text-base sm:text-lg">
            Need help with something? Want to work together? Fill the form and
            I’ll respond shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input name="firstname" placeholder="First Name" required />
              <Input name="lastname" placeholder="Last Name" />
            </div>

            <Input
              name="email"
              type="email"
              placeholder="abc@email.com"
              required
            />

            <Input name="phoneNumber" type="tel" placeholder="Phone Number" />

            <textarea
              name="messageText"
              placeholder="Your message here..."
              value={formData.messageText}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 resize-none border border-gray-300 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>

            {message.text && (
              <div
                className={`p-3 rounded-lg text-center ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1769788873505-c2d2f570ae0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
