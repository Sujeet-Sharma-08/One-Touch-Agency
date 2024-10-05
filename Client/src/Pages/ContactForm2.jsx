import { useState } from "react";
import axios from 'axios';

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await axios.post("https://www.api.onetouchagency.com/save-phone", formData);
      if (response.status === 200) {
        setSuccess("Form submitted successfully!");
        setError("");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setError("Error submitting form. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("Error submitting form. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div
      className="text-gray-600 body-font relative bg-gray-900"
      style={{ fontFamily: "Adamina, serif" }}
    >
      {/* horizontal line */}
      <div className="w-full -ml-5 md:-ml-6">
        <hr className="ml-12" style={{ border: "0.5px solid yellow" }} />
      </div>

      <h1
        className="text-5xl mt-[8.2rem] font-medium flex justify-center text-white"
        style={{ fontFamily: "Chivo, sans-serif" }}
      >
        Contact Us
      </h1>
      <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=18.95541174712792,72.81646177585895&hl=en&z=14&output=embed"
          ></iframe>
          <div className="bg-white -ml-7 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                ADDRESS
              </h2>
              <p className="mt-1 font-bold text-lg">MUMBAI</p>
              <br />
              <span className="-mt-2 text-lg">
                147-E, 1st Floor, Panchratna Building, Opera House,
                Mumbai-400004
              </span>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed text-lg">
                contact@onetouchagency.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-lg">+91 7021377482</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-[#0c1219] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg">
          <h1 className="text-gray-300 text-center text-2xl font-bold title-font pl-5 mt-3 md:-mt-3 ">
          Get In Touch
          </h1>
          <form
            className="flex flex-col justify-center items-center space-y-3 "
            onSubmit={handleSubmit}
          >
            <div style={{ minHeight: "1.5rem" }}>
              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-center mt-4">{success}</p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-[16rem] py-[10px] md:w-[14rem] lg:w-[17rem] xl:w-[23rem] p-4 rounded-2xl hover:border-yellow-300 border-2 border-[#f2f625]  bg-transparent focus:outline-none"
                required
              />
            </div>
            <div className="flex justify-center">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-[16rem] py-[10px] md:w-[14rem] lg:w-[17rem] xl:w-[23rem] p-4 rounded-2xl hover:border-yellow-300 border-2 border-[#f2f625] focus:bg-transparent bg-transparent focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-center">
              <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                className="w-[16rem] py-[16px] md:w-[14rem] lg:w-[17rem] xl:w-[23rem] p-4 rounded-2xl hover:border-yellow-300 border-2 border-[#f2f625]  bg-transparent focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-center py-3">
              <button
                type="submit"
                style={{ fontFamily: "Chivo, sans-serif" }}
                className="bg-[#f2f625] font-bold w-[16rem] py-[11px] md:w-[14rem] lg:w-[17rem] xl:w-[23rem]  button-submit text-black text-xl flex justify-center  rounded-2xl shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
              >
                Connect Now
              </button>
            </div>
          </form>
          {/* Highlighted Line */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;





