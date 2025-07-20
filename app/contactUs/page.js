"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email") setError("");
  };

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // Construct mailto link (only message in body)
    const mailto = `mailto:support@sleeptrackr.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`;
    window.location.href = mailto;
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center mb-8 text-gray-600">
        Have a question, feedback, or sleep-related issue? We're here for you!
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className={`w-full p-3 border rounded-xl ${error ? 'border-red-400' : 'border-gray-300'}`}
        />
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-xl h-32"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10 text-gray-600">
        Or email us directly at{" "}
        <a href="mailto:support@sleeptrackr.com" className="text-blue-600">
          support@sleeptrackr.com
        </a>
      </div>
    </div>
  );
}
