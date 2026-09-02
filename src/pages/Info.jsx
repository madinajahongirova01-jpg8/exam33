import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import hangOuts from "../assets/left-quote 1.png"
import breakfast from "../assets/breakfast.png"

import  { useRef} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';




import { EffectCoverflow, Pagination } from 'swiper/modules';

import axios from 'axios'


export const url = "https://to-dos-api.softclub.tj/api/to-dos";
export const url2 = "https://to-dos-api.softclub.tj/images";


export default function Info() {
const {id}=useParams()

const [user, setUser] = useState({
  images: [],
});


  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)



async function getById(){
    setIsLoading(true)
    setError(false)
    try {
       let {data}=await axios.get(`${url}/${id}`)
       console.log(data.data)
       setIsLoading(false)
setUser(data.data)
    } catch (error) {
        console.error(error);
        setError(error)
    }finally {
      setIsLoading(false)
    }
}


useEffect(() => {
  if (!id) return;

  getById();
}, [id]);



if(isLoading===true){
    return (
        <section className="dots-container">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</section>

    )
}

if(error){
    return(
         <section>
        <div className="flex justify-center items-center h-[400px]">
          <p className="text-red-500 text-[24px]">Ошибка загрузки данных</p>
        </div>
      </section>
    )
}



  return (
    <section >
         <div className="flex flex-col  gap-[20px]">
<p className="text-[#446B80] font-light">Главная › Блог › Питание в I триместре</p>
<p className="custom  text-[48px] font-medium">Блог</p>
  </div>

<div className="px-[60px] py-[30px] flex flex-col gap-[20px]">



     <Swiper
  effect="coverflow"
  grabCursor={true}
  
  slidesPerView={1}
  spaceBetween={20}
  pagination={{ clickable: true }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  }}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
>
{user.images.length > 0 ? (
  user.images.map((img) => (
    <SwiperSlide key={img.id}>
      <img
        src={`${url2}/${img.imageName}`}
        alt=""
        className="w-full h-[613px] object-cover rounded-[12px]"
      />
    </SwiperSlide>
  ))
) : (
  <SwiperSlide>
    <img
      src={defaultImage}
      alt="Нет изображения"
      className="w-full h-[613px] object-cover rounded-[12px]"
    />
  </SwiperSlide>
)}
</Swiper>


<p className="text-[#446B80] text-[48px] font-medium">{user.name}</p>
<p className='text-[#446B80]'>25.05.2020</p>
<br />
<p className='text-[#446B80]'>{user.description}</p>
<p className='text-[#446B80]'>Постарайтесь включить в меню ежедневно зеленые салаты с растительным
маслом и морскую рыбу. Важно начать прием препаратов фолиевой кислоты,
йода и витамина Е, принимать на протяжении всей беременности.
Из-за повышенной работы печени и почек целесообразно в самом начале
 беременности значительно ограничить в рационе количество острых блюд и
таких пряностей, как перец, горчица, уксус. Для снижения нагрузки на печень
жареное и жирное старайтесь заменить на отварное и тушеное, ограничьте
употребление сливочного масла, сметаны высокой жирности, сливок,
растительного масла. Творог употреблять маложирный.
Наряду с овощами и фруктами, кушайте хлеб грубого помола, так как в нем
содержится клетчатка и витамины группы В.</p>



<img src={breakfast} alt="" className="w-[100%] object-cover h-[613px] rounded-[12px]"/>
<div className="flex items-start gap-[30px]">
    <img src={hangOuts} alt="" />
    <p className="text-[#446B80]"><span className="text-[#446B80] font-bold">В 1-м триместре беременности</span> рацион
женщины существенно не отличается от ее
меню до беременности, могут лишь
поменяться вкусы беременной. Но уже
сейчас нужно начать придерживаться
принципов правильного питания, чтобы
избежать токсикоза и заложить основу
правильного развития эмбриона.</p>
</div>
<p className="text-[#446B80]">За время беременности организм должен получать достаточно железа,
чтобы предотвратить анемию у матери и плода, а также запастись железом на
время грудного вскармливания (это единственный и очень важный источник
получения железа для новорожденного). Для этого часто включайте в свой
рацион гречневую крупу и орехи.</p>
<br />
<br />

<p className="text-[#7FC9F0] font-medium cursor-pointer transition-all duration-300 hover:underline">
  Читать следующую статью ›
</p>

</div>

    </section>
  )
}
