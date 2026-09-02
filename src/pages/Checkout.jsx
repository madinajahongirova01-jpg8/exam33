import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [city, setCity] = useState('Москва');
  const [deliveryMethod, setDeliveryMethod] = useState('transport');
  const [transportCompany, setTransportCompany] = useState('cdek');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const deliveryOptions = [
    {
      id: 'transport',
      title: 'Транспортной компанией',
      desc: 'СДЕК, Деловые линии, Мега Транс, TRADO',
      price: 'Цена зависит от выбора ТК',
    },
    {
      id: 'post',
      title: 'Почтой',
      desc: 'В ближайшее отделение почты России',
      price: 'Бесплатно',
    },
    {
      id: 'pickup',
      title: 'Самовывоз',
      desc: 'В пункте выдачи',
      price: 'Бесплатно',
    },
  ];

  const transportCompanies = ['СДЕК', 'Деловые линии', 'Мега Транс', 'TRADO'];

  const deliveryPrice = deliveryMethod === 'transport' ? 120 : 0;
  const goodsCount = cart.reduce((sum, item) => sum + item.cnt, 0);
  const goodsTotal = cart.reduce((sum, item) => sum + item.price * item.cnt, 0);
  const discount = 0;
  const total = goodsTotal + deliveryPrice - discount;

  return (
    <div className="max-w-[1100px] mx-auto px-[16px] sm:px-[24px] md:px-[40px] py-[20px] md:py-[30px]">

      <div className="flex flex-wrap items-center gap-[8px] text-[#7FC9F0] text-[12px] sm:text-[13px] mb-[16px] md:mb-[20px]">
        <span>Корзина</span>
        <span className="text-[#B7C6D0]">›</span>
        <span>Оформление заказа</span>
        <span className="text-[#B7C6D0]">›</span>
        <span className="text-[#B7C6D0]">Оплата</span>
      </div>

      <h1 className="custom text-[#446B80] text-[26px] sm:text-[32px] md:text-[36px] font-medium mb-[24px] md:mb-[40px]">
        Оформление заказа
      </h1>

      <div className="flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-start">

        <div className="w-full flex-1 flex flex-col gap-[28px] md:gap-[40px]">

          <div className="flex flex-col gap-[16px]">
            <p className="text-[#446B80] text-[16px] sm:text-[18px] font-semibold">Состав заказа</p>

            {cart.length === 0 ? (
              <p className="text-[#B7C6D0] text-[14px]">Корзина пуста</p>
            ) : (
              <div className="flex flex-col gap-[16px]">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-[16px]">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-contain shrink-0"
                    />
                    <div className="flex flex-col gap-[4px] min-w-0">
                      <p className="text-[#446B80] text-[14px] max-w-full sm:max-w-[400px] break-words">
                        {item.title || item.description}
                      </p>
                      <p className="text-[#B7C6D0] text-[13px]">{item.cnt} шт.</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="text-[#446B80] text-[16px] sm:text-[18px] font-semibold">Город получателя</p>

            <div className="flex flex-col gap-[6px] w-full sm:max-w-[350px]">
              <label className="text-[#B7C6D0] text-[12px]">Населенный пункт</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-[#DCE7EF] rounded-[8px] px-[16px] py-[12px] text-[#446B80] text-[14px] outline-none focus:border-[#7FC9F0] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="text-[#446B80] text-[16px] sm:text-[18px] font-semibold">Способ получения</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px] sm:gap-[16px]">
              {deliveryOptions.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setDeliveryMethod(opt.id)}
                  className={`rounded-[12px] p-[16px] sm:p-[18px] flex flex-col gap-[8px] cursor-pointer border transition-colors ${
                    deliveryMethod === opt.id
                      ? "border-[#7FC9F0] bg-[#F5FBFF]"
                      : "border-[#EAEAEA]"
                  }`}
                >
                  <p className="text-[#446B80] text-[14px] font-medium">{opt.title}</p>
                  <p className="text-[#B7C6D0] text-[12px] leading-snug">{opt.desc}</p>
                  <p className="text-[#7FC9F0] text-[12px]">{opt.price}</p>
                </div>
              ))}
            </div>
          </div>

          {deliveryMethod === 'transport' && (
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#446B80] text-[16px] sm:text-[18px] font-semibold">Выбор транспортной компании</p>

              <div className="flex gap-[10px] sm:gap-[12px] flex-wrap">
                {transportCompanies.map((company) => (
                  <button
                    key={company}
                    onClick={() => setTransportCompany(company)}
                    className={`px-[14px] sm:px-[18px] py-[8px] rounded-full text-[12px] sm:text-[13px] border transition-colors ${
                      transportCompany === company
                        ? "bg-[#7FC9F0] text-white border-[#7FC9F0]"
                        : "border-[#DCE7EF] text-[#446B80]"
                    }`}
                  >
                    {company}
                  </button>
                ))}
              </div>

              <p className="text-[#446B80] text-[14px]">
                Стоимость доставки: <span className="font-semibold">{deliveryPrice} ₽</span>
              </p>

              <div className="flex flex-col gap-[2px]">
                <span className="text-[#7FC9F0] text-[13px] cursor-pointer hover:underline">
                  Выбрать пункт выдачи заказа
                </span>
                <span className="text-[#7FC9F0] text-[13px]">
                  СДЕК, ул. Набережная 11-12
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-[16px]">
            <p className="text-[#446B80] text-[16px] sm:text-[18px] font-semibold">Адрес получателя</p>

            <div className="flex flex-col gap-[6px] w-full sm:max-w-[500px]">
              <input
                type="text"
                placeholder="Фамилия и имя по паспорту*"
                className="border border-[#DCE7EF] rounded-[8px] px-[16px] py-[12px] text-[#446B80] text-[14px] outline-none focus:border-[#7FC9F0] w-full"
              />
              <p className="text-[#B7C6D0] text-[12px]">Это имеет потребуется при получении заказа</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-[16px] w-full sm:max-w-[500px]">
              <input
                type="email"
                placeholder="Электронная почта"
                className="flex-1 border border-[#DCE7EF] rounded-[8px] px-[16px] py-[12px] text-[#446B80] text-[14px] outline-none focus:border-[#7FC9F0] w-full"
              />
              <div className="flex-1 flex flex-col gap-[6px]">
                <input
                  type="tel"
                  placeholder="Телефон*"
                  className="border border-[#DCE7EF] rounded-[8px] px-[16px] py-[12px] text-[#446B80] text-[14px] outline-none focus:border-[#7FC9F0] w-full"
                />
                <p className="text-[#B7C6D0] text-[11px] leading-snug">
                  На телефон отправляется оповещение о статусе заказа и о его получении
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="text-[#446B80] text-[16px] sm:text-[18px] font-semibold">Способ оплаты</p>

            <div className="flex flex-col gap-[12px]">
              {[
                { id: 'card', label: 'Картой онлайн', disabled: false },
                { id: 'courier', label: 'Наличными курьеру', disabled: true },
                { id: 'paypal', label: 'Онлайн-платежом PayPal', disabled: false },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-[10px] cursor-pointer ${
                    opt.disabled ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    disabled={opt.disabled}
                    checked={paymentMethod === opt.id}
                    onChange={() => setPaymentMethod(opt.id)}
                    className="accent-[#7FC9F0] w-[16px] h-[16px] shrink-0"
                  />
                  <span className="text-[#446B80] text-[14px]">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="text-[#446B80] text-[16px] sm:text-[18px] font-semibold">Дополнительно</p>

            <textarea
              placeholder="Комментарий к заказу"
              rows={4}
              className="border border-[#DCE7EF] rounded-[8px] px-[16px] py-[12px] text-[#446B80] text-[14px] outline-none resize-none focus:border-[#7FC9F0] w-full"
            />

            <label className="flex items-center gap-[10px] cursor-pointer">
              <input type="checkbox" className="accent-[#7FC9F0] w-[16px] h-[16px] shrink-0" />
              <span className="text-[#446B80] text-[13px]">Сообщить мне об акциях и скидках</span>
            </label>
          </div>

          <div className="flex flex-col gap-[10px]">
            <button
              onClick={() => navigate("/pay")}
              className="bg-[#7FC9F0] text-white text-[15px] font-medium rounded-[10px] py-[14px] w-full"
            >
              Перейти к оплате
            </button>
            <p className="text-[#B7C6D0] text-[11px]">
              Нажимая кнопку «Перейти к оплате», Вы соглашаетесь с{" "}
              <span className="text-[#7FC9F0] underline cursor-pointer">пользовательским соглашением</span>{" "}
              и условиями{" "}
              <span className="text-[#7FC9F0] underline cursor-pointer">доставки</span>
            </p>
          </div>

        </div>

        <div className="bg-white shadow-lg rounded-[16px] p-[20px] sm:p-[25px] w-full md:w-[280px] shrink-0 flex flex-col gap-[16px] md:sticky md:top-[30px]">

          <div className="flex justify-between items-center">
            <span className="text-[#446B80] text-[15px] font-medium">Ваш заказ</span>
            <span
              className="text-[#7FC9F0] text-[13px] cursor-pointer hover:underline"
              onClick={() => navigate("/cart")}
            >
              Изменить
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <input
              type="text"
              placeholder="Промокод"
              className="border border-[#DCE7EF] rounded-full px-[16px] py-[8px] text-[13px] text-[#446B80] flex-1 outline-none min-w-0"
            />
          </div>

          <div className="flex flex-col gap-[10px] pt-[10px] border-t border-[#EAEAEA]">
            <div className="flex justify-between text-[#446B80] text-[14px]">
              <span>Количество ({goodsCount})</span>
              <span>{goodsTotal.toLocaleString()} ₽</span>
            </div>

            <div className="flex justify-between text-[#446B80] text-[14px]">
              <span>Доставка</span>
              <span>{deliveryPrice} ₽</span>
            </div>

            <div className="flex justify-between text-[#446B80] text-[14px]">
              <span>Скидка</span>
              <span>{discount} ₽</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-[10px] border-t border-[#EAEAEA]">
            <span className="text-[#446B80] text-[16px] font-medium">Итого</span>
            <span className="text-[#446B80] text-[20px] font-semibold">
              {total.toLocaleString()} ₽
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}