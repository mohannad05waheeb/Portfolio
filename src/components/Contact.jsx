import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o1ppwwa", // ✅ ضع هنا Service ID
        "template_2epdt3m", // ✅ ضع هنا Template ID الصحيح
        formRef.current,
        "NEGBKCCG5m-jUXg9q" // ✅ ضع هنا Public Key
      )
      .then(() => {
        setIsSent(true);
        formRef.current.reset(); // مسح المدخلات بعد الإرسال
      })
      .catch((error) => console.error("Email Error:", error));
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out for collaborations or any inquiries.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
          {isSent && <p className="text-green-400">Message sent successfully! ✅</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
