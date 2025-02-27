import React from "react";

export default function AboutInfoPage() {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-600 mb-6">About J-BANS ICU Care</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold text-emerald-600">J-BANS ICU Care</span>, we are committed to providing
          high-quality critical care solutions to enhance patient outcomes. With a mission to revolutionize
          healthcare, we specialize in manufacturing & supplying life-saving pharmaceutical products.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Vision Card */}
        <div className="bg-white p-6 shadow-lg rounded-2xl max-w-sm text-center transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Our Vision</h3>
          <p className="text-gray-700">
            To be a global leader in critical care pharmaceuticals by ensuring affordable, high-quality medicines
            for all.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-6 shadow-lg rounded-2xl max-w-sm text-center transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Our Mission</h3>
          <p className="text-gray-700">
            To innovate and deliver reliable, effective ICU products, ensuring better healthcare accessibility
            worldwide.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white p-6 shadow-lg rounded-2xl max-w-sm text-center transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Our Values</h3>
          <p className="text-gray-700">
            Integrity, Innovation, Patient-Centric Approach—driving excellence in critical care medicine.
          </p>
        </div>
      </div>
    </section>
  );
}
