import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#F7F9FC] w-full h-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16 py-10 px-6">
        <div className="flex justify-between items-center w-full">
          <img src="/images/DesignForge.svg" alt="logo" className="h-8" />
          <div className="flex items-center gap-2 text-gray-700">
            <a href="/" className="hover:text-gray-900 w-6 h-6">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-gray-900 w-6 h-6">
              <FaTwitter />
            </a>
            <a href="/" className="hover:text-gray-900 w-6 h-6">
              <FaInstagram />
            </a>
            <a href="/" className="hover:text-gray-900 w-6 h-6">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-6 text-[#344054] text-base font-semibold font-inter">
            <a href="/" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/" className="hover:text-gray-900">
              Terms of Use
            </a>
          </div>
          <div className="text-[#344054] text-base font-semibold font-inter">
            © 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
