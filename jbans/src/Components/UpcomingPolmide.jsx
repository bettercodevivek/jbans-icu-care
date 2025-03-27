import { motion } from "framer-motion";
import { FaCapsules, FaFlask, FaBone } from "react-icons/fa";

export default function StarProductPage() {
  return (
    <section className="relative bg-white text-[#97144d] py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Product Header */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Polmide Forte – A Revolutionary Step in Healthcare
        </motion.h1>
        <p className="text-lg text-gray-600 mb-6">
          The latest breakthrough in pharma, designed to enhance well-being and accelerate recovery.
        </p>
      </div>

      {/* Product Image & Features */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        {/* Product Image */}
        <motion.img
          src="https://i.postimg.cc/3JJwnFkm/IMG-20250309-WA0002.webp"
          alt="PharmaStarX"
          className="w-full max-w-xs md:max-w-sm rounded-xl shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
        />

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-sm">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center space-x-3">
            <FaCapsules className="text-blue-500 text-2xl" />
            <p className="text-lg font-semibold">Enhanced Absorption for Maximum Effect</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center space-x-3">
            <FaFlask className="text-green-500 text-2xl" />
            <p className="text-lg font-semibold">Clinically Tested & Certified Safe</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center space-x-3">
            <FaBone className="text-red-500 text-2xl" />
            <p className="text-lg font-semibold">Works best in all kinds of pain</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center mt-10">
        <motion.button
          className="px-6 py-3 bg-[#97144d] text-white font-normal text-lg rounded-lg shadow-lg hover:bg-green-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Pre-Order Now
        </motion.button>
      </div>
    </section>
  );
}
