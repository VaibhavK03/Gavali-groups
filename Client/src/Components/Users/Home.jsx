import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
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

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <a href="#" className="block shadow-sm ">
          <img
            src="banner.png"
            alt="banner"
            className="h-160 w-full rounded-b-[10vw] "
          />
        </a>
        <h1 className="py-6 text-3xl sm:text-4xl font-bold text-center">
          Overview
        </h1>
        <h2 className="mx-6 lg:mx-50 pb-4 text-xl md:text-2xl text-center">
          Gavali Group of Business is a diversified investment firm specializing
          in stock trading and real estate, offering comprehensive wealth
          management solutions. With expertise in equity markets and property
          investments, we help individuals, corporations, and institutions
          maximize returns and diversify portfolios.
        </h2>
        <div className="lg:mx-50 md:mx-10 mx-8 my-5 text-white rounded-lg shadow-lg">
          <div className="block sm:flex sm:items-center">
            <h1 className="mx-0 text-xl lg:text-2xl text-center sm:text-left leading-relaxed mb-4 sm:mb-0">
              Gavali Group of Business is a diversified investment firm
              specializing in stock trading and real estate, offering
              comprehensive wealth management solutions. With expertise in
              equity markets and property investments, we help individuals,
              corporations, and institutions maximize returns and diversify
              portfolios.
            </h1>
            <div className="flex justify-center sm:justify-start w-full sm:mt-0">
              <img
                src="sir-image1.png"
                alt="logo"
                className="aspect-3/3 h-80 lg:h-70 object-contain"
              />
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
            Businesses
          </h1>
          <div className="border-gray-400 rounded-t-[150vw] my-10 border-b-[0.2vw] rounded-b-[1000px] border-gray-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-4 sm:mx-6 lg:mx-20">
            {[
              { src: "Stocksbar_Institute.jpg", title: "StocksBar Institute" },
              { src: "Stocksbar_Traders.png", title: "StocksBar Traders" },
              { src: "Trade_Flips.jpg", title: "Trade Flips" },
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
                  <h2 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white text-center">
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
            Careers
          </h1>
          <div className="border-gray-400 rounded-t-[150vw] my-10 border-b-[0.2vw] rounded-b-[1000px] border-gray-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 lg:mx-20">
            {[
              { src: "Stocksbar_Institute.jpg", title: "Franchisee Model" },
              { src: "Stocksbar_Traders.png", title: "StocksBar Traders" },
              { src: "Trade_Flips.jpg", title: "Jobs" },
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
                  <h2 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="px-6 lg:px-20 py-10 text-white rounded-t-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                placeholder="Your Name *"
                required
              />
              <input
                type="email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                placeholder="Your Phone Number *"
              />
            </div>
            <div className="space-y-4">
              <textarea
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                rows="2"
                placeholder="Subject *"
              ></textarea>
              <textarea
                className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                rows="4"
                placeholder="Your Inquiry *"
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
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
