import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Header from "./Header";
import Footer from "./Footer";
import useStoreInquiries from "../../hooks/useStoreInquiries";

const Home = () => {
  const { storeInquiries, loading } = useStoreInquiries();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessages] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const success = await storeInquiries(name, email, phone, subject, message);
    console.log(success);
    if (success) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="block shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent rounded-b-[10vw]"></div>

            <motion.img
              src="banner.png"
              alt="banner"
              className="h-60 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] w-full rounded-b-[10vw] object-cover opacity-40 transition-transform duration-700 hover:scale-105"
              transition={{ duration: 1 }}
            />

            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-12 lg:px-20 text-white">
              <motion.h1
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Gavali Groups Of Business
              </motion.h1>
              <motion.p
                className="text-lg sm:text-2xl lg:text-3xl font-light mt-2 opacity-80"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A Company You Can Trust
              </motion.p>

              <motion.a
                href="/contact"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button className="mt-6 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm sm:text-lg lg:text-xl font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                  Get In Touch
                </button>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Company Insight Section */}
        <motion.div
          className="mx-5 my-5 text-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="py-6 text-3xl sm:text-4xl font-bold text-center">
            Company Insight
          </h1>
          <h2 className="lg:mx-17 p-4 text-xl md:text-2xl text-center">
          Gavali Group of Business is a diversified investment firm
            specializing in stock trading and real estate, offering
            comprehensive wealth management solutions. With expertise in equity
            markets and property investments, we help individuals, corporations,
            and institutions maximize returns and diversify portfolios.
          </h2>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="bg-gray-900 my-20 mx-4 md:mx-10 lg:mx-20 xl:mx-32 h-auto rounded-xl shadow-lg border-2 border-gray-500 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-6 py-5 text-white rounded-lg shadow-lg">
            <h1 className="py-3 lg:py-2 text-3xl sm:text-4xl font-bold text-center">
              Our Leadership
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <motion.h2
                className="text-lg sm:text-xl lg:text-xl text-center sm:text-left leading-relaxed mb-4 sm:mb-0 flex-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Pratik Gavali is a visionary entrepreneur and the driving force
                behind Gavali Group of Business, a rapidly growing company in
                education, finance, real estate, AI, hospitality, and portfolio
                management. Starting with Stocksbar Institute in 2019, he
                expanded into multiple industries, from AI-driven stock
                solutions (Stocksbar Traders) to global investments (Trade
                Flips), real estate (Gavali Developers), hospitality (Gavali
                Hospitality), and upcoming AI ventures (Gavali Infotech).
                Committed to innovation and smart investments, he strives to
                build a future based on trust, quality, and growth.
              </motion.h2>
              <motion.div
                className="flex justify-center sm:justify-start w-full sm:w-auto sm:ml-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="sir-image1.png"
                  alt="Pratik Gavali"
                  className="w-48 sm:w-60 lg:w-72 h-auto object-contain rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          className="px-6 lg:px-35 pb-10 text-white rounded-t-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <motion.input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600"
              placeholder="Your Name *"
              whileFocus={{ scale: 1.03 }}
            />
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600"
              placeholder="Your Email *"
              whileFocus={{ scale: 1.03 }}
            />
            <motion.input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600"
              placeholder="Your Phone Number *"
              whileFocus={{ scale: 1.03 }}
            />
            <motion.textarea
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600"
              placeholder="Subject *"
              whileFocus={{ scale: 1.03 }}
            ></motion.textarea>
            <motion.textarea
              value={message}
              onChange={(e) => setMessages(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 resize-none"
              placeholder="Your Inquiry *"
              whileFocus={{ scale: 1.03 }}
            ></motion.textarea>
          </div>

          <div className="text-center mt-6">
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={handlesubmit}
            >
              Submit Now
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="px-6 lg:px-35 pb-10 text-white rounded-t-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <div className="flex justify-center pb-10">
          <iframe
            title="Google Map"
            className="w-full max-w-4xl h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1910.8395212904504!2d74.245939!3d16.692937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10130f33871ef%3A0xbbf23ac71f3a44f8!2sStocksBar%20Institute!5e0!3m2!1sen!2sin!4v1739601378677!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        </motion.div> 
      </div>
      <Footer />
    </>
  );
};

export default Home;
