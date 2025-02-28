import React, { useEffect, useState } from "react";
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

  const [animateBusinesses, setAnimateBusinesses] = useState(false);
  const [animateCareers, setAnimateCareers] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "businesses") {
            setAnimateBusinesses(true);
          } else if (entry.target.id === "careers") {
            setAnimateCareers(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const businessesSection = document.getElementById("businesses");
    const careersSection = document.getElementById("careers");

    if (businessesSection) observer.observe(businessesSection);
    if (careersSection) observer.observe(careersSection);

    return () => {
      if (businessesSection) observer.unobserve(businessesSection);
      if (careersSection) observer.unobserve(careersSection);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiry: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.inquiry.trim())
      newErrors.inquiry = "Inquiry field is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <a href="#" className="block shadow-sm ">
          <img
            src="banner.png"
            alt="banner"
            className="md:h-160 w-full rounded-b-[10vw] "
          />
        </a>
        <div className="bg-gray-900 my-15 mx-6 lg:mx-50 h-auto rounded-xl shadow-lg border-2 border-gray-500 hover:scale-105 transition-transform duration-300">
          <h1 className="py-6 text-3xl sm:text-4xl font-bold text-center">
            Company Insight
          </h1>
          <h2 className="p-4 text-xl md:text-2xl text-center">
            Gavali Group of Business is a diversified investment firm
            specializing in stock trading and real estate, offering
            comprehensive wealth management solutions. With expertise in equity
            markets and property investments, we help individuals, corporations,
            and institutions maximize returns and diversify portfolios.
          </h2>
          <div className=" mx-8 my-5 text-white rounded-lg shadow-lg">
            <div className="block sm:flex sm:items-center">
              <h2 className="mx-0 text-xl lg:text-md text-center sm:text-left leading-relaxed mb-4 sm:mb-0">
              Pratik Gavali is a visionary entrepreneur and the driving force behind Gavali Group of Business, a rapidly growing company in education, finance, real estate, AI, hospitality, and portfolio management. Starting with Stocksbar Institute in 2019, he expanded into multiple industries, from AI-driven stock solutions (Stocksbar Traders) to global investments (Trade Flips), real estate (Gavali Developers), hospitality (Gavali Hospitality), and upcoming AI ventures (Gavali Infotech). Committed to innovation and smart investments, he strives to build a future based on trust, quality, and growth.
              </h2>
              <div className="flex justify-center sm:justify-start w-full sm:mt-0">
                <img
                  src="sir-image1.png"
                  alt="logo"
                  className="aspect-3/3 h-80 lg:h-70 max-w-120 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Businesses Section */}
        <div
          id="businesses"
          className={`mx-5 sm:mx-6 lg:mx-20 transition-opacity duration-1000 ${
            animateBusinesses
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-100"
          }`}
        >
          <h1 className="text-4xl sm:text-4xl font-bold text-center">
            Business Segments
          </h1>
          <div className="border-gray-400 rounded-t-[150vw] my-10 border-b-[0.2vw] rounded-b-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-6 lg:mx-20">
            {[
              { src: "Stocksbar_Institute.jpg", title: "StocksBar Institute" },
              { src: "Stocksbar_Traders.png", title: "StocksBar Traders" },
              { src: "Trade_Flips.jpg", title: "Trade Flips" },
              { src: "Gavali_Textiles.png", title: "Gavali Textiles" },
              { src: "gavali_hospitality.jpg", title: "Gavali Hospitality" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 shadow-md hover:shadow-lg transition duration-300 max-w-md mx-auto"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="w-74 h-60 mb-3 rounded-xl shadow-lg transition duration-700 ease-in-out hover:scale-110"
                    src={item.src}
                    alt={item.title}
                  />
                  <h2 className="mb-1 text-2xl font-semibold text-gray-900 text-white text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Section */}
        <div
          id="careers"
          className={`mx-5 sm:mx-6 lg:mx-20 transition-opacity duration-1000 ${
            animateCareers
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center m-15">
            Career
          </h1>
          <div className="border-gray-400 rounded-t-[150vw] my-10 border-b-[0.2vw] rounded-b-[1000px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 lg:mx-20">
            {[
              { src: "franchise_model.png", title: "Franchise Model" },
              { src: "collaborative_partner.png", title: "Collaborative Partners" },
              { src: "jobs.png", title: "Jobs" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 shadow-md hover:shadow-lg transition duration-300 max-w-md mx-auto"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="w-50 h-50 mb-3 rounded-xl shadow-lg transition duration-700 ease-in-out hover:scale-110"
                    src={item.src}
                    alt={item.title}
                  />
                  <h2 className="mb-1 text-xl font-semibold text-gray-900 text-white text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="px-6 lg:px-35 pb-10 text-white rounded-t-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                placeholder="Your Name *"
                required
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                placeholder="Your Email *"
              />
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                placeholder="Your Phone Number *"
              />
            </div>
            <div className="space-y-4">
              <textarea
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                rows="2"
                placeholder="Subject *"
              ></textarea>
              <textarea
                value={message}
                onChange={(e) => setMessages(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                rows="4"
                placeholder="Your Inquiry *"
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handlesubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Submit Now
            </button>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="flex justify-center pb-10">
          <iframe
            title="Google Map"
            className="w-full max-w-4xl h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1910.8395212904504!2d74.245939!3d16.692937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10130f33871ef%3A0xbbf23ac71f3a44f8!2sStocksBar%20Institute!5e0!3m2!1sen!2sin!4v1739601378677!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
