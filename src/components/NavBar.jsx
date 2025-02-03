import React, { useState, useEffect } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 bg-white shadow-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
        <div>
          <img src="/images/DesignForge.svg" alt="logo" />
        </div>
        <div className="flex gap-4 text-base font-bold">
          <button className="flex justify-center px-6 py-3 items-center border border-[#1A1B1C] text-[#1A1B1C] rounded-lg hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
            Login
          </button>
          <button className="flex justify-center px-6 py-3 items-center bg-[#1A1B1C] text-white rounded-lg hover:bg-[#333333] cursor-pointer transition-all duration-300">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
