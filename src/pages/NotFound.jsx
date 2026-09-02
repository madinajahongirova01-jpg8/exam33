import React from 'react'
import img from "../assets/404.png"
import logo from "../assets/logo.png"

import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';

export default function NotFound() {

  const navigate = useNavigate()

  return (

    <div>
      <div className="max-w-[1500px] mx-auto py-[12px] md:py-[20px] px-[16px] md:px-[60px] border-b border-[#2235401b]">
        <div className="flex items-center gap-[10px] md:gap-[20px]">
          <img src={logo} alt="" />
          <p className="text-[#446B80] custom">
            Онлайн гипермаркет <br />
            товаров для детей
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-center gap-[16px] md:gap-[20px] py-[40px] md:py-[70px] px-[16px] md:px-0">
        <img src={img} alt="" />
        <p className='custom text-[24px] md:text-[35px] text-[#446B80]'>Страница не найдена</p>
        <p className="text-[15px] md:text-[19px] px-0 md:px-[400px] font-light text-[#446B80]">
          Мы не можем найти страницу, которую вы ищете. Она может быть еще не зарегестрирована или её не существует
        </p>
        <Button
          variant="contained" disableElevation
          sx={{
            color: "white",
            backgroundColor: "#7FC9F0",
            borderRadius: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
            "&:hover": {
              backgroundColor: "#5FB5E5",
            },
          }}

          onClick={() => navigate("/")}
        >
          На главную
        </Button>
      </div>
    </div>

  )
}