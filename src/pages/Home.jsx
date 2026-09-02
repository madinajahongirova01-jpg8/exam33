import React from 'react'
import Header from './../components/Header';
import { CardClassic, CardNumber, ColorCard,Card2 } from '../components/Cards';
import i1 from "../assets/1.png"
import i2 from "../assets/2.png"
import i3 from "../assets/3.png"
import i4 from "../assets/4.png"
import Logos from './../components/Logos';
import Banner from './../components/Banner';
import  { useRef, useState } from 'react';
import {  FreeMode } from "swiper/modules";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Swiper, SwiperSlide } from 'swiper/react';



import "swiper/css";
import "swiper/css/navigation";



import { Navigation } from 'swiper/modules';
import {products} from "../const/const"


export default function Home() {


const [cart,setCart]=useState([])



  return (
   <div >
<Header/>
<section className="px-4 sm:px-6 lg:px-0 overflow-x-hidden">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex pt-6 lg:pt-[40px] gap-4 sm:gap-5 lg:gap-[30px]">
  {
    products.first.map((el)=>(
<CardClassic key={el.id} text={el.description} product={el} price={el.price} img={el.img}/>
    ))
  }
  </div>

</section>


<section className="flex flex-col gap-6 sm:gap-10 lg:gap-[50px] items-center text-center px-4 sm:px-6 lg:px-0">
<p className="custom font-medium text-[32px] sm:text-[46px] lg:text-[66px]">Популярные категории</p>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[30px] w-full">
{
  products.categories.map((el)=>(
<ColorCard key={el.id} title={el.title} img={el.img} desc={el.description} bg={el.color}/>
  ))
}
 </div>

</section>



<section className='text-center'>
<p className="custom font-medium text-[32px] sm:text-[46px] lg:text-[66px] text-center">Новинки</p>
  
</section>



 <section className="relative max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] py-6 lg:py-10">

     <Swiper
    modules={[Navigation, FreeMode]}
    navigation={{
      prevEl: ".swiper-button-prev-news",
      nextEl: ".swiper-button-next-news",
    }}
    freeMode
    grabCursor
    slidesPerView={1.3}
    spaceBetween={16}
    breakpoints={{
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    }}
    className="pb-[70px] lg:pb-[90px]"
  >
    {products.news.map((el) => (
      <SwiperSlide key={el.id}   style={{
    height: "540px",
  }}>
        <Card2
          title={el.title}
          img={el.img}
          price={el.price}
          product={el}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 z-20">

    <div className="swiper-button-prev-news w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
      <ArrowBackRoundedIcon
        sx={{
          color: "#5D8196",
          fontSize: { xs: 22, sm: 30 },
        }}
      />
    </div>

    <div className="swiper-button-next-news w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
      <ArrowBackRoundedIcon
        sx={{
          color: "#5D8196",
          fontSize: { xs: 22, sm: 30 },
          transform: "rotate(180deg)",
        }}
      />
    </div>

  </div>
    </section>
<br /><br /><br />

<Banner/>




<section className='text-center'>
<p className="custom font-medium text-[32px] sm:text-[46px] lg:text-[66px] text-center">Выгодное предложение</p>
  
</section>




<section className="relative max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] py-6 lg:py-10">

     <Swiper
    modules={[Navigation, FreeMode]}
    navigation={{
      prevEl: ".swiper-button-prev-sale",
      nextEl: ".swiper-button-next-sale",
    }}
    freeMode
    grabCursor
    slidesPerView={1.3}
    spaceBetween={16}
    breakpoints={{
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    }}
    className="pb-[70px] lg:pb-[90px]"
  >
    {products.popular.map((el) => (
      <SwiperSlide key={el.id}   style={{
    height: "540px",
  }}>
        <Card2
          title={el.title}
          img={el.img}
          price={el.price}
          product={el}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 z-20">

    <div className="swiper-button-prev-sale w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
      <ArrowBackRoundedIcon
        sx={{
          color: "#5D8196",
          fontSize: { xs: 22, sm: 30 },
        }}
      />
    </div>

    <div className="swiper-button-next-sale w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
      <ArrowBackRoundedIcon
        sx={{
          color: "#5D8196",
          fontSize: { xs: 22, sm: 30 },
          transform: "rotate(180deg)",
        }}
      />
    </div>

  </div>
    </section>




    <section className='text-center'>
<p className="custom font-medium text-[32px] sm:text-[46px] lg:text-[66px] text-center">Популярные товары</p>
  
</section>


<section className="relative max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] py-6 lg:py-10">

     <Swiper
    modules={[Navigation, FreeMode]}
    navigation={{
      prevEl: ".swiper-button-prev-popular",
      nextEl: ".swiper-button-next-popular",
    }}
    freeMode
    grabCursor
    slidesPerView={1.3}
    spaceBetween={16}
    breakpoints={{
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    }}
    className="pb-[70px] lg:pb-[90px]"
  >
    {products.popular.map((el) => (
      <SwiperSlide key={el.id}   style={{
    height: "540px",
  }}>
        <Card2
          title={el.title}
          img={el.img}
          price={el.price}
          product={el}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 z-20">

    <div className="swiper-button-prev-popular w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
      <ArrowBackRoundedIcon
        sx={{
          color: "#5D8196",
          fontSize: { xs: 22, sm: 30 },
        }}
      />
    </div>

    <div className="swiper-button-next-popular w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
      <ArrowBackRoundedIcon
        sx={{
          color: "#5D8196",
          fontSize: { xs: 22, sm: 30 },
          transform: "rotate(180deg)",
        }}
      />
    </div>

  </div>
    </section>



<section className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] px-4 sm:px-6 lg:px-0">
  <p className="custom text-[22px] sm:text-[30px] lg:text-[40px] font-medium text-center">Карапуз - это онлайн гипермаркет товаров <br className="hidden sm:block" /> для детей. С нами вырастают поколения!</p>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[30px]">
<CardNumber text="Все товары для детей в одном месте" img={i1}/>
<CardNumber text="Цены ниже, чем у конкурентов" img={i2}/>
<CardNumber text="Официальные дилеры лучших мировых производителей" img={i3}/>
<CardNumber text="Собственное эко-производство" img={i4}/>

</div>

</section>




<Logos/>

   </div>

  )
}