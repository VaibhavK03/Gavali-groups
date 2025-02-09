import React from "react";

const Header = () => {
  return (
    <>
      <div class="bg-black text-white px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg
                class="block size-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                class="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4 items-center">
                <img src="Logo.png" alt="logo" class="h-15 w-auto" />
                <a
                  href="#"
                  class="rounded-md bg-gray-900 px-3 py-2 text-md font-medium text-white"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  class="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white"
                >
                  About Us
                </a>
                <a
                  href="#"
                  class="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white"
                >
                  Businesses
                </a>
                <a
                  href="#"
                  class="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white"
                >
                  Careers
                </a>
                <a
                  href="#"
                  class="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
        <img src="Logo.png" alt="logo" class="mb-3 h-15 w-auto" />
          <a
            href="#"
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About Us
          </a>
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Businesses
          </a>
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Careers
          </a>
          <a
            href="#"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
