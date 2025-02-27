import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

const businesses = [
  {
    name: "Stocksbar Traders",
    title: "Stocksbar Traders – A Venture of Gavali Group of Business",
    description:
      "Stocksbar Traders provides advanced financial software solutions for traders, brokers, and institutions. Our trading platforms offer real-time data, automated trading, and multi-asset support, ensuring a seamless experience. With AI-driven stock market analysis, users gain predictive insights and risk assessment tools. We develop fintech applications for portfolio tracking, risk management, and secure digital payments. Our AI-powered trading algorithms enhance smart order execution and market predictions. Blockchain-based solutions ensure secure transactions and fraud detection. Additionally, we offer custom financial software for banking, hedge fund management, and robo-advisory services. 🚀 Empowering the financial sector with cutting-edge technology!",
    image: "Stocksbar_Traders.png",
  },
  {
    name: "Stocksbar Institute",
    title: "Stocksbar Institute – A Venture of Gavali Group of Business",
    description:
      "Stocksbar Institute, established in 2019, is the first venture of Gavali Group of Business, specializing in finance and commerce education. It offers comprehensive financial market training, covering stock markets, trading, investment strategies, and commerce syllabus coaching. Students learn technical and fundamental analysis under industry experts with live market exposure. The institute provides online and offline courses, certifications in stock trading, and practical workshops to foster financial independence. Future plans include expansion and digital learning platforms. Committed to excellence, Stocksbar Institute empowers students with financial knowledge.",
    image: "Stocksbar_Institute.jpg",
  },
  {
    name: "Gavali Textiles",
    title: "Gavali Textiles – A Venture of Gavali Group of Business",
    description:
      "Gavali Hospitality was founded in 2023 to provide hotels and industrial canteens in Maharashtra and Karnataka MIDC. Led by Pratik Gavali, it focuses on luxurious yet affordable accommodations and high-quality food services. The company prioritizes customer satisfaction, hygiene, innovation, and efficiency, with plans for expansion into luxury resorts and fine dining. Sustainability, ethical sourcing, and modern technology drive its operations. With a customer-first approach, Gavali Hospitality aims to be a market leader in hospitality, ensuring quality, affordability, and excellence.",
    image: "Gavali_Textiles.png",
  },
  {
    name: "Gavali Hospitality",
    title: "Gavali Hospitality – A Venture of Gavali Group of Business",
    description:
      "Gavali Hospitality was founded in 2023 to provide hotels and industrial canteens in Maharashtra and Karnataka MIDC. Led by Pratik Gavali, it focuses on luxurious yet affordable accommodations and high-quality food services. The company prioritizes customer satisfaction, hygiene, innovation, and efficiency, with plans for expansion into luxury resorts and fine dining. Sustainability, ethical sourcing, and modern technology drive its operations. With a customer-first approach, Gavali Hospitality aims to be a market leader in hospitality, ensuring quality, affordability, and excellence.",
    image: "gavali_hospitality.jpg",
  },
  {
    name: "Trade Flips",
    title: "Trade Flips – A Venture of Gavali Group of Business",
    description:
      "Stocksbar Institute, established in 2019, is the first venture of Gavali Group of Business, specializing in finance and commerce education. It offers comprehensive financial market training, covering stock markets, trading, investment strategies, and commerce syllabus coaching. Students learn technical and fundamental analysis under industry experts with live market exposure. The institute provides online and offline courses, certifications in stock trading, and practical workshops to foster financial independence. Future plans include expansion and digital learning platforms. Committed to excellence, Stocksbar Institute empowers students with financial knowledge.",
    image: "Trade_Flips.jpg",
  },
];

const Business = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white p-12">
        <h1 className="text-5xl font-extrabold text-center my-16 tracking-wide">
          Our Businesses
        </h1>
        <div className="space-y-16 max-w-7xl mx-auto">
          {businesses.map((business, index) => (
            <motion.div
            key={index}
            className="flex flex-col lg:flex-row bg-gray-900 rounded-3xl overflow-hidden shadow-lg border-1 border-transparent transition-transform duration-500 transform hover:-translate-y-3 hover:border-white hover:shadow-white"
            whileHover={{ scale: 1 }}
          >
          
              <img
                src={business.image}
                alt={business.name}
                className="w-auto lg:w-1/3 h-full"
              />
              <div className="p-8 flex flex-col justify-center w-full lg:w-1/1">
                <h1 className="text-3xl font-bold mb-3">{business.name}</h1>
                <h4 className="text-2xl font-bold mb-3">{business.title}</h4>
                <p className="text-gray-400 mb-6">{business.description}</p>
                <a href="/contact"><motion.button
                  className="lg:w-1/4 bg-blue-600 hover:bg-white-500 hover:text-white text-black px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Let Us Know
                </motion.button></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Business;
