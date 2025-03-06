import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import useStoreInquiries from "../../hooks/useStoreInquiries";

const ContactUs = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.inquiry.trim()) newErrors.inquiry = "Inquiry field is required";
    return newErrors;
  };

  return (
    <>
      <Header />
      <div className="bg-gray-950 text-white min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <h1 className="m-6 text-4xl sm:text-5xl font-bold bg-clip-text text-center m-10">
          Get In Touch With Us
        </h1>

        <div className="items-center w-full max-w-7xl bg-gray-900 shadow-lg rounded-lg p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <motion.div
            className="space-y-6 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold">Contact Information</h2>
            <p className="text-1xl text-gray-400">
              Feel free to reach out to us for any inquiries or business collaborations. Our team is ready to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-xl">📍</span>
                <p className="text-gray-300">
                  Lane No . 11, Vaibhavi apartments, Office No.01, near Renuka Mandir, Rajarampuri, Kolhapur, Maharashtra 416002
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-xl">📞</span>
                <a href="tel:+91 7770005719" className="hover:underline">
                  +91 7770005719
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400 text-xl">✉️</span>
                <a href="mailto:gavaligroupsofbusiness@outlook.com" className="hover:underline">
                  gavaligroupsofbusiness@outlook.com
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 transition"
              placeholder="Your Name *"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 transition"
              placeholder="Your Email *"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="text"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 transition"
              placeholder="Your Phone Number *"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <textarea
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 transition"
              rows="4"
              placeholder="Subject *"
            ></textarea>
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

            <textarea
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 transition"
              rows="4"
              value={message}
              onChange={(e) => setMessages(e.target.value)}
              placeholder="Inquiry for *"
            ></textarea>
            {errors.inquiry && <p className="text-red-500 text-sm">{errors.inquiry}</p>}

            <button type="submit" onClick={handlesubmit} className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-white hover:text-black hover:shadow-xl">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;