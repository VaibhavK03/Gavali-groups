import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <a href="#" className="block shadow-sm ">
          <img
            src="banner.jpeg"
            alt="banner"
            className="h-auto w-full object-cover rounded-b-[10vw] "
          />
        </a>
        <h1 className="py-2 text-2xl sm:text-3xl flex justify-center">
          Overview
        </h1>
        <h2 className="mx-6 lg:mx-50 pb-4 text-1xl sm:text-2xl text-center">
          Gavali Group of Business is a diversified investment firm specializing
          in stock trading and real estate, offering comprehensive wealth
          management solutions. With expertise in equity markets and property
          investments, we help individuals, corporations, and institutions
          maximize returns and diversify portfolios.
        </h2>

        <div className="lg:mx-50 my-5 text-white rounded-lg shadow-lg">
          <div className="block sm:flex sm:items-center sm:space-x-6">
            <h1 className="text-1xl sm:text-2xl text-center sm:text-left leading-relaxed mb-4 sm:mb-0">
              Gavali Group of Business is a diversified investment firm
              specializing in stock trading and real estate, offering
              comprehensive wealth management solutions. With expertise in
              equity markets and property investments, we help individuals,
              corporations, and institutions maximize returns and diversify
              portfolios.
            </h1>
            <img
              src="sir-image.png"
              alt="logo"
              className="h-50 lg:h-50 object-contain"
            />
          </div>
        </div>

        <h1 className="mx-6 lg:mx-20 border-t-[0.2vw] border-gray-400 rounded-t-[150vw] py-2 text-2xl sm:text-3xl flex justify-center">
          Businesses
        </h1>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-3 mx-6 lg:mx-50">
          {[
            {
              src: "Stocksbar_Institute.jpg",
              title: "StocksBar Institute",
              className: "hover:",
            },
            { src: "Stocksbar_Traders.png", title: "StocksBar Traders" },
            { src: "Trade_Flips.jpg", title: "Trade Flips" },
          ].map((item, index) => (
            <div key={index} className="w-full max-w-sm rounded-lg shadow-sm">
              <div className="my-6 flex flex-col items-center">
                <img
                  className="w-auto h-50 mb-3 rounded-4xl shadow-lg"
                  src={item.src}
                  alt={item.title}
                />
                <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Careers Section with Border Below */}
        <h1 className="text-2xl sm:text-3xl flex justify-center">Careers</h1>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-3 mx-6 lg:mx-50">
          {[
            { src: "Stocksbar_Institute.jpg", title: "Franchisee Model" },
            { src: "Stocksbar_Traders.png", title: "StocksBar Traders" },
            { src: "Trade_Flips.jpg", title: "Jobs" },
          ].map((item, index) => (
            <div key={index} className="w-full max-w-sm rounded-lg shadow-sm">
              <div className="my-6 flex flex-col items-center">
                <img
                  className="w-auto h-50 mb-3 rounded-4xl shadow-lg"
                  src={item.src}
                  alt={item.title}
                />
                <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:mx-20 border-b-[0.2vw] border-gray-400 rounded-b-[600px] py-6"></div>
        <div className="flex-col items-center bg-black w-full">
          <h1 className="py-2 text-2xl sm:text-3xl flex justify-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-2 gap-6 mx-6 lg:mx-50">
            <div className="col-span-1 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2.5 rounded border border-gray-300 bg-gray-800 text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2.5 rounded border border-gray-300 bg-gray-800 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone No *
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2.5 rounded border border-gray-300 bg-gray-800 text-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white"
              >
                Subject*
              </label>
              <textarea
                id="inquiry"
                className="w-full h-23 rounded border border-gray-300 bg-gray-800 text-white"
                placeholder="Enter your Subject"
                required
              ></textarea>

              <label
                htmlFor="inquiry"
                className="block text-sm font-medium text-white"
              >
                Inquiry for *
              </label>
              <textarea
                id="inquiry"
                className="w-full h-23 rounded border border-gray-300 bg-gray-800 text-white"
                placeholder="Enter your inquiry"
                required
              ></textarea>
            </div>
          </div>

          <div className="col-span-2 flex my-5 justify-center">
            <button
              type="submit"
              className="w-1/5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded"
            >
              Submit Now
            </button>
          </div>

          {/* Google Map Embedded Below Contact Form */}
          <div className="w-full flex justify-center">
            <iframe
              title="Google Map"
              className="w-full h-96 max-w-4xl rounded-lg shadow-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.682338937794!2d74.2459063!3d16.6927722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10130f33871ef%3A0xbbf23ac71f3a44f8!2sStocksBar%20Institute!5e0!3m2!1sen!2sin!4v1739186284666!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
