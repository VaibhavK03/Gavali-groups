import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const businesses = [
  {
    name: "Stocksbar Traders",
    title: "Stocksbar Traders – A Venture of Gavali Group of Business",
    description:
      "Stocksbar Traders provides advanced financial software solutions for traders, brokers, and institutions. Our trading platforms offer real-time data, automated trading, and multi-asset support, ensuring a seamless experience. With AI-driven stock market analysis, users gain predictive insights and risk assessment tools. Our AI-powered trading algorithms enhance smart order execution and market predictions.",
    image: "Stocksbar_Traders.png",
  },
  {
    name: "Stocksbar Institute",
    title: "Stocksbar Institute – A Venture of Gavali Group of Business",
    description:
      "Stocksbar Institute, established in 2019, is the first venture of Gavali Group of Business, specializing in finance and commerce education. It offers comprehensive financial market training, covering stock markets, trading, and investment strategies. Future plans include expansion and digital learning platforms.",
    image: "Stocksbar_Institute.jpg",
  },
  {
    name: "Gavali Textiles",
    title: "Gavali Textiles – A Venture of Gavali Group of Business",
    description:
      "Gavali Textiles offers premium quality fabric solutions with a focus on sustainability and modern design. The company specializes in high-end fashion textiles, industrial fabrics, and eco-friendly materials, ensuring top-notch quality and durability.",
    image: "Gavali_Textiles.png",
  },
  {
    name: "Gavali Hospitality",
    title: "Gavali Hospitality – A Venture of Gavali Group of Business",
    description:
      "Gavali Hospitality was founded in 2023 to provide hotels and industrial canteens in Maharashtra and Karnataka MIDC. It focuses on luxurious yet affordable accommodations and high-quality food services. Future plans include luxury resorts and fine dining expansion.",
    image: "gavali_hospitality.jpg",
  },
  {
    name: "Trade Flips",
    title: "Trade Flips – A Venture of Gavali Group of Business",
    description:
      "Trade Flips specializes in global financial investment strategies, offering expert insights on trading, stocks, and asset diversification. The company provides tailored solutions for investors, ensuring growth and financial security.",
    image: "Trade_Flips.jpg",
  },
];

const Business = () => {
  return (
    <>
      <Header />
      <motion.div
        className="min-h-screen bg-black text-white px-6 md:px-12 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Page Header Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center pb-12 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Businesses
        </motion.h1>

        <div className="space-y-16 max-w-7xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-gray-900 rounded-3xl overflow-hidden shadow-lg border-2 border-gray-700 transition-transform duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image Section */}
              <motion.img
                src={business.image}
                alt={business.name}
                className="w-full md:w-1/3 h-64 md:h-auto object-cover"
              />

              {/* Text Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-2/3">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
                  {business.name}
                </h1>
                <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
                  {business.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                  {business.description}
                </p>

                {/* Call-to-Action Button */}
                <Link to="/contact">
                  <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300">
                    Let Us Know
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Business;
