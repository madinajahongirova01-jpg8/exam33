import React from 'react'
import Navbar from './../components/Navbar';
import Button2 from './../components/Button';
import {Link } from 'react-router';


export default function Password3() {



  return (
  <div>
    <Navbar/>
    <section>
<div className="flex flex-col items-start px-[16px] md:px-[60px] gap-[24px] md:gap-[40px]">
    <p className="custom text-[28px] md:text-[48px] font-medium">Спасибо</p>
<p className="text-[#446B80]"> Письмо с инструкцией по восстановлению пароля <br /> мы отправили на Ваш электронный адрес</p>
<Link to="/">
<Button2 >На главную</Button2>
</Link>
    </div>
    </section>
    
  </div>
  )
}