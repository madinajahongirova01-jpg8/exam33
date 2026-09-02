import React from 'react'
import i1 from "../assets/instagram.svg";
import i2 from "../assets/call.svg";
import i3 from "../assets/vk.svg";
import i4 from "../assets/facebook.svg";
import ContactForm from './../components/Inputs';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contact() {
  return (
    <section className='flex flex-col gap-[32px] md:gap-[50px]   py-[20px] md:py-[30px]'>

      <div className="flex flex-col lg:flex-row lg:items-start gap-[32px] lg:gap-[60px]">

        <div className="flex flex-col gap-[24px] md:gap-[30px]">
          <div className="flex flex-col gap-[16px] md:gap-[20px]">
            <p className="text-[#446B80] font-light text-[13px] sm:text-[14px]">Главная › Контакты</p>
            <p className="custom text-[32px] sm:text-[40px] md:text-[48px] font-medium">Контакты</p>
          </div>

          <div className="flex flex-col gap-[12px] md:gap-[20px]">
            <p className="text-[20px] sm:text-[24px] text-[#446B80] font-semibold">Адрес</p>
            <p className="text-[#446B80] font-medium text-[14px] sm:text-[16px]">
              Республика Дагестан, г Махачкала, улица Батырая 108
            </p>
          </div>

          <div className="flex flex-col gap-[12px] md:gap-[20px]">
            <p className="text-[20px] sm:text-[24px] text-[#446B80] font-semibold">Телефон</p>
            <p className="text-[#446B80] font-medium text-[14px] sm:text-[16px]">+ 7 872 278 08 58</p>
            <p className="text-[#446B80] font-medium text-[14px] sm:text-[16px]">+7 988 799 93 27</p>
          </div>

          <div className="flex flex-col gap-[12px] md:gap-[20px]">
            <p className="text-[20px] sm:text-[24px] text-[#446B80] font-semibold">Электронный адрес</p>
            <p className="text-[#446B80] font-medium text-[14px] sm:text-[16px] break-all">karapuz_108@mail.ru</p>
          </div>

          <div className="flex flex-col gap-[12px] md:gap-[20px]">
            <p className="text-[20px] sm:text-[24px] text-[#446B80] font-semibold">Мы в социальных сетях</p>
            <div className="flex gap-4">
              <img src={i1} alt="" className="w-[28px] h-[28px] sm:w-auto sm:h-auto" />
              <img src={i2} alt="" className="w-[28px] h-[28px] sm:w-auto sm:h-auto" />
              <img src={i3} alt="" className="w-[28px] h-[28px] sm:w-auto sm:h-auto" />
              <img src={i4} alt="" className="w-[28px] h-[28px] sm:w-auto sm:h-auto" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:flex-1">
          <ContactForm />
        </div>

      </div>

      <div className="h-[300px] sm:h-[420px] md:h-[591px] w-full">
        <YMaps>
          <Map
            width="100%"
            height="100%"
            defaultState={{
              center: [38.57, 68.78],
              zoom: 11,
            }}
          >
            <Placemark
              geometry={[38.57, 68.78]}
              options={{
                preset: "islands#redIcon",
              }}
            />
          </Map>
        </YMaps>
      </div>

    </section>
  )
}