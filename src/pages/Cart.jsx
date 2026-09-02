import { CardClassic, CardNumber, ColorCard, Card2 } from '../components/Cards';
import Logos from './../components/Logos';
import Banner from './../components/Banner';
import { useEffect, useState } from 'react';
import { FreeMode, Navigation } from "swiper/modules";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from "../const/const";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { useNavigate } from 'react-router';


function CartItem({ img, title, price, cnt, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-x-4 gap-y-3 py-4 sm:py-[25px] border-b border-[#EAEAEA]">

      <div className="flex items-center gap-3 sm:gap-[20px] w-full sm:w-auto">
        <img src={img} alt="" className="w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] object-contain shrink-0" />

        <div className="flex flex-col gap-[6px] sm:gap-[8px] min-w-0 flex-1 sm:max-w-[300px]">
          <p className="text-[#446B80] text-[13px] sm:text-[15px] leading-snug">{title}</p>
          <p className="text-[#7FC9F0] text-[12px] sm:text-[13px]">В наличии</p>
        </div>

        <p className="text-[#446B80] text-[16px] sm:hidden font-semibold shrink-0">
          {(price * cnt).toLocaleString()} ₽
        </p>
      </div>

      <div className="flex items-center justify-between w-full sm:w-auto sm:gap-[40px] pl-[76px] sm:pl-0">

        <div className="flex items-center border border-[#DCE7EF] rounded-full px-[6px] py-[6px] gap-[10px]">
          <button
            onClick={onDecrease}
            className="w-[26px] h-[26px] flex items-center justify-center text-[#7FC9F0]"
          >
            <RemoveIcon sx={{ fontSize: 18 }} />
          </button>

          <span className="text-[#446B80] text-[16px] w-[16px] text-center">{cnt}</span>

          <button
            onClick={onIncrease}
            className="w-[26px] h-[26px] flex items-center justify-center text-[#7FC9F0]"
          >
            <AddIcon sx={{ fontSize: 18 }} />
          </button>
        </div>

        <p className="hidden sm:block text-[#446B80] text-[20px] font-semibold w-[120px] text-right">
          {(price * cnt).toLocaleString()} ₽
        </p>

        <div className="flex items-center sm:flex-col gap-[14px] sm:ml-[20px]">
          <FavoriteBorderIcon sx={{ color: "#B7C6D0", fontSize: 22, cursor: "pointer" }} />
          <DeleteOutlineOutlinedIcon
            onClick={onRemove}
            sx={{ color: "#B7C6D0", fontSize: 22, cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}


function CartSummary({ count, total, discount = 0, onCheckout }) {
  return (
    <div className="bg-white shadow-lg rounded-[16px] p-5 sm:p-[25px] w-full sm:w-[280px] flex flex-col gap-4 sm:gap-[20px]">

      <div className="flex items-center gap-[10px] text-[#446B80] text-[14px]">
        <LocalShippingOutlinedIcon sx={{ color: "#7FC9F0", fontSize: 20 }} />
        <span>154 ₽ Доставка</span>
      </div>

      <div className="flex items-center gap-[10px]">
        <input
          type="text"
          placeholder="Промокод"
          className="border border-[#DCE7EF] rounded-full px-[16px] py-[8px] text-[14px] text-[#446B80] flex-1 outline-none"
        />
      
      </div>

      <div className="flex flex-col gap-[10px] pt-[10px] border-t border-[#EAEAEA]">
        <div className="flex justify-between text-[#446B80] text-[15px]">
          <span>Количество ({count})</span>
          <span>{total.toLocaleString()} ₽</span>
        </div>

        <div className="flex justify-between text-[#446B80] text-[15px]">
          <span>Скидка</span>
          <span>{discount} ₽</span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-[10px] border-t border-[#EAEAEA]">
        <span className="text-[#446B80] text-[17px] font-medium">Итого</span>
        <span className="text-[#446B80] text-[22px] font-semibold">
          {(total - discount).toLocaleString()} ₽
        </span>
      </div>

      <button
        onClick={onCheckout}
        className="bg-[#7FC9F0] text-white text-[15px] font-medium rounded-full py-[12px] mt-[10px]"
      >
        Перейти к оформлению
      </button>
    </div>
  );
}


export default function Cart() {
  const [cart, setCart] = useState([]);

const navigation =useNavigate()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleIncrease = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, cnt: item.cnt + 1 } : item
    );
    saveCart(newCart);
  };

  const handleDecrease = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id ? { ...item, cnt: item.cnt - 1 } : item
      )
      .filter((item) => item.cnt > 0);
    saveCart(newCart);
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.cnt, 0);
  const count = cart.reduce((sum, item) => sum + item.cnt, 0);

  return (
    <div>

      <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] py-8 sm:py-10 lg:py-[60px]">

<p className="custom font-medium text-[26px] sm:text-[42px] lg:text-[66px] text-center sm:text-left">Товары в корзине </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px] items-start mt-6 lg:mt-0">

          <div className="flex-1 w-full min-w-0">
            {cart.length === 0 ? (
              <p className="text-[#446B80] text-[16px] sm:text-[18px]">Корзина пуста</p>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  img={item.img}
                  title={item.title || item.description}
                  price={item.price}
                  cnt={item.cnt}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))
            )}
          </div>

          {cart.length > 0 && (
            <CartSummary
              count={count}
              total={total}
              onCheckout={() =>navigation("/checkout")}
            />
          )}
        </div>
      </section>


      <section className="text-center px-4">
        <p className="custom font-medium text-[26px] sm:text-[42px] lg:text-[66px] text-center">С этим покупают</p>
      </section>

      <section className="relative max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] py-6 lg:py-10">

        <Swiper
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: ".swiper-button-prev-cart",
            nextEl: ".swiper-button-next-cart",
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
            <SwiperSlide key={el.id} style={{ height: "540px" }}>
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
          <div className="swiper-button-prev-cart w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
            <ArrowBackRoundedIcon sx={{ color: "#5D8196", fontSize: { xs: 22, sm: 30 } }} />
          </div>

          <div className="swiper-button-next-cart w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border-[3px] border-[#5D8196] flex items-center justify-center cursor-pointer">
            <ArrowBackRoundedIcon
              sx={{ color: "#5D8196", fontSize: { xs: 22, sm: 30 }, transform: "rotate(180deg)" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}