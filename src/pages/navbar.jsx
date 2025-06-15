import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, notShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      notShowNavbar(false);
    } else {
      notShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <div className=" text-center ">
        <img
          className="  rounded-md scale-100 transition-all duration-300 object-cover object-position-[50%_50%] "
          src="/caps_images/hop.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold font-roboto">
          Discover Unique Cap Styles
        </div>
        <div className="mt-40 absolute inset-0 flex items-center justify-center text-white font-light  text-2xl font-roboto">
          Discover our premium selection of bespoke caps designed for both
          fashion and function,
          <br />
          crafted to reflect your individualit
        </div>

        <div className="absolute top-0 left-0 text-start mt-10">
          <div className="container mx-auto fixed justify-center items-center ">
            <nav
              className={`bg-gray-200 fixed w-full z-40 top-0 start-0 transition-transform duration-300 ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <span className="self-center font-serif text-3xl font-light whitespace-nowrap ml-10 text-black-200">
                    Topperz
                  </span>
                </a>
                <div className="gap-10 flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse mr-10">
                  <img src="" alt="" srcSet="" />
                  <a href="#">
                    <img
                      className="h-10 w-10"
                      src="/caps_images/search-interface-symbol.png"
                      alt="Search"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="h-10 w-10"
                      src="/caps_images/shopping-cart.png"
                      alt="Cart"
                    />
                  </a>
                </div>
                <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                      <Link to={"/"}>
                        <a
                          href="#"
                          className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3  font-light font-roboto  md:p-0  relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
