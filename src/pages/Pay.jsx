import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import LockIcon from "@mui/icons-material/Lock";
import Toaster from "../components/Toaster1";

export default function Pay() {
  const [cart, setCart] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [open, setOpen] = useState(false);

  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);

    // Корзина уже пуста (например, заказ был оплачен и страницу обновили,
    // либо сюда зашли напрямую) — не создаём новый заказ и не запускаем таймер.
    if (stored.length === 0) {
      setTimeLeft(0);
      return;
    }

    let orderId = localStorage.getItem("orderNumber");
    if (!orderId) {
      orderId = generateOrderNumber();
      localStorage.setItem("orderNumber", orderId);
    }
    setOrderNumber(orderId);

    let deadline = Number(localStorage.getItem("paymentDeadline"));

    if (!deadline || deadline <= Date.now()) {
      deadline = Date.now() + 20 * 60 * 1000;
      localStorage.setItem("paymentDeadline", deadline);
    }
    timerRef.current = setInterval(() => {
      const secondsLeft = Math.max(
        0,
        Math.floor((deadline - Date.now()) / 1000)
      );

      setTimeLeft(secondsLeft);

      if (secondsLeft === 0) {
        clearInterval(timerRef.current);
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const generateOrderNumber = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < 10; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.cnt,
    0
  );

  const deliveryPrice = 0;
  const totalToPay = total + deliveryPrice;

  const isCartEmpty = cart.length === 0;
  const isExpired = timeLeft === 0;

  const handlePay = () => {
    if (isExpired) return;

    clearInterval(timerRef.current);

    setTimeLeft(0);

    localStorage.removeItem("paymentDeadline");
    localStorage.removeItem("orderNumber");
    localStorage.removeItem("cart");
    setCart([]);

    setOpen(true);

    console.log("Оплата успешно выполнена");
  };

  return (
    <div className="max-w-[1100px] mx-auto px-[16px] sm:px-[24px] md:px-[40px] py-[20px] md:py-[30px]">

      <div className="flex flex-wrap items-center gap-[8px] text-[#7FC9F0] text-[12px] sm:text-[13px] mb-[20px] md:mb-[30px]">
        <span>Корзина</span>
        <span className="text-[#B7C6D0]">›</span>
        <span>Оформление заказа</span>
        <span className="text-[#B7C6D0]">›</span>
        <span className="text-[#446B80]">Оплата</span>
      </div>

      <p className="text-[#446B80] text-[14px] mb-[20px] md:mb-[30px]">
        Заказ №{orderNumber}
      </p>

      <div className="flex flex-col gap-[8px] mb-[24px] md:mb-[30px]">
        <p className="text-[#446B80] text-[20px] sm:text-[24px] font-semibold">
          Итого к оплате
        </p>

        <p className="text-[#446B80] text-[19px] sm:text-[22px]">
          {totalToPay.toLocaleString()} ₽
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[60px] items-start">

        <div className="w-full lg:w-auto flex flex-col gap-[20px]">

          <label className="flex items-center gap-[12px] cursor-pointer">
            <input
              type="radio"
              name="paymentType"
              checked
              readOnly
              className="w-[20px] h-[20px] accent-[#7FC9F0] shrink-0"
            />

            <span className="text-[#446B80] text-[15px]">
              Новая карта
            </span>
          </label>

          <div className="relative w-full sm:w-[420px] h-[130px] rounded-[10px] overflow-hidden bg-[#F0F0F0] flex">

            <div className="flex-1 flex flex-col justify-between p-[16px] min-w-0">

              <div className="flex justify-between items-start">

                <p className="text-[#446B80] text-[13px]">
                  Номер карты
                </p>

                <div className="bg-[#EB001B] w-[24px] h-[16px] rounded-full opacity-80 relative -mr-[8px] shrink-0">

                  <div className="bg-[#F79E1B] w-[24px] h-[16px] rounded-full absolute left-[10px] opacity-80" />

                </div>

              </div>

              <p className="text-[#446B80] text-[16px] tracking-wide">
                xxxx xxxx xxxx 7580
              </p>

              <div className="flex items-center gap-[10px]">

                <div className="flex flex-col">

                  <span className="text-[#B7C6D0] text-[9px] leading-tight">
                    СРОК
                  </span>

                  <span className="text-[#B7C6D0] text-[9px] leading-tight">
                    ДЕЙСТВИЯ
                  </span>

                </div>

                <div className="border border-[#DCE7EF] rounded-[4px] px-[8px] py-[2px] text-[#446B80] text-[13px]">
                  ×× / ××
                </div>

              </div>

            </div>

            <div className="w-[90px] sm:w-[110px] shrink-0 bg-[#2B2B2B] flex flex-col justify-center items-center gap-[6px] p-[10px]">

              <span className="text-[#B7C6D0] text-[9px] self-start">
                CVC/CVV
              </span>

              <input
                type="text"
                maxLength={3}
                value={cvv}
                onChange={(e) =>
                  setCvv(e.target.value.replace(/\D/g, ""))
                }
                className="w-full bg-white border-2 border-[#F2C94C] rounded-[4px] px-[8px] py-[4px] text-[14px] outline-none"
              />

            </div>

          </div>

          <label className="flex items-center gap-[10px] cursor-pointer">
            <input
              type="checkbox"
              checked={saveCard}
              onChange={(e) => setSaveCard(e.target.checked)}
              className="w-[16px] h-[16px] accent-[#7FC9F0] shrink-0"
            />

            <span className="text-[#446B80] text-[14px]">
              Сохранить карту для будущих покупок
            </span>

          </label>
          <button
            onClick={handlePay}
            disabled={isExpired}
            className={`w-full sm:w-[420px] text-white text-[15px] font-medium rounded-[10px] py-[14px] mt-[10px] transition-colors ${
              isExpired
                ? "bg-[#DCE7EF] cursor-not-allowed"
                : "bg-[#7FC9F0] hover:bg-[#6AB8E0]"
            }`}
          >
            {isExpired ? "Время оплаты истекло" : "Оплатить"}
          </button>

          <Toaster
            open={open}
            handleClose={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-[16px] w-full lg:max-w-[280px] mt-0 lg:mt-[8px]">

          <p
            className={`text-[15px] font-medium ${
              isExpired ? "text-red-400" : "text-[#446B80]"
            }`}
          >
            {isExpired ? "00:00" : formatTime(timeLeft)} на оплату заказа
          </p>

          <div className="flex items-start gap-[10px]">
            <LockIcon
              sx={{
                color: "#B7C6D0",
                fontSize: 18,
                marginTop: "2px",
              }}
            />

            <p className="text-[#B7C6D0] text-[13px] leading-snug">
              Интернет-платежи защищены сертификатом TLS и протоколом
              3D Secure.
            </p>
          </div>

          <p className="text-[#B7C6D0] text-[13px] leading-snug">
            Яндекс не передаёт сторонним лицам платёжные данные,
            в том числе данные карты.
          </p>
        </div>
      </div>
    </div>
  );
}