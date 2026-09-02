import React from 'react'
import Button2 from './../components/Button'
import mom from "../assets/ребенок с мамой.png"

export default function Header() {
  return (
    <div>
      <header className="bg-[#ecc7c12b] overflow-hidden">
        <div className="container m-auto flex items-center justify-between px-16 py-24">

          <div className="flex flex-col animate-[slideIn_.9s_ease-out]">
            <h1
              className="font-baloo font-bold text-[65px] w-[650px] text-[#446B80] animate-[fadeUp_1s_ease-out]"
              style={{ fontFamily: '"Comic Neue", cursive, sans-serif' }}
            >
              Все самое необходимое для вашего ребенка
            </h1>

            <p className="mt-6 text-[20px] text-[#8a97a0] leading-relaxed animate-[fadeUp_1.3s_ease-out]">
              Посмотрите нашу новую подборку<br />
              для ухода за вашим ребенком
            </p>

            <div className="mt-[30px] animate-[fadeUp_1.6s_ease-out]">
              <div className="transition-all duration-300 hover:scale-105 active:scale-95">
                <Button2>Смотрет</Button2>
              </div>
            </div>
          </div>

          <div className="relative animate-[float_4s_ease-in-out_infinite]">
            <div className="absolute inset-10 rounded-full bg-[#f5c7c0] blur-3xl opacity-30 animate-pulse"></div>

            <img
              src={mom}
              alt=""
              className="relative w-[620px] h-[620px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>

        <style>
          {`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-80px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(35px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes float {
              0%, 100% {
                transform: translateY(0) rotate(0deg);
              }
              50% {
                transform: translateY(-18px) rotate(1deg);
              }
            }
          `}
        </style>
      </header>
    </div>
  )
}