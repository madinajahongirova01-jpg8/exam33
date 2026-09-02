import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import i1 from "../assets/instagram.svg";
import i2 from "../assets/call.svg";
import i3 from "../assets/vk.svg";
import i4 from "../assets/facebook.svg";

export default function Footer() {
  return (
    <footer className="max-w-[1500px] mx-auto border-t border-[#D9E5EC] py-8 px-6 sm:py-10 sm:px-10 lg:py-12 lg:px-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

     
        <div className="flex items-start gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="logo" className="w-[60px] sm:w-[70px] shrink-0" />

          <p className="text-[#446B80] custom text-sm sm:text-base">
            Онлайн гипермаркет
            <br />
            товаров для детей
          </p>
        </div>

     
        <div className="flex flex-col gap-3 text-[#446B80] font-light">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/sales">Акции</NavLink>
          <NavLink to="/blog">Блог</NavLink>
          <NavLink to="/contact">Контакты</NavLink>
        </div>

      
        <div className="flex flex-col gap-3 text-[#446B80] font-light">
          <NavLink to="/return">Возврат и гарантия</NavLink>
          <NavLink to="/delivery">Оплата и доставка</NavLink>
        </div>

        
        <div className="text-[#446B80] font-light">
          <NavLink to="/wholesale">
            Оптовым клиентам
          </NavLink>
        </div>

        {/* Соцсети */}
        <div>
          <p className="text-[#446B80] mb-4">
            Мы в социальных сетях
          </p>

          <div className="flex gap-4">
            <img src={i1} alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
            <img src={i2} alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
            <img src={i3} alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
            <img src={i4} alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
          </div>
        </div>
      </div>

     
      <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center text-[#9AAEBB] text-xs sm:text-sm text-left">
        <p>© 2020 karapuz05.ru</p>

        <p className="sm:text-right">
          Пользовательское соглашение /
          политика конфиденциальности
        </p>
      </div>
    </footer>
  );
}