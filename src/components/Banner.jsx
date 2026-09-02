import baby from "../assets/малыш.png";
import Button2 from "./Button";

export default function Banner() {
  return (
    <div className="shadow-lg w-full border-4  border-t-[#cccccc3d] border-b-0 border-r-0 border-l-0">
      <section className="relative max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-[60px] h-[340px] sm:h-[420px] lg:h-[500px] flex items-center overflow-hidden">

        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[40px] items-start z-10 max-w-[60%] sm:max-w-none">
          <p className="custom text-[26px] sm:text-[44px] lg:text-[66px] leading-tight">
            Все детские костюмы <br /> с акцией 10%
          </p>

          <Button2>Смотреть костюмы</Button2>
        </div>

       <img
  src={baby}
  alt=""
  className="absolute right-0 sm:right-0 bottom-0 h-[260px] sm:h-[400px] lg:h-[564px] top-auto sm:top-[10px] object-contain"
/>
      </section>
    </div>
  );
}