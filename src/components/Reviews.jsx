import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";  
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";

const Reviews = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const reviews = [review1, review2, review3];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="reviews"
      className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-10"
    >
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("reviews")}
      </motion.h2>

      <Swiper
        dir="rtl"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-3xl custom-swiper"
      >
        {reviews.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="flex justify-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Review ${index + 1}`}
                className="rounded-lg shadow-lg border-4 border-gray-700 max-h-[400px] object-contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>     
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged review"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reviews;
