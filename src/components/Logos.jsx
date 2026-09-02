import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import im from "../assets/cybex.png";
import im2 from "../assets/erbesi.png";

export default function Logos() {
  return (
    <section className="relative max-w-[1500px] mx-auto px-[60px] py-10">

      <div className="swiper-button-prev-custom absolute left-[10px] top-1/2 -translate-y-1/2 z-10 w-[45px] h-[45px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
        <ArrowBackRoundedIcon
          sx={{
            fontSize: 24,
            color: "#5D8196",
          }}
        />
      </div>

      <div className="swiper-button-next-custom absolute right-[10px] top-1/2 -translate-y-1/2 z-10 w-[45px] h-[45px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
        <ArrowBackRoundedIcon
          sx={{
            fontSize: 24,
            color: "#5D8196",
            transform: "rotate(180deg)",
          }}
        />
      </div>

      <Swiper
        modules={[Navigation, FreeMode]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        freeMode
        grabCursor
        slidesPerView={4}
        spaceBetween={20}
        className="logosSwiper"
      >
        {[im, im2, im, im2, im, im2, im].map((logo, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
              height: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "transparent",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{
                width: "180px",
                height: "80px",
                objectFit: "contain",
                borderRadius: "0",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}