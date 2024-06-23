import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-screen bg-fixed bg-center bg-cover bg-no-repeat" 
    style={{ backgroundImage: `url('https://i.postimg.cc/wj09QyrZ/national-cancer-institute-KMvo-Hc-B-w5g-unsplash-1.webp')` }}>
 {/* Overlay */}
 <div className="absolute inset-0 bg-black opacity-50"></div>
 
 <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-10 space-y-8">
   {/* About Us Heading */}
   <h1 className="text-4xl font-bold text-white text-center">
     About Us
   </h1>

   {/* Large Content Card */}
   <div className="w-full max-w-4xl p-8 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg border border-gray-200 shadow-lg">
     <h2 className="text-2xl font-semibold text-white mb-4">Our Mission and Values</h2>
     <p className="text-gray-300">
       At our company, we strive to deliver excellence in all that we do. Our mission is to innovate and provide top-notch services to our clients, ensuring their satisfaction and success. We believe in the power of creativity, collaboration, and commitment to achieve outstanding results. Our team is dedicated to pushing the boundaries and setting new standards in our industry.
     </p>
     <p className="text-gray-300 mt-4">
       We are passionate about our work and take pride in our achievements. Our core values include integrity, innovation, and customer-centricity. We are constantly evolving and adapting to meet the ever-changing needs of our clients, and we believe in building long-term relationships based on trust and mutual respect.
     </p>
   </div>

   {/* Founder Card */}
   <div class="max-w-md bg-white bg-opacity-20 backdrop-blur-lg rounded-lg border border-gray-200 shadow-lg overflow-hidden">
  <div class="relative">
    <img src="https://i.postimg.cc/k431yXP0/IMG-20240623-WA0009-1-1.webp" alt="Founder" class="w-full h-64"/>
  </div>
  <div class="p-6">
    <h2 class="mb-2 text-2xl font-bold text-white text-center">Founder Name</h2>
    <p class="text-sm text-gray-300">
      Dear Visitors,

      Welcome to J-BANS ICU CARE PVT. LTD.

      I am delighted to have you here. At J-BANS ICU CARE PVT. LTD. , we are dedicated to pioneering new frontiers in healthcare through innovation and excellence. Whether you are exploring our latest products or learning more about our journey, we are committed to providing you with trusted resources and support.

      Thank you for joining us on our mission to enhance global health and well-being. Your interest and support mean a lot to us.
    </p>
  </div>
</div>

  
 </div>

 {/* Animation (using Tailwind CSS animations) */}

</div>
  );
};

export default About;
