import { useState } from "react";
import logo2 from "../../assets/one-touch logo.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full relative mx-auto">
      <header className="fixed w-full h-[5.6rem] top-0 z-50 transition-all duration-300 bg-gray-900 text-white shadow-2xl">
        <div className="sm:flex flex-wrap mt-2">
          <Link to={"/"}>
            <div className="flex -mt-3">
              <img
                src={logo2}
                alt="logo"
                className="w-24 h-20 mt-1  md:w-32 md:h-24 sm:ml-10 ml-2 rounded-lg transition-all duration-300"
              />
            </div>
          </Link>

          <nav className="hidden md:block sm:mt-7 lg:mr-[3rem] xl:mr-[4rem] 2xl:mr-[4rem] sm:ml-auto sm:mr-auto md:mr-6 items-center text-xl md:text-2xl justify-center">
            <Link
              to={"/"}
              className="mx-2 hover:text-[26px] lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Adamina, serif" }}
            >
              Home
            </Link>

            <Link
              className="mx-2 hover:text-[26px] lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Adamina, serif" }}
              to={"/services"}
            >
              Services
            </Link>

            <Link
              className="mx-2 hover:text-[26px] lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Adamina, serif" }}
              to={"/portfolio"}
            >
              Portfolio
            </Link>

            <Link
              to={"/contactus"}
              className="mx-2 hover:text-[26px] lg:mx-4 text-white hover:text-yellow-300 hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Adamina, serif" }}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* for small devices */}
        <div
          onClick={navHandler}
          className="flex sm:hidden justify-end mr-5 -mt-[3.5rem] text-white font-bold text-4xl z-50"
        >
          {nav ? <RxCross2 /> : <IoMenu />}
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-100 z-40 h-screen sm:hidden flex transform ${
          nav ? "translate-x-[50%]" : "translate-x-[100%]"
        } transition-transform duration-300`}
      >
        <nav className="flex flex-col ml-10 justify-center items-center gap-4 text-[1.5rem] md:text-2xl text-white">
          <Link
            to={"/"}
            onClick={navHandler}
            className="hover:text-yellow-300 hover:shadow-xl transition duration-300"
            style={{ fontFamily: "Adamina, serif" }}
          >
            Home
          </Link>

          <Link
            to={"/services"}
            onClick={navHandler}
            className="hover:text-yellow-300 hover:shadow-xl transition duration-300"
            style={{ fontFamily: "Adamina, serif" }}
          >
            Services
          </Link>

          <Link
            to={"/portfolio"}
            onClick={navHandler}
            className="hover:text-yellow-300 hover:shadow-xl transition duration-300 "
            style={{ fontFamily: "Adamina, serif" }}
          >
            Portfolio
          </Link>

          <Link
            to={"/contactus"}
            onClick={navHandler}
            className="hover:text-yellow-300 hover:shadow-xl transition duration-300 "
            style={{ fontFamily: "Adamina, serif" }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
