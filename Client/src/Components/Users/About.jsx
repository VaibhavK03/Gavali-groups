import React from "react";
import { FaBullseye, FaEye, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white flex flex-col items-center p-6 space-y-12 pt-24">
        {/* Owner Section */}
        <motion.div
          className="mb-15 grid md:grid-cols-2 gap-6 items-center max-w-5xl"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src="sir-image1.png"
            alt="Owner"
            className="w-80 h-80 rounded-xl shadow-lg border-2 border-gray-500 hover:scale-105 transition-transform duration-300"
          />
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <h2 className="text-3xl font-semibold mb-2">Our Founder</h2>
            <p className="mb-19 text-lg opacity-80 hover:opacity-100 transition duration-300">
              Meet [Owner’s Name], the visionary behind our platform. With years
              of experience in financial technology, [he/she] is committed to
              revolutionizing the industry.
            </p>
          </motion.div>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 items-stretch max-w-5xl"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vision */}
          <motion.div
            className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-600 hover:border-gray-400 transition-all duration-300 h-full"
            whileHover={{ scale: 1.05 }}
          >
            <FaEye className="text-5xl text-white mb-6" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-lg opacity-80 hover:opacity-100 transition duration-300 flex-grow">
              To become the most trusted and innovative platform in the global
              trading ecosystem, democratizing access to financial opportunities
              and fostering a culture of informed and empowered investors.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-600 hover:border-gray-400 transition-all duration-300 h-full"
            whileHover={{ scale: 1.05 }}
          >
            <FaBullseye className="text-5xl text-white mb-6" />
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-lg opacity-80 hover:opacity-100 transition duration-300 flex-grow">
              To empower individuals and institutions by providing cutting-edge
              trading tools, market insights, and education, enabling them to
              achieve financial growth and make confident investment decisions
              in a transparent and efficient marketplace.
            </p>
          </motion.div>
        </motion.div>

        {/* States We Operate In */}
        <motion.div
          className="max-w-5xl text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-12">Our Presence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Pune", "Satara", "Karad", "Sangli", "Kolhapur", "Goa-Madgaon"].map(
              (state, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg flex items-center justify-center shadow-lg border border-gray-600 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <FaMapMarkerAlt className="text-xl mr-2" />
                  {state}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Upcoming Projects */}
        <motion.div
          className="max-w-6xl text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-12">Upcoming Projects</h2>
          <div className="w-full grid md:grid-cols-3 gap-6">
            {[
              { name: "Gavali infotech", img: "gavali_infotech.jpg" },
              { name: "Gavali Developers", img: "gavali_developers.jpg" },
              { name: "Gavali Group Of institution", img: "gavali_group_of_institution.jpg" },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-600 hover:border-gray-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-50 object-cover rounded-lg mb-3 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold">{project.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
