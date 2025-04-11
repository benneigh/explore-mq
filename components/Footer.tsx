// app/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-auto footer-divider">
      <div className="container mx-auto px-4">
        {/* Top section with navigation and social links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About ExploreMQ</h3>
            <p className="text-gray-600">
              ExploreMQ is the gateway to MerryQuery. <br />
              You can meet our expert team here, and stay updated with <br />
              our cutting-edge features designed for a modern classroom!
            </p>
          </div>

          {/* Quick Links section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/get-started"
                  className="text-gray-600 hover:underline"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a href="/#features" className="text-gray-600 hover:underline">
                  Key Features
                </a>
              </li>
              <li>
                <a href="/faculty-collaborators" className="text-gray-600 hover:underline">
                  Faculty Collaboraters
                </a>
              </li>
              <li>
                <a href="/#team" className="text-gray-600 hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="mailto:btaghiz@ncsu.edu?subject=Inquiry%20about%20MerryQuery"
                  className="text-gray-600 hover:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 flex items-center">
                <svg
                  className="inline-block w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 8V7l-3 2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2.25A5.22 5.22 0 0111 21a5.22 5.22 0 013.75-4H19a2 2 0 002-2v-4a2 2 0 00-2-2h-3v2h2v2h-6.75A3.22 3.22 0 0011 13a3.22 3.22 0 00-3.75 2H5V7h11v4l3-2v2h1V8h-3V7h-1V5h3v1z" />
                </svg>
                <a href="mailto:btaghiz@ncsu.edu?subject=Inquiry%20about%20MerryQuery">
                  btaghiz@ncsu.edu
                </a>
              </li>
              <li className="text-gray-600 flex items-top">
                <svg
                  className="inline-block w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10h-2V7h2m0 8h-2v-2h2m1-12H10C6.13 3 3 6.13 3 10v4c0 3.87 3.13 7 7 7h4c3.87 0 7-3.13 7-7v-4c0-3.87-3.13-7-7-7m0 16h-4c-3.31 0-6-2.69-6-6v-4c0-3.31 2.69-6 6-6h4c3.31 0 6 2.69 6 6v4c0 3.31-2.69 6-6 6" />
                </svg>
                Venture IV, Suite 400 <br />
                1730 Varsity Dr <br />
                Raleigh, NC 27606 <br />
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-6" />

        {/* Bottom section with social media and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-600">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MerryQuery. All rights reserved.
          </div>
          {/* Social Links */}
          {/* <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6.03c-.77.34-1.6.57-2.46.67a4.3 4.3 0 001.88-2.37 8.49 8.49 0 01-2.7 1.03A4.28 4.28 0 0016.57 4c-2.36 0-4.28 1.91-4.28 4.27 0 .33.04.65.11.95a12.12 12.12 0 01-8.8-4.46c-.38.64-.6 1.39-.6 2.18 0 1.5.76 2.83 1.91 3.6a4.3 4.3 0 01-1.94-.53v.05c0 2.1 1.5 3.85 3.48 4.25a4.27 4.27 0 01-1.93.07 4.29 4.29 0 003.99 2.97A8.58 8.58 0 013 19.11a12.07 12.07 0 006.54 1.91c7.85 0 12.14-6.5 12.14-12.14l-.01-.55A8.66 8.66 0 0024 5.67a8.47 8.47 0 01-2.54.7z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6.03c-.77.34-1.6.57-2.46.67a4.3 4.3 0 001.88-2.37 8.49 8.49 0 01-2.7 1.03A4.28 4.28 0 0016.57 4c-2.36 0-4.28 1.91-4.28 4.27 0 .33.04.65.11.95a12.12 12.12 0 01-8.8-4.46c-.38.64-.6 1.39-.6 2.18 0 1.5.76 2.83 1.91 3.6a4.3 4.3 0 01-1.94-.53v.05c0 2.1 1.5 3.85 3.48 4.25a4.27 4.27 0 01-1.93.07 4.29 4.29 0 003.99 2.97A8.58 8.58 0 013 19.11a12.07 12.07 0 006.54 1.91c7.85 0 12.14-6.5 12.14-12.14l-.01-.55A8.66 8.66 0 0024 5.67a8.47 8.47 0 01-2.54.7z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c5.48 0 9.96 4.48 9.96 9.96s-4.48 9.96-9.96 9.96S2.04 17.48 2.04 12 6.52 2.04 12 2.04zM12 17.5c2.48 0 4.5-2.02 4.5-4.5S14.48 8.5 12 8.5 7.5 10.52 7.5 13 9.52 17.5 12 17.5zM18.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
