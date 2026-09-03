import { useState } from "react";
import { useNavigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";
import { LockIcon } from "lucide-react";

function Pay() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const formatCardNumber = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 16);

    if (!numbers) {
      return "xxxx xxxx xxxx xxxx";
    }

    let result = "";

    for (let i = 0; i < numbers.length; i++) {
      if (i < numbers.length - 4) {
        result += "x";
      } else {
        result += numbers[i];
      }

      if ((i + 1) % 4 === 0 && i !== numbers.length - 1) {
        result += " ";
      }
    }

    return result;
  };

  const handleCardNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(value);
  };

  const handleExpiry = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);

    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpiry(value);
  };

  const handleCvv = (e) => {
    setCvv(e.target.value.replace(/\D/g, "").slice(0, 3));
  };

  const handlePay = () => {
  

    navigate("/paymentSuccess");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <Toaster position="top-right" />

      <div className="mx-auto max-w-[900px]">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-[28px] font-semibold text-[#263f52]">
              Оплата заказа
            </h1>

            <p className="mt-2 text-[15px] text-[#718899]">
              Введите данные банковской карты
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#53738a]">
            <LockIcon size={18} />

            <span className="text-[14px]">
              Безопасная оплата
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">

          <div className="w-full md:w-[500px]">

            <div className="relative h-[150px] w-full overflow-hidden rounded-[12px] bg-[#f0f1f2]">

              <div className="absolute left-5 top-5">
                <p className="text-[14px] text-[#53738a]">
                  Номер карты
                </p>

                <div className="relative mt-1 h-[32px] w-[310px]">

                  <div
                    className={`absolute left-0 top-0 text-[19px] tracking-[2px] ${
                      cardNumber
                        ? "text-[#53738a]"
                        : "text-[#9baab4]"
                    }`}
                  >
                    {formatCardNumber(cardNumber)}
                  </div>

                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumber}
                    inputMode="numeric"
                    maxLength={16}
                    className="absolute inset-0 w-full bg-transparent text-transparent caret-[#53738a] outline-none"
                  />

                </div>
              </div>

              <div className="absolute right-[148px] top-[18px] flex items-center">
                <div className="h-[28px] w-[28px] rounded-full bg-[#e51b35]" />

                <div className="-ml-[9px] h-[28px] w-[28px] rounded-full bg-[#f5a900]" />
              </div>

              <div className="absolute bottom-4 left-5">
                <p className="text-[11px] uppercase text-[#a5b3bc]">
                  Срок
                </p>

                <p className="text-[11px] uppercase text-[#a5b3bc]">
                  действия
                </p>
              </div>

              <div className="absolute bottom-5 left-[88px]">
                <input
                  type="text"
                  value={expiry}
                  onChange={handleExpiry}
                  placeholder="xx / xx"
                  inputMode="numeric"
                  maxLength={5}
                  className="w-[68px] rounded-[4px] border border-[#d7e1e6] bg-transparent px-2 py-1 text-center text-[13px] text-[#53738a] outline-none placeholder:text-[#53738a]"
                />
              </div>

              <div className="absolute right-0 top-0 h-full w-[123px] bg-[#2d2d2d]">

                <div className="absolute left-0 top-[47px] w-full text-center">

                  <p className="text-[11px] text-[#b9bec2]">
                    CVC/CVV
                  </p>

                  <input
                    type="text"
                    value={cvv}
                    onChange={handleCvv}
                    inputMode="numeric"
                    maxLength={3}
                    className="mt-2 h-[36px] w-[100px] rounded-[5px] border-2 border-[#f0b900] bg-white px-2 text-center text-[#333] outline-none"
                  />

                </div>

              </div>

            </div>

            <label className="mt-6 flex cursor-pointer items-center gap-3">

              <input
                type="checkbox"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                className="h-[18px] w-[18px]"
              />

              <span className="text-[16px] text-[#53738a]">
                Сохранить карту для будущих покупок
              </span>

            </label>

          </div>

          <div className="w-full md:w-[300px]">

            <div className="rounded-[12px] bg-[#f7f8f9] p-6">

              <div className="mb-5 flex items-center justify-between">

                <span className="text-[15px] text-[#718899]">
                  Заказ
                </span>

                <span className="font-medium text-[#263f52]">
                  № 12548
                </span>

              </div>

              <div className="mb-5 border-t border-[#e1e5e8]" />

              <div className="flex items-center justify-between">

                <span className="text-[15px] text-[#718899]">
                  К оплате
                </span>

                <span className="text-[22px] font-semibold text-[#263f52]">
                  0 ₽
                </span>

              </div>

              <p className="mt-4 text-center text-[14px] text-[#53738a]">
                13:57 на оплату заказа
              </p>

              <button
                onClick={handlePay}
                className="mt-6 w-full rounded-[8px] bg-[#54b8e8] py-3 text-[16px] font-medium text-white transition hover:bg-[#3da9dc]"
              >
                Оплатить
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Pay;