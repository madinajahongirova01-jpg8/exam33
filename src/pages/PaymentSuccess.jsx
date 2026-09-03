import { Link } from "react-router";
import { useEffect, useState } from "react";

function PaymentSuccess() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#eef8fc] via-white to-[#f4f9fb] px-4">

      <div
        className={`relative w-full max-w-[520px] overflow-hidden rounded-[30px] border border-white bg-white px-8 py-14 text-center shadow-[0_25px_80px_rgba(38,63,82,0.15)] transition-all duration-700 ${
          show
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >

        <div className="absolute -right-[80px] -top-[80px] h-[180px] w-[180px] rounded-full bg-[#54b8e8]/10" />

        <div className="absolute -bottom-[90px] -left-[90px] h-[200px] w-[200px] rounded-full bg-[#54b8e8]/10" />

        <div className="relative mx-auto h-[140px] w-[140px]">

          <div
            className={`absolute inset-0 rounded-full border-[3px] border-[#54b8e8]/20 transition-all duration-1000 ${
              show
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }`}
          />

          <div
            className={`absolute inset-[10px] rounded-full border-[3px] border-[#54b8e8]/40 transition-all delay-200 duration-700 ${
              show
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }`}
          />

          <div
            className={`absolute inset-[22px] flex items-center justify-center rounded-full bg-[#54b8e8] shadow-[0_10px_30px_rgba(84,184,232,0.35)] transition-all duration-700 ${
              show
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
            }`}
          >
            <span
              className={`text-[62px] font-bold leading-none text-white transition-all delay-300 duration-500 ${
                show
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
            >
              ✓
            </span>
          </div>

        </div>

        <h1
          className={`relative mt-9 text-[30px] font-semibold text-[#263f52] transition-all delay-300 duration-700 ${
            show
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          Оплата прошла успешно
        </h1>

        <p
          className={`relative mt-3 text-[16px] leading-6 text-[#718899] transition-all delay-500 duration-700 ${
            show
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          Спасибо за покупку!
          <br />
          Ваш заказ успешно оформлен.
        </p>

        <div
          className={`relative mt-9 transition-all delay-700 duration-700 ${
            show
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-[12px] bg-[#54b8e8] px-9 py-3.5 text-[16px] font-medium text-white shadow-[0_8px_25px_rgba(84,184,232,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3da9dc] hover:shadow-[0_12px_30px_rgba(84,184,232,0.35)]"
          >
            <span>
              Вернуться на главную
            </span>

            <span className="text-[20px] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div
          className={`relative mt-7 text-[12px] uppercase tracking-[2px] text-[#a5b3bc] transition-all delay-1000 duration-700 ${
            show
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          Заказ успешно оплачен
        </div>

      </div>

    </div>
  );
}

export default PaymentSuccess;