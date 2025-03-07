import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-black bg-gray-900">
        <div class="flex justify-center sm:justify-start w-full">
          <div class="grid gap-6 px-20 py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center sm:text-left">
            <div class="flex md:justify-start justify-center">
              <img
                src="Gavali_Groups.png"
                alt="logo"
                class="h-50 w-auto mx-auto"
              />
            </div>

            <div class="text-center mx-5">
              <h2 class="mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Quick Links
              </h2>
              <ul class="text-gray-300 text-gray-400 font-medium">
                <li class="mb-3">
                  <a href="/" class="hover:underline">
                    Home
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/about" class="hover:underline">
                    About Us
                  </a>
                </li>
                <li class="mb-3">
                  <a href="/business" class="hover:underline">
                    Businesses
                  </a>
                </li>
                {/* <li class="mb-3">
                  <a href="#" class="hover:underline">
                    Careers
                  </a>
                </li> */}
                <li class="mb-3">
                  <a href="/contact" class="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="mx-5">
              <h2 class="mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Location
              </h2>
              <p class="text-gray-300 text-gray-400 font-medium">
                Lane No . 11, Vaibhavi Appartments, Office No.01, near Renuka
                Mandir, Rajarampuri, Kolhapur, Maharashtra 416002
              </p>
              <h2 class="mt-4 mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Follow Us
              </h2>
              <div class="flex justify-center sm:justify-start space-x-4">
                <a href="https://www.facebook.com" target="_blank">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/facebook-new.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
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
              <h2 class="mb-3 text-sm font-semibold text-gray-300 uppercase text-white">
                Contact Information
              </h2>
              <ul class="text-gray-300 text-gray-400 font-medium">
                <li class="mb-4">
                  <li class="mb-4">
                    <a
                      href="mailto:gavaligroupsofbusiness@outlook.com"
                      class="hover:underline lg:text-lg"
                    >
                      📧 gavaligroupsofbusiness@outlook.com
                    </a>
                  </li>
                </li>
                <li class="mb-4">
                  <a href="tel:+91 7770005719" class="hover:underline">
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
