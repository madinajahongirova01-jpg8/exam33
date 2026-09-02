import React, { useEffect, useRef, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Button2 from './Button'
import Button from '@mui/material/Button'
import { addToCart } from '../CartLogic'

function AnimateCard({ children }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.15
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={show ? "animate__animated animate__slideInLeft" : "opacity-0"}
    >
      {children}
    </div>
  )
}


export function CardNumber({ img, text }) {
  return (
    <AnimateCard>
      <div className="group rounded-[12px] border-2 border-[#7FC9F0] p-4 sm:p-5 lg:p-[30px] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(127,201,240,0.15)] transition-all duration-300 flex flex-col gap-3 sm:gap-5 lg:gap-[30px] items-center text-center">

        <img
          src={img}
          alt=""
          className="w-[60px] sm:w-[80px] lg:w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <p className="custom text-[13px] sm:text-[16px] lg:text-[20px] text-[#446B80]">
          {text}
        </p>

      </div>
    </AnimateCard>
  )
}


export function CardClassic({ text, price, img, product }) {
  return (
    <AnimateCard>
      <div className="group bg-white shadow-lg rounded-[12px] p-3 sm:p-6 lg:p-[30px] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(68,107,128,0.12)] transition-all duration-300 w-full min-w-0">

        <div className="flex justify-end">
          <FavoriteBorderIcon
            sx={{
              color: "#7FC9F0",
              fontSize: 28,
              cursor: "pointer"
            }}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-row justify-between items-center gap-3 sm:gap-6 lg:gap-[40px] min-w-0">

          <div className="flex flex-col justify-between gap-3 sm:gap-0 sm:h-[250px] min-w-0 flex-1">

            <div className="flex flex-col gap-2 lg:gap-[20px]">

              <p className="custom text-[#446B80] text-[14px] sm:text-[20px] lg:text-[24px] max-w-full sm:max-w-[260px] lg:max-w-[320px]">
                {text}
              </p>

              <p className="text-[#7FC9F0] text-[14px] sm:text-[18px] lg:text-[20px] font-medium">
                {price} $
              </p>

            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-[20px] w-full sm:w-[260px] lg:w-[300px]">

              <Button2 onClick={() => addToCart(product)}>
                В корзину
              </Button2>

              <p className="text-[#446B80] font-medium cursor-pointer hover:underline text-[12px] sm:text-[16px] hover:text-[#7FC9F0] transition-colors duration-300">
                Купить в один клик
              </p>

            </div>

          </div>

          <img
            src={img}
            alt=""
            className="w-[90px] h-[90px] sm:w-[260px] sm:h-[200px] lg:w-[320px] lg:h-[250px] object-contain shrink-0 transition-transform duration-500 group-hover:scale-105"
          />

        </div>

      </div>
    </AnimateCard>
  )
}


export function ColorCard({ title, desc, img, bg = "white" }) {
  return (
    <AnimateCard>
      <div
        className="group shadow-lg rounded-[12px] p-4 sm:p-6 lg:p-[30px] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(68,107,128,0.12)] transition-all duration-300"
        style={{ backgroundColor: bg }}
      >

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">

          <div className="flex flex-col justify-between gap-5 sm:gap-0 sm:h-[250px] w-full">

            <div className="flex flex-col gap-2 lg:gap-[20px]">

              <p className="text-[17px] sm:text-[18px] lg:text-[20px] font-bold text-[#446B80]">
                {title}
              </p>

              <p className="text-[#446B80] text-[14px] sm:text-[16px]">
                {desc}
              </p>

            </div>

            <Button
              variant="outlined"
              sx={{
                color: "#446B80",
                border: "1px solid #446B80",
                alignSelf: "flex-start",
                transition: "all .3s ease",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#446B80",
                  borderColor: "#446B80",
                  transform: "translateY(-2px)"
                }
              }}
            >
              Смотреть
            </Button>

          </div>

          <img
            src={img}
            alt={title}
            className="w-[200px] h-[160px] sm:w-[260px] sm:h-[200px] lg:w-[320px] lg:h-[250px] object-contain shrink-0 transition-transform duration-500 group-hover:scale-105"
          />

        </div>

      </div>
    </AnimateCard>
  )
}


export function Card2({ title, price, img, product }) {
  return (
    <AnimateCard>
      <div className="group bg-white shadow-lg rounded-[20px] p-4 sm:p-5 lg:p-[20px] w-full max-w-[280px] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(68,107,128,0.12)] transition-all duration-300">

        <div className="flex justify-between items-center mb-[10px]">

          <span className="bg-[#EAF6FD] text-[#7FC9F0] text-[11px] sm:text-[12px] font-semibold px-3 sm:px-[14px] py-[4px] rounded-full">
            NEW
          </span>

          <FavoriteBorderIcon
            sx={{
              color: "#7FC9F0",
              fontSize: 24,
              cursor: "pointer"
            }}
            className="hover:scale-110 transition-transform duration-300"
          />

        </div>

        <div className="flex justify-center items-center h-[180px] sm:h-[220px] lg:h-[250px]">

          <img
            src={img}
            alt=""
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
          />

        </div>

        <div className="flex flex-col gap-[10px] mt-[15px]">

          <p className="custom text-[#446B80] text-[15px] sm:text-[16px] lg:text-[18px] px-2 sm:px-[20px] leading-snug text-center">
            {title}
          </p>

          <p className="text-[#7FC9F0] text-[19px] sm:text-[20px] lg:text-[22px] font-semibold text-center">
            {price} ₽
          </p>

          <div className="flex flex-col items-center gap-[10px] mt-[10px] w-full">

            <Button2 onClick={() => addToCart(product)}>
              В корзину
            </Button2>

            <p className="text-[#7FC9F0] text-[14px] font-medium cursor-pointer hover:underline hover:text-[#446B80] transition-colors duration-300">
              Купить в один клик
            </p>
          </div>
        </div>
      </div>
    </AnimateCard>
  )
}