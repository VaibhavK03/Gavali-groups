import React from "react";
import Header from "./Header";
const Home = () => {
  return (
    <>
      <Header />
      <div class="bg-black text-white">
        <a href="#" class="block shadow-sm ">
          <img
            src="banner.jpeg"
            alt="banner"
            class="h-auto w-full object-cover rounded-b-[10vw] "
          />
        </a>
        <h1 className="py-2 text-4xl flex justify-center">Overview</h1>
        <h2 className="mx-6 sm:mx-3 pb-4 text-2xl text-center">
          Gavali Group of Business is a diversified investment firm specializing
          in stock trading and real estate, offering comprehensive wealth
          management solutions. With expertise in equity markets and property
          investments, we help individuals, corporations, and institutions
          maximize returns and diversify portfolios.
        </h2>
        <div class="bg-gray-800 text-white p-5 mx-6 rounded-lg shadow-lg">
          <div class="block sm:flex sm:items-center sm:space-x-6">
          <img
              src="Logo.png"
              alt="logo"
              class="h-24 w-auto sm:h-28 sm:w-full object-contain"
            />
            <h1 class="text-xl sm:text-xl font-semibold text-center sm:text-left leading-relaxed mb-4 sm:mb-0">
              Gavali Group of Business is a diversified investment firm
              specializing in stock trading and real estate, offering
              comprehensive wealth management solutions. With expertise in
              equity markets and property investments, we help individuals,
              corporations, and institutions maximize returns and diversify
              portfolios.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
