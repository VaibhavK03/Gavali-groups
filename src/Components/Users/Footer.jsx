import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-black bg-gray-900">
        <div className="flex justify-center sm:justify-start w-full">
          <div className="grid gap-6 px-20 py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center sm:text-left">
            <div className="flex md:justify-start justify-center">
              <img
                src="Gavali_Groups.png"
                alt="logo"
                className="h-50 w-auto mx-auto"
              />
            </div>

            <div className="text-center mx-5">
              <h2 className="mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Quick Links
              </h2>
              <ul className="text-gray-300 text-gray-400 font-medium">
                <li className="mb-3">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/business" className="hover:underline">
                    Businesses
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mx-5">
              <h2 className="mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Location
              </h2>
              <p className="text-gray-300 text-gray-400 font-medium">
                Lane No . 11, Vaibhavi Appartments, Office No.01, near Renuka
                Mandir, Rajarampuri, Kolhapur, Maharashtra 416002
              </p>
              <h2 className="mt-4 mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Follow Us
              </h2>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/facebook-new.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Contact Information
              </h2>
              <ul className="text-gray-300 text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="mailto:gavaligroupsofbusiness@outlook.com"
                    className="hover:underline lg:text-lg"
                  >
                    📧 gavaligroupsofbusiness@outlook.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+91 7770005719" className="hover:underline">
                    📞 +91 7770005719
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
