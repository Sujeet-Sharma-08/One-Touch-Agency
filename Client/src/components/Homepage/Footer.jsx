import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import logo2 from "../../assets/onetouch_onblack_svg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full  bg-gray-900 ">
      {/* horizontal line */}
      <div className="w-full -ml-5 md:-ml-6">
        <hr className="ml-12" style={{ border: "0.5px solid yellow" }} />
      </div>

      <div className="hidden md:block">
        <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-5">
          {/* first div */}
          <div className="flex flex-col justify-center items-center mt-5 mb-8">
            {/* heading */}

            <h1
              className="text-white text-3xl mt-5 lg:text-2xl font-bold "
              style={{ fontFamily: "sans-serif,cursive " }}
            >
              One Touch Agency
            </h1>
            <p className="text-white font-medium text-center text-md mt-5">
              One-stop solution for all your events and exhibitions
            </p>

            {/* social icons */}
            <div className="flex mt-5 sm:mr-[1rem] items-center justify-center md:justify-start -ml-2 text-white">
              <a
                href="https://www.instagram.com/onetouchagency_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl mx-2 hover:text-pink-800" />
              </a>
              <a
                href="https://www.linkedin.com/company/one-touch-agency1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl mx-2 hover:text-blue-600" />
              </a>
              <a
                href="https://www.facebook.com/p/Onetouch-agency-100076203769169/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl mx-2 hover:text-blue-500" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl mx-2 hover:text-blue-600" />
              </a>
            </div>

            {/* gst number */}
            <div className="text-white mt-5 mb-2">
              <span className="font-bold" style={{ fontFamily: "sans-serif" }}>
                GSTIN/UIN :
              </span>{" "}
              <span className="">27AJUPA4411G1ZD</span> <br />
              <span className="font-bold" style={{ fontFamily: "sans-serif" }}>
                Phone No. :
              </span>{" "}
              <span className="">+91 7021377482</span>
            </div>

            <a
              className="bg-[#f2f625] px-2 font-bold py-[9px] mt-1 text-xs md:text-md lg:text-lg text-black flex justify-center rounded-2xl shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
              download
              href="./OneTouchAgency!.pdf"
            >
              Download Boucher
            </a>
          </div>

          {/* second div */}
          <div className="flex flex-col justify-center items-center mt-5 mb-8">
            {/* heading */}
            <h2 className="text-white text-2xl font-bold">COMPANY</h2>

            {/* footer navlinks */}
            <nav className="flex text-lg flex-col  text-center md:text-start mb-8 text-white lg:text-xl mt-4 space-y-2">
              <Link to={"/"} className="text-white hover:text-yellow-300">
                Home
              </Link>

              <Link
                to={"/services"}
                className="text-white hover:text-yellow-300"
              >
                Services
              </Link>

              <Link
                to={"/portfolio"}
                className="text-white hover:text-yellow-300"
              >
                Portfolio
              </Link>

              <Link
                to={"/contactus"}
                className="text-white hover:text-yellow-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* thid div */}

          {/* address1 */}

          <div className="flex flex-col justify-center items-center lg:-mt-4 text-white">
            <div className="flex sm:flex-row ">
              <div className=" lg:mt-[1px] sm:-ml-5 text-3xl">
                <ImLocation />
              </div>
              <h2 className="text-white text-2xl font-bold">ADDRESS</h2>
            </div>
            <p className="text-lg lg:text-xl sm:-mt-4 ml-5">
              <br />
              <strong>MUMBAI</strong>
              <br />
              147-E, 1st Floor,
              <br />
              Panchratna
              <br />
              Building, Opera
              <br />
              House, Mumbai-
              <br />
              400004
              <br />
            </p>
          </div>

          {/* fourth div */}
          {/* address -2  */}
          <div className="flex items-center justify-center gap-2 -mt-5 text-white">
            <p className="ml-16 text-lg lg:text-xl">
              <br />
              <br />
              <strong>BANGALORE</strong>
              <br />
              No. 49,
              <br />
              3rd Main Road,
              <br />
              5th Cross, Chamarajpet
              <br />
              Near Corporation Bank,
              <br />
              Bangalore - 560018
              <br />
            </p>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="md:hidden p-4 sm:p-10">
        <div className="flex gap-5 text-white">
          <div className="w-40 ">
            <img src={logo2} alt="" />
          </div>
          <div className="flex flex-col ">
            <h1
              className="text-white text-lg mt-1 font-bold "
              style={{ fontFamily: "sans-serif,cursive " }}
            >
              One Touch Agency
            </h1>
            <p className="text-white text-sm">
              One-stop solution for all your events and exhibitions
            </p>
          </div>
        </div>

        <div className="flex justify-between mx-auto">
          <div className="mt-8 ">
            <p className=" text-white text-xl font-bold">COMPANY</p>
            <nav className="flex text-lg md:text-xl flex-col  text-center md:text-start mb-8 text-white lg:text-xl mt-4 space-y-1">
              <Link to={"/"} className="text-white hover:text-yellow-300">
                Home
              </Link>

              <Link
                to={"/services"}
                className="text-white hover:text-yellow-300"
              >
                Services
              </Link>

              <Link
                to={"/portfolio"}
                className="text-white hover:text-yellow-300"
              >
                Portfolio
              </Link>

              <Link
                to={"/contactus"}
                className="text-white hover:text-yellow-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="flex flex-col justify-center mr-[2.7rem]  text-white">
            <div className="flex ml-2">
              <div className="mt-1 text-2xl">
                <ImLocation />
              </div>
              <h2 className="text-white text-xl font-bold">ADDRESS</h2>
            </div>
            <p className="text-sm md:text-lg lg:text-xl sm:-mt-4 ml-5">
              <br />
              <strong>MUMBAI</strong>
              <br />
              147-E, 1st Floor,
              <br />
              Panchratna
              <br />
              Building, Opera
              <br />
              House, Mumbai-
              <br />
              400004
              <br />
            </p>
          </div>
        </div>

        <div className="flex justify-between md:p-20 mx-auto">
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/one-touch-agency1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-4xl text-white mx-2 hover:text-blue-600" />
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-4xl text-white  hover:text-blue-600" />
                </a>
              </div>

              <div className="flex gap-3 ">
                <a
                  href="https://www.instagram.com/onetouchagency_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-4xl text-white mx-2 hover:text-pink-800" />
                </a>
                <a
                  href="https://www.facebook.com/p/Onetouch-agency-100076203769169/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-4xl text-white   hover:text-blue-500" />
                </a>
              </div>
            </div>
            <a
              className="bg-[#f2f625] px-2 font-bold py-[9px] mt-1 text-xs text-black flex justify-center rounded-2xl shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
              download
              href="./OneTouchAgency!.pdf"
            >
              Download Boucher
            </a>
          </div>

          <div className="flex gap-2 -mt-10  text-white">
            <p className="text-sm md:text-lg">
              <br />
              <br />
              <strong>BANGALORE</strong>
              <br />
              No. 49,
              <br />
              3rd Main Road,
              <br />
              5th Cross, Chamarajpet
              <br />
              Near Corporation Bank,
              <br />
              Bangalore - 560018
              <br />
            </p>
          </div>
        </div>
      </div>

      {/* horizontal line  */}
      <div className="w-full -ml-5 md:-ml-6">
        <hr className="ml-12" style={{ border: "0.5px solid yellow" }} />
      </div>

      <div
        className="flex flex-col  text-gray-400 sm:flex justify-center items-center font-bold "
        style={{ fontFamily: "Adamina, serif" }}
      >
        <div className="mb-5 flex flex-col mt-3  font-serif text-sm md:text-lg">
          <div className="text-center ">@2024 One Touch Agency</div>
          <div className="flex gap-1">
            <p> Designed By -</p>
            <a
              className="hover:text-yellow-300 underline"
              href="https://www.unarrow.com/"
            >
              Unarrow Digital Solutions.
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
