import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const hiddenRoutes = ["/signup", "/signin", "/profile", "/verification"];
  const shouldHideButtons = hiddenRoutes.includes(location.pathname);

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
      className={`w-full fixed top-0 left-0 z-50 bg-white shadow-none md:shadow-sm transition-all duration-300 ${
        isScrolled ? "py-4 shadow-sm" : "py-4 md:py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4">
        <Link to="/">
        <div>
          <img src="/images/DesignForge.svg" alt="logo" className="hidden md:block"/>
          <img src="/images/DesignForge (1).svg" alt="logo" className="block md:hidden" />
        </div>
        </Link>
        {  !shouldHideButtons && (
        <div className="flex gap-2 md:gap-4 text-base font-bold">
          <Link to="/signin"><button className="flex justify-center px-4 py-2 md:px-6 md:py-3 items-center border border-[#1A1B1C] text-[#1A1B1C] rounded-lg hover:bg-[#f0f0f0] cursor-pointer transition-all duration-300">
            Login
          </button>
          </Link>
          <Link to="/signup"><button className="flex justify-center px-4 py-2 md:px-6 md:py-3 items-center bg-[#1A1B1C] text-white rounded-lg hover:bg-[#333333] cursor-pointer transition-all duration-300">
            Create Account
          </button>
          </Link>
        </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
