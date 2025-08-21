import { useRef, useState } from "react";
import { useTranslation } from "react-i18next"; 
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o1ppwwa", 
        "template_2epdt3m",  
        formRef.current,
        "NEGBKCCG5m-jUXg9q" 
      )
      .then(() => {
        setIsSent(true);
        formRef.current.reset(); 
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
          {t("contact")}
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("paraContact")}
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
            placeholder={t("yourname")}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("youremail")}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder={t("yourmessage")}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            {t("send")} 
          </button>
          {isSent && <p className="text-green-400">{t("messageSent")}</p>}
        </motion.form>
      </div>
    </section>
  );
};
export default Contact;