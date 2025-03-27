import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function StarProductPage() {
  return (
    <section className="relative bg-gray-50 text-gray-900 py-12 px-6 md:px-12">
      {/* Product Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Introducing <span className="text-[#97144d]">Polmide Forte</span>
        </motion.h1>
      </div>

      {/* Product Image */}
      <div className="flex justify-center my-6">
        <motion.img
          src="https://i.postimg.cc/3JJwnFkm/IMG-20250309-WA0002.webp"
          alt="PharmaStarX"
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Product Description */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="text-[#97144d] font-bold">Polmide Forte</span> works synergestically to reduce joint pain and inflammation, thereby improving bone health.
        </p>
      </div>

      {/* Background Story */}
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-[#97144d] mb-4">Background Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
         Arthritis is the second most common rheumatologic problem in India and the most frequent joint disease in the country, 
          affecting between 22% to 39% of the population. Many patients suffer daily from joint stiffness, inflammation, and pain, 
          impacting their mobility and quality of life. Inspired by this widespread challenge, Polmide Forte was developed as a 
          scientifically backed solution to help alleviate these symptoms. Combining extensive research with cutting-edge 
          pharmaceutical advancements, Polmide Forte offers a targeted approach to managing arthritis effectively.
        </p>
      </div>

          {/* Mechanism of Action */}
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-[#97144d] mb-4">Mechanism of Action</h2>
        <ul className="space-y-3 list-disc pl-5">
          <li className="text-lg text-gray-700"><strong>Palmitoylethanolamide:</strong> Reduces inflammation and alleviates chronic pain by modulating the body's endocannabinoid system.</li>
          <li className="text-lg text-gray-700"><strong>Vitamin D3:</strong> Supports bone health and reduces joint pain by enhancing calcium absorption and immune function.</li>
          <li className="text-lg text-gray-700"><strong>Quercetin:</strong> A powerful antioxidant that helps reduce oxidative stress and inflammation in joints.</li>
          <li className="text-lg text-gray-700"><strong>Resveratrol:</strong> Promotes cartilage protection and reduces inflammation, improving overall joint health.</li>
        </ul>
      </div>


      {/* Dosage */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#97144d] mb-4">Dosage</h2>
        <p className="text-lg text-gray-700">
          Recommended dosage: <strong>One Tablet per day </strong> or Consult your physician for personalized guidance.
        </p>
      </div>
    </section>
  );
}
