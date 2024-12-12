import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Media Section */}
          <div className="w-full lg:w-4/12 px-4 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">MERA Bestie</h2>
            <p className="text-gray-600 mb-4">
              Your go-to platform for creating lasting memories with loved ones.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="w-full lg:w-4/12 px-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p>3181 Skjdsd Sdbs Ahsdjad,</p>
              <p>Sgd Nshs Jbbb 12232, India</p>
              <p>Email: support@merabestie.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-300 pt-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MERA Bestie. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
