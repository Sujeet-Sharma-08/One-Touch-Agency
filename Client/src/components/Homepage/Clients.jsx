import image1 from "../../assets/Clients images/bhoomi logo.png";
import image2 from "../../assets/Clients images/chara.png";
import image3 from "../../assets/Clients images/tata nq.png";
import image4 from "../../assets/Clients images/vecmocon.png"; 
import image5 from '../../Pages/ClientPage2/client2-images/303 camphor.jpeg'
import image6 from '../../Pages/ClientPage2/client2-images/arihant.png'
import image8  from '../../Pages/ClientPage2/client2-images/fusion.jpeg'
import image9  from '../../Pages/ClientPage2/client2-images/green granite.jpeg'
import image10  from '../../Pages/ClientPage2/client2-images/kalpa.jpeg'
import image11 from '../../Pages/ClientPage2/client2-images/303 camphor.jpeg'
import image12 from '../../Pages/ClientPage2/client2-images/kei.jpeg'
import image13  from '../../Pages/ClientPage2/client2-images/LDJS.jpeg'
import image14 from '../../Pages/ClientPage2/client2-images/logo.png'
import image15 from '../../Pages/ClientPage2/client2-images/lotusmarble.png'
import image16 from '../../Pages/ClientPage2/client2-images/NU.png'
import image17 from '../../Pages/ClientPage2/client2-images/oracle.png'
import image18 from '../../Pages/ClientPage2/client2-images/portal.jpeg'
import image19  from '../../Pages/ClientPage2/client2-images/tata_ch.jpeg'
import image20  from '../../Pages/ClientPage2/client2-images/wings grooup.jpeg'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay } from 'swiper/modules';
import './Client.css'
function Clients() {
  return (
    <div className="bg-gray-900 w-full">
      <h1
        className="sm:text-5xl text-2xl flex mb-5 sm:mb-10 justify-center pt-10 font-medium title-font text-white"
        style={{ fontFamily: "Chivo, sans-serif" }}
      >
        Our Valuable Clients
      </h1>

      <div className="relative">
        <Swiper
          pagination={{
            clickable: true, // Allows bullets to be clickable
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={500}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] h-[10rem] md:w-[20rem] md:h-[12rem] rounded-lg border-2 border-white">
              <img src={image1} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] h-[10rem] md:w-[20rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image2} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={ image3} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image4} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image5} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image6} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image8} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image9}  className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image10} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image11} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image12} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image13} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image14} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image15} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image16} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image17} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image18} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image19} className="w-full h-full rounded-lg bg-cover" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-4">
            <div className="flex justify-center w-[16rem] md:w-[20rem] h-[10rem] md:h-[12rem] rounded-lg border-2 border-white ">
            <img src={image20} className="w-full h-full bg-cover rounded-lg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center">
          <a
            style={{ fontFamily: "Chivo, sans-serif" }}
            className="text-white text-xl flex justify-center py-3 px-6 mt-8 mb-10 border-[3px] border-white rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
            href="/contactus"
          >
            Be the next
          </a>
        </div>

        <div className="flex justify-center">
          <a
            style={{ fontFamily: "Chivo, sans-serif" }}
            className="text-white text-xl flex justify-center py-3 px-6 mt-8 mb-10 border-[3px] border-white rounded-2xl shadow-[#F2F625] shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:border-[#F2F625] focus:outline-none"
            href="/clients"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
}

export default Clients;
