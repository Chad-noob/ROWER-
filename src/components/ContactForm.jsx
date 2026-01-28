import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID"; // e.g., "service_xxxxxxx"
      const templateId = "YOUR_TEMPLATE_ID"; // e.g., "template_xxxxxxx"
      const publicKey = "YOUR_PUBLIC_KEY"; // e.g., "xxxxxxxxxxxxxxx"

      const templateParams = {
        from_name: formData.name,
        from_area: formData.area,
        from_mobile: formData.mobile,
        message: formData.message,
        to_email: "mechcreatio@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", area: "", mobile: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again or email us directly.",
      });
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Enquiry Form</h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you soon.
        </p>
      </div>

      {status.submitted && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
          <span className="text-2xl mr-2">✓</span>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
          <span className="text-xl mr-2">⚠️</span>
          {status.error}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Area Field */}
        <div>
          <label
            htmlFor="area"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Area
          </label>
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Where are you from...?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Mobile Number Field */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Your mobile number"
            pattern="[0-9+\-\s]+"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Ask us anything..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all text-gray-800 placeholder-gray-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full py-4 rounded-lg font-semibold text-white text-lg transition-all shadow-lg ${
            status.submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-rose-600 hover:bg-rose-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          }`}
        >
          {status.submitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        <span className="text-red-500">*</span> Indicates required field
      </p>
    </div>
  );
}
