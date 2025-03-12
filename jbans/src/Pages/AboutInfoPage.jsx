import React from "react";
import { FaUsers, FaBuilding, FaHandshake, FaTablets, FaEye, FaBullseye, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutInfoPage() {
  return (
    <section className="bg-gray-50 py-12 px-8 lg:px-24">
      {/* Company Metrics Section with Animation */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center mb-20">
        {[  
          { icon: <FaUsers className="text-emerald-600 text-4xl md:text-6xl mx-auto mb-4" />, label: "Employees", value: "450+" },
          { icon: <FaTablets className="text-blue-500 text-4xl md:text-6xl mx-auto mb-4" />, label: "Products", value: "150+" },
          { icon: <FaBuilding className="text-yellow-500 text-4xl md:text-6xl mx-auto mb-4" />, label: "Experience", value: "7+ Years" },
          { icon: <FaHandshake className="text-red-500 text-4xl md:text-6xl mx-auto mb-4" />, label: "Customers", value: "65,000+" }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="p-10 bg-white shadow-xl rounded-2xl border border-gray-200 transition transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
            <p className="text-gray-600 text-lg md:text-xl font-bold">{item.label}</p>
          </motion.div>
        ))}
      </div>   

      {/* About Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-emerald-600 mb-10">About J-BANS ICU Care</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          <span className="font-semibold text-emerald-600">J-BANS ICU CARE PVT LTD</span> is one of the most trusted Critical Care Injection Companies in India.
        </p>
        <ul className="text-lg text-gray-600 mt-8 space-y-6 text-left max-w-3xl mx-auto">
          {[
            "A GMP and WHO approved manufacturer that strictly adheres to all the guidelines.",
            "World-Class manufacturing unit fully furnished with top-notch machines and equipment.",
            "High-Quality products that are effective,efficient and safe are our speciality.",
            "The greatest packaging is offered by our company together with the highest quality critical care medications.",
            "All products are delivered on schedule to every region of the nation.",
            " The company owns top-notch facilities with sophisticated machines, equipment for quality testing, and other amenities."
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-emerald-600 text-2xl">•</span> {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Vision, Mission, Values - Animated Cards with Icons */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Our Vision", content: " As a pharmaceutical company, our vision is to dominate critical care segment by launching a maximum number of injection products. our focus is on developing comprehensive range of injectable products, including 2ml, 5ml, 10ml, 100ml, 250ml and 500ml. We aim to launch these products by 2025, covering the full spectrum of critical care segments.", icon: <FaEye className="text-emerald-600 text-4xl md:text-5xl mx-auto mb-4" /> },
          { title: "Our Mission", content: "Our mission is to provide high-quality critical care injections that ensure customer satisfaction, while expanding our reach to a maximum number of dealers and hospitals. If you're interested in doing business with us and earning good profits, you can join our mission.", icon: <FaBullseye className="text-emerald-600 text-4xl md:text-5xl mx-auto mb-4" /> },
          { title: "Our Values", content: "We uphold integrity, innovation, and a patient-first mindset in every aspect of our business. Our commitment is to ensure ethical manufacturing, transparent practices, and high-quality injectable products, maintaining strict adherence to safety regulations.", icon: <FaHeart className="text-emerald-600 text-4xl md:text-5xl mx-auto mb-4" /> }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 shadow-lg rounded-xl text-center transform transition hover:scale-105 hover:shadow-xl border-t-4 border-emerald-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {item.icon}
            <h3 className="text-2xl md:text-4xl font-semibold text-emerald-600 mb-4">{item.title}</h3>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
