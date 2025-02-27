import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_74q4lfg", 
        "template_whb5zvf",
        formData,
        "CO8MTGj7-PgUa6k1w" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({ type: "success", message: "Enquiry sent successfully!" });
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus({ type: "error", message: "Something went wrong!" });
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <div className="max-w-lg sm:w-full w-96 mx-auto bg-gray-100 shadow-xl border-solid border-2 rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold text-center text-emerald-600 mb-4">
        Enquiry Form
      </h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <textarea
          name="message"
          placeholder="Your Enquiry"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white p-3 rounded-md shadow-md hover:bg-emerald-700 transition duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 text-center text-sm ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default EnquiryForm;
