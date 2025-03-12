import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { FiSearch, FiMic, FiChevronDown, FiChevronUp, FiPackage, FiPlusCircle, FiDroplet } from 'react-icons/fi';
import { FaDownload, FaCapsules, FaHospital, FaPaw, FaStethoscope, FaEye } from 'react-icons/fa';
import ProductCatalog from './ProductCatalog';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement('#root');

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Critical Care');
  const [isListening, setIsListening] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice search is not supported on this browser. Please use Chrome or Edge.');
      return;
    }
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    setIsListening(true);
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      setIsListening(false);
    };
    
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
  };

  const indiamartLinks = [
    { name: 'Pharmaceutical Injections', url: 'https://www.indiamart.com/jbans-icu-care/pharmaceutical-injection.html',icon:<FiPackage></FiPackage> },
    { name: 'Softgel Capsules', url: 'https://www.indiamart.com/jbans-icu-care/pharmaceutical-softgel-capsules.html',icon:<FaCapsules></FaCapsules> },
    { name: 'Pharmaceutical Injection & Solutions', url: 'https://www.indiamart.com/jbans-icu-care/pharmaceutical-injection-and-solution.html',icon:<FiPlusCircle></FiPlusCircle> },
    { name: 'Sodium Bicarbonate 8.4% Injection', url: 'https://www.indiamart.com/jbans-icu-care/sodium-bicarbonate-84-injection.html',icon:<FaStethoscope></FaStethoscope> },
    { name: 'Veterinary Medicines', url: 'https://www.indiamart.com/jbans-icu-care/veterinary-medicines.html',icon:<FaPaw></FaPaw>},
    { name: 'Acetylcystine Injection', url: 'https://www.indiamart.com/jbans-icu-care/acetylecystine-injection.html',icon:<FiDroplet></FiDroplet>},
    { name: 'Pharmaceutical Syrup', url: 'https://www.indiamart.com/jbans-icu-care/pharmaceutical-syrup.html',icon:<FaHospital></FaHospital>},
    { name: 'MethylPrednisolone-Injection', url: 'https://www.indiamart.com/jbans-icu-care/methylprednisolone-injection.html',icon:<FiDroplet></FiDroplet>},
    { name: 'Tirofiban Infusion', url: 'https://www.indiamart.com/jbans-icu-care/tirofiban-infusion.html',icon:<FaStethoscope></FaStethoscope>},
    { name: 'Calcium Gluconate 10ml', url: 'https://www.indiamart.com/jbans-icu-care/calcium-gluconate-calcium-lactobionate-10-ml.html',icon:<FiPackage></FiPackage>},
  ];

  // const catalogueImages = [
  //   'https://via.placeholder.com/800x600/1',
  //   'https://via.placeholder.com/800x600/2',
  //   'https://via.placeholder.com/800x600/3',
  //   'https://via.placeholder.com/800x600/4',
  // ];

  // const catalogueImages = [
  //   'https://i.postimg.cc/k4HzG6hB/fjmnap3vsjtrdidlx8dm.webp',
  //   'https://i.postimg.cc/90qS7mv1/na0sqxoge21zo3965giy.webp',
  //   'https://i.postimg.cc/CKR1Wr53/Untitled-1-1-page-0003.webp',
  //   'https://i.postimg.cc/jSw6hcKj/Untitled-1-1-page-0004.webp',
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const categories = {
    'Critical Care': [
      {
        id: 1,
        name: 'MINOBAN',
        image: 'https://i.postimg.cc/BZrdSfhw/IMG-20240619-WA0005.webp',
      },
      {
        id: 7,
        name: 'MINOBAN',
        image: 'https://i.postimg.cc/1z7jbknB/IMG-20240624-WA0009.webp',
      },
      {
        id: 2,
        name: 'ORNIBAN',
        image: 'https://i.postimg.cc/907KdLfp/IMG-20240624-WA0004.webp',
      },
      {
        id: 3,
        name: 'MEGBAN',
        image: 'https://i.postimg.cc/447DRx19/IMG-20240624-WA0005.webp',
      },
      {
        id: 4,
        name: 'DOXYBIN',
        image: 'https://i.postimg.cc/VkRTWrz3/IMG-20240624-WA0006.webp',
      },
      {
        id: 5,
        name: 'ONDABAN',
        image: 'https://i.postimg.cc/K8FwTrhP/IMG-20240624-WA0007.webp',
      },
      {
        id: 6,
        name: 'MUCODRAIN',
        image: 'https://i.postimg.cc/W41yWN3t/IMG-20240624-WA0008.webp',
      },
      {
        id: 8,
        name: 'J-PRED-500',
        image: 'https://i.postimg.cc/3Rycht2T/IMG-20240624-WA0010.webp',
      },
      {
        id: 14,
        name: 'J-PRED-40',
        image: 'https://i.postimg.cc/9FHn3tM6/IMG-20240624-WA0016.webp',
      },
      {
        id: 15,
        name: 'J-PRED-125',
        image: 'https://i.postimg.cc/9QWg0my1/IMG-20240624-WA0017.webp',
      },
      {
        id: 17,
        name: 'J-PRED-1000',
        image: 'https://i.postimg.cc/zfQxxT6P/IMG-20240624-WA0019.webp',
      },
      {
        id: 9,
        name: 'PANTOBAN-40 ',
        image: 'https://i.postimg.cc/cHV5Lfc8/IMG-20240624-WA0011.webp',
      },
      {
        id: 10,
        name: 'TAZOBAN',
        image: 'https://i.postimg.cc/MHV3MXs3/IMG-20240624-WA0012.webp',
      },
      {
        id: 11,
        name: 'J-CETAM',
        image: 'https://i.postimg.cc/05wBHH8G/IMG-20240624-WA0013.webp',
      },
      {
        id: 12,
        name: 'AQABAN',
        image: 'https://i.postimg.cc/7ZmsTFV4/IMG-20240624-WA0014.webp',
      },
      {
        id: 13,
        name: 'CEFBAN',
        image: 'https://i.postimg.cc/PrbFdpvP/IMG-20240624-WA0015.webp',
      },
      {
        id: 16,
        name: 'AXAMIK-T',
        image: 'https://i.postimg.cc/9f0xPL87/IMG-20240624-WA0018.webp',
      },
      {
        id: 18,
        name: 'SODA-Q 25',
        image: 'https://i.postimg.cc/rsXQkM81/IMG-20240624-WA0020.webp',
      },
      {
        id: 19,
        name: 'K-BAN10',
        image: 'https://i.postimg.cc/C1fmXzVM/IMG-20240624-WA0021.webp',
      },
      {
        id: 20,
        name: 'ESOMERZ',
        image: 'https://i.postimg.cc/7P0KNGVm/IMG-20240624-WA0022.webp',
      },
      {
        id: 22,
        name: 'POTCIBAN',
        image: 'https://i.postimg.cc/9Q8bfGmF/IMG-20240624-WA0024.webp',
      },
      {
        id: 23,
        name: 'CITCOL-J',
        image: 'https://i.postimg.cc/65KYbWbw/IMG-20240624-WA0025.webp',
      },
      {
        id: 24,
        name: 'EDROBAN',
        image: 'https://i.postimg.cc/dt9nzbgC/IMG-20240624-WA0026.webp',
      },
      {
        id: 25,
        name: 'CORTIBAN',
        image: 'https://i.postimg.cc/L86vRyMb/IMG-20240624-WA0027.webp',
      },
      {
        id: 26,
        name: 'MEROBAN 1g',
        image: 'https://i.postimg.cc/k52cRBGN/IMG-20240624-WA0028.webp',
      },
      {
        id: 27,
        name: 'THIMBAN',
        image: 'https://i.postimg.cc/Xvtgf4BR/IMG-20240624-WA0029.webp',
      },
      {
        id: 28,
        name: 'MEROBAN-S',
        image: 'https://i.postimg.cc/PxZQK9mP/IMG-20240624-WA0030.webp',
      },
      {
        id: 29,
        name: 'SODA-Q-100',
        image: 'https://i.postimg.cc/kGmFHscw/IMG-20240624-WA0031.webp',
      },
      {
        id: 30,
        name: 'DOXYFILL',
        image: 'https://i.postimg.cc/c4dBMD6L/IMG-20240624-WA0032.webp',
      },
      {
        id: 31,
        name: 'AMIKABAN-J',
        image: 'https://i.postimg.cc/kMQySrJH/IMG-20240624-WA0033.webp',
      },
      {
        id: 32,
        name: 'RABETAN',
        image: 'https://i.postimg.cc/qMQXm8CX/IMG-20240624-WA0034.webp',
      },
      {
        id: 33,
        name: 'LABTEC',
        image: 'https://i.postimg.cc/zvFSYh2N/IMG-20240624-WA0035.webp',
      },
      {
        id: 34,
        name: 'LESSO',
        image: 'https://i.postimg.cc/MpT0gv7k/IMG-20240624-WA0036.webp',
      },
      {
        id: 36,
        name: 'JEPSOLIN',
        image: 'https://i.postimg.cc/bvSxNWV3/IMG-20240624-WA0038.webp',
      },
      {
        id: 37,
        name: 'JASIX',
        image: 'https://i.postimg.cc/858hF4qD/IMG-20240624-WA0039.webp',
      },
      {
        id: 38,
        name: 'CLINDABAN 600',
        image: 'https://i.postimg.cc/Qtpcc537/IMG-20240624-WA0040.webp',
      },
      {
        id: 35,
        name: 'CLINDABAN',
        image: 'https://i.postimg.cc/fRr7sDCV/IMG-20240624-WA0037.webp',
      },
      {
        id: 39,
        name: 'NOREDEO',
        image: 'https://i.postimg.cc/T10m46hY/IMG-20240624-WA0041.webp',
      },
      {
        id: 40,
        name: 'LEVETRABAN',
        image: 'https://i.postimg.cc/d3wr61sx/IMG-20240624-WA0042.webp',
      },
    ],
    'Tablets & Syrups': [
      {
        id: 41,
        name: 'FAROBIN-ER 300',
        image: 'https://i.postimg.cc/yxPxz25Q/IMG-20240625-WA0011.webp',
      },
      {
        id: 42,
        name: 'ACECLOBIN-SP',
        image: 'https://i.postimg.cc/fTzkvTt6/IMG-20240625-WA0012.webp',
      },
      {
        id: 43,
        name: 'CALZIN-CT',
        image: 'https://i.postimg.cc/Dyx0pk1m/IMG-20240625-WA0013.webp',
      },
      {
        id: 44,
        name: 'UDOBIN',
        image: 'https://i.postimg.cc/59q6vF0B/IMG-20240625-WA0014.webp',
      },
      {
        id: 45,
        name: 'CEFROBIN-500',
        image: 'https://i.postimg.cc/NjLMWJxD/IMG-20240625-WA0015.webp',
      },
      {
        id: 46,
        name: 'COCIT-P',
        image: 'https://i.postimg.cc/P5cxhW3j/IMG-20240625-WA0016.webp',
      },
      {
        id: 47,
        name: 'RIFABIN-400',
        image: 'https://i.postimg.cc/s2h22MqZ/IMG-20240625-WA0017.webp',
      },
      {
        id: 48,
        name: 'MULTIBIN-9G',
        image: 'https://i.postimg.cc/bJfwSzfV/IMG-20240626-WA0000.webp',
      },
      {
        id: 49,
        name: 'SUCRALFIT-O',
        image: 'https://i.postimg.cc/wM6xF0vh/IMG-20240626-WA0002.webp',
      },
      {
        id: 50,
        name: 'LYCOBIN SYRUP',
        image: 'https://i.postimg.cc/tJ2qcWZ8/IMG-20240626-WA0003.webp',
      },
      {
        id: 51,
        name: 'CLINDABAN-300',
        image: 'https://i.postimg.cc/kMcgD31w/IMG-20240626-WA0004.webp',
      },
      {
        id: 52,
        name: 'LACTUBIN ',
        image: 'https://i.postimg.cc/RVZVHs2m/IMG-20240626-WA0006.webp',
      },
      {
        id: 53,
        name: 'TRYZYME',
        image: 'https://i.postimg.cc/qRcM89kJ/IMG-20240626-WA0001.webp',
      },
      {
        id: 54,
        name: 'BROFEK',
        image: 'https://i.postimg.cc/Kvpcr7yM/IMG-20240626-WA0005.webp',
      },
    ],
  };

  const filteredProducts = categories[activeCategory].filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-10 relative">
      <motion.h1
        className="text-4xl font-semibold text-center text-emerald-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Products Range
      </motion.h1>

      {/* IndiaMART Category Links - Collapsible on Mobile */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore Our Full Range on IndiaMART</h2>
        <div className="md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg flex items-center justify-between hover:bg-emerald-700 transition-all"
          >
            Browse Categories
            {isDropdownOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </button>
          {isDropdownOpen && (
            <div className="mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
              {indiamartLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 text-gray-700 hover:bg-gray-100 transition-all"
                >
                  {link.icon} <span>{link.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {indiamartLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-600 transition-all"
            >
              {link.icon} <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>

       {/* Search Bar with Voice Search */}
       <div className="relative max-w-lg mx-auto mb-8 flex items-center">
        <FiSearch className="absolute left-4 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-12 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
        <button onClick={startListening} className="absolute right-4 text-gray-500 hover:text-emerald-600">
          <FiMic size={22} className={isListening ? 'animate-pulse' : ''} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 py-8">
      <a
          href="/Jbans-Product-list.pdf"
          download
          className="bg-emerald-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300"
        >
          <FaDownload size={20} /> Download Product List
        </a>
        <button 
        onClick={()=>document.getElementById('product-catalog').scrollIntoView({behavior:"smooth"})}
          className="bg-red-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          <FaEye size={20} /> Check Out Our Product Catalog
        </button>
      </div>

      {/* Product Categories */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                activeCategory === category ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <p className="text-gray-900 font-bold text-xl">{product.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Slick Slider for Catalogue Display
      <div className="px-6 mt-12">
        <h1 className='text-center text-2xl font-semibold mb-8'>Our Product Catalogue</h1>
        <Slider {...settings}>
          {catalogueImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={image} alt={`Page ${index + 1}`} className="w-full h-full object-cover" />
                <div className="p-4 text-center">
                  <p className="text-gray-900 font-bold text-lg">Catalogue Page {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
      <ProductCatalog/>
    </div>
  );
};

export default Products;
