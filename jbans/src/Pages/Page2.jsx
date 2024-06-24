import React from "react";

export default function Page2() {
  return (
    <div className="p-6 relative top-12 flex flex-col mb-12 gap-8 justify-center items-center">
      <h1 className="md:text-4xl mb-8 lg:text-4xl text-3xl text-red-600 text-center font-extrabold">
        Our Bestselling Products
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-12 lg:gap-16">
        {/* Product 1 */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/bwpJD15b/IMG-20240623-WA0010-removebg-preview.webp"
            className="max-w-full md:max-w-xs lg:max-w-sm rounded-2xl"
            alt="Product"
            style={{
              filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.25))",
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent" />
        </div>
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-red-500 via-red-500 to-red-700 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-4 md:p-8 max-w-xs md:max-w-md lg:max-w-lg flex flex-col justify-between transition-transform duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:scale-105">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4">
            SODA-Q 25/ SODA-Q 100
          </h1>
          <p className="text-white leading-relaxed">
  <strong>Product:</strong> SODA-Q (Sodium bicarbonate Tr 8.4%)<br/><br/>
  
  <strong>Form:</strong>
  <ul>
    <li>Available as immol/ml in 10 ml, 25 ml ampoules, and 100 ml vials.</li>
    <li>Each ampoule contains 25 mmol of sodium bicarbonate 8.4%.</li>
  </ul>
  
  <strong>Dosage:</strong>
  <ul>
    <li>25 to 50 mL of an 8.4% solution may be given by slow IV injection followed by infusion of diluted solution, if needed.</li>
    <li>The full dose may also be given by IV infusion of the diluted solution.</li>
    <li>50 to 100 mL of an 8.4% solution may be given by slow IV injection or infusion of diluted solution.</li>
  </ul>
</p>

        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-12 lg:gap-16">
        {/* Product 2 */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/SxdKWJ0P/IMG-20240623-WA0012-removebg-preview.webp"
            className="max-w-full md:max-w-xs lg:max-w-sm rounded-2xl"
            alt="Product"
            style={{
              filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.25))",
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent" />
        </div>
        {/* Card 2 */}
        <div className="bg-gradient-to-r from-red-500 via-red-500 to-red-700 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-4 md:p-8 max-w-xs md:max-w-md lg:max-w-lg flex flex-col justify-between transition-transform duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:scale-105">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4">
            J-BANS LBU
          </h1>
          <p className="text-white leading-relaxed">
  <strong>Albumin Human:</strong> A purified form of human serum albumin used for various medical purposes.<br/><br/>

  <strong>Uses:</strong>
  <ul>
    <li>To replace lost albumin in patients with hypoalbuminemia</li>
    <li>To treat hypovolemia</li>
    <li>To treat ascites</li>
    <li>As a component in some diagnostic imaging kits</li>
  </ul>

  <strong>Primary Protein:</strong>
  <ul>
    <li>Human serum albumin is the main protein found in human blood plasma.</li>
  </ul>
</p>

        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-12 lg:gap-16">
        {/* Product 3 */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/Pqq5KTT5/IMG-20240623-WA0013-removebg-preview.webp"
            className="max-w-full md:max-w-xs lg:max-w-sm rounded-2xl"
            alt="Product"
            style={{
              filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.25))",
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent" />
        </div>
        {/* Card 3 */}
        <div className="bg-gradient-to-r from-red-500 via-red-500 to-red-700 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-4 md:p-8 max-w-xs md:max-w-md lg:max-w-lg flex flex-col justify-between transition-transform duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:scale-105">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4">
            AGGRABAN
          </h1>
          <p className="text-white leading-relaxed">
  <strong>Usage:</strong>
  <ul>
    <li>To assist blood flow to the heart</li>
    <li>To manage chest pain</li>
    <li>To manage heart attack</li>
    <li>In patients whose heart vessels are dilated with a balloon during percutaneous coronary intervention</li>
    <ul>
      <li>A procedure where a small tube or stent is implanted to improve blood flow to the heart</li>
    </ul>
  </ul>
</p>

        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-12 lg:gap-16">
        {/* Product 4 */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/FsjzHTTN/IMG-20240619-WA0007-removebg-preview.webp"
            className="max-w-full md:max-w-xs lg:max-w-sm rounded-2xl"
            alt="Product"
            style={{
              filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.25))",
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent" />
        </div>
        {/* Card 4 */}
        <div className="bg-gradient-to-r from-red-500 via-red-500 to-red-700 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-4 md:p-8 max-w-xs md:max-w-md lg:max-w-lg flex flex-col justify-between transition-transform duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:scale-105">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4">
            GLUCONIT
          </h1>
          <p className="text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque eum eius corporis eaque sint odit reprehenderit debitis ex,
            unde porro praesentium dolorum nostrum cum laborum possimus
            consequatur voluptatum saepe. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Laboriosam atque eum eius corporis
            eaque sint odit reprehenderit debitis ex, unde porro praesentium
            dolorum nostrum cum laborum possimus consequatur voluptatum saepe.
          </p>
        </div>
      </div>
    </div>
  );
}
