import { useState } from "react";

import img1 from  "../assets/koko1.png";
import img2 from  "../assets/koko1.png";
import img3 from  "../assets/koko1.png";
import img4 from  "../assets/koko1.png";
import img5 from  "../assets/koko1.png";
import img6 from  "../assets/koko1.png";
import img7 from  "../assets/koko1.png";
import img8 from  "../assets/koko1.png";
import img9 from  "../assets/koko1.png";
import img10 from "../assets/koko1.png";
import img11 from "../assets/koko1.png";
import img12 from "../assets/koko1.png";
import { Card2 } from "../components/Cards";


const products = [
  {
    id: 1,
    title: "Кроватка Riko Basic, Польша",
    price: 52000,
    img: img1,
    brand: "Антел Россия",
    color: "Белый",
    material: "Бук",
    pendulum: "Универсальный",
    box: "Есть",
  },
  {
    id: 2,
    title: "Коляска Riko Basic, Польша",
    price: 52000,
    img: img2,
    brand: "Brio",
    color: "Венге",
    material: "МДФ",
    pendulum: "Поперечный",
    box: "Нет",
  },
  {
    id: 3,
    title: "Кроватка Riko Basic, Польша",
    price: 52000,
    img: img3,
    brand: "Daka baby",
    color: "Белый",
    material: "Береза",
    pendulum: "Продольный",
    box: "Есть",
  },
  {
    id: 4,
    title: "Коляска Riko Basic, Польша",
    price: 52000,
    img: img4,
    brand: "Feretti",
    color: "Слоновая кость",
    material: "Бук",
    pendulum: "Универсальный",
    box: "Нет",
  },
  {
    id: 5,
    title: "Коляска Riko Basic, Польша",
    price: 52000,
    img: img5,
    brand: "Lucanto",
    color: "Ваниль",
    material: "Сосна",
    pendulum: "Поперечный",
    box: "Есть",
  },
  {
    id: 6,
    title: "Коляска Riko Basic, Польша",
    price: 52000,
    img: img6,
    brand: "Ital baby",
    color: "Натуральный",
    material: "Дуб",
    pendulum: "Продольный",
    box: "Нет",
  },
  {
    id: 7,
    title: "Кроватка Riko Basic, Польша",
    price: 52000,
    img: img7,
    brand: "Micuna",
    color: "Белый",
    material: "МДФ",
    pendulum: "Универсальный",
    box: "Есть",
  },
  {
    id: 8,
    title: "Кроватка Riko Basic, Польша",
    price: 52000,
    img: img8,
    brand: "Mr. Sandman",
    color: "Орех",
    material: "Береза",
    pendulum: "Поперечный",
    box: "Нет",
  },
  {
    id: 9,
    title: "Коляска Riko Basic, Польша",
    price: 52000,
    img: img9,
    brand: "Brio",
    color: "Шоколад",
    material: "Сосна",
    pendulum: "Продольный",
    box: "Есть",
  },
  {
    id: 10,
    title: "Коляска Riko Basic, Польша",
    price: 52000,
    img: img10,
    brand: "Feretti",
    color: "Вишня",
    material: "Дуб",
    pendulum: "Универсальный",
    box: "Нет",
  },
  {
    id: 11,
    title: "Коляска Riko Basic, Польша",
    price: 52000,
    img: img11,
    brand: "Lucanto",
    color: "Белый",
    material: "МДФ",
    pendulum: "Поперечный",
    box: "Есть",
  },
  {
    id: 12,
    title: "Кроватка Riko Basic, Польша",
    price: 52000,
    img: img12,
    brand: "Антел Россия",
    color: "Натуральный",
    material: "Бук",
    pendulum: "Продольный",
    box: "Нет",
  },
];


function Krovatki() {
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [material, setMaterial] = useState([]);
  const [pendulum, setPendulum] = useState([]);
  const [box, setBox] = useState([]);
  const [showCount, setShowCount] = useState(6);

  const changeFilter = (value, setFilter) => {
    setFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const filteredProducts = products
    .filter((item) => {
      if (!price) return true;

      if (price === "8000-30000") {
        return item.price >= 8000 && item.price <= 30000;
      }

      if (price === "30000-60000") {
        return item.price > 30000 && item.price <= 60000;
      }

      if (price === "60000") {
        return item.price > 60000;
      }

      return true;
    })
    .filter((item) => !brand.length || brand.includes(item.brand))
    .filter((item) => !color.length || color.includes(item.color))
    .filter((item) => !material.length || material.includes(item.material))
    .filter((item) => !pendulum.length || pendulum.includes(item.pendulum))
    .filter((item) => !box.length || box.includes(item.box));

  const visibleProducts = filteredProducts.slice(0, showCount);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1180px] px-4 py-8">

        <div className="mb-8">
          <p className="text-[13px] text-[#9aaab4]">
            Детские кровати → Кроватки
          </p>

          <h1 className="mt-3 text-[32px] font-medium text-[#446b80]">
            Кроватки
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">

          <aside className="w-full shrink-0 lg:w-[220px]">

            <h3 className="mb-4 text-[17px] text-[#446b80]">
              Цена, ₽
            </h3>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="от 8000"
                className="w-1/2 rounded-[6px] border border-[#dce5e9] px-3 py-2 text-[12px] outline-none"
                onChange={(e) => {
                  if (e.target.value) {
                    setPrice("8000-30000");
                  } else {
                    setPrice("");
                  }
                }}
              />

              <input
                type="text"
                placeholder="до 999900"
                className="w-1/2 rounded-[6px] border border-[#dce5e9] px-3 py-2 text-[12px] outline-none"
              />
            </div>

            <FilterBlock title="Бренд">
              {[
                "Антел Россия",
                "Brio",
                "Daka baby",
                "Feretti",
                "Lucanto",
                "Ital baby",
                "Micuna",
                "Mr. Sandman",
              ].map((item) => (
                <CheckItem
                  key={item}
                  text={item}
                  checked={brand.includes(item)}
                  onChange={() => changeFilter(item, setBrand)}
                />
              ))}
            </FilterBlock>

            <FilterBlock title="Цвет">
              {[
                "Слоновая кость",
                "Белый",
                "Ваниль",
                "Венге",
                "Шоколад",
                "Орех",
                "Вишня",
                "Натуральный",
              ].map((item) => (
                <CheckItem
                  key={item}
                  text={item}
                  checked={color.includes(item)}
                  onChange={() => changeFilter(item, setColor)}
                />
              ))}
            </FilterBlock>

            <FilterBlock title="Материал">
              {[
                "Бук",
                "МДФ",
                "Береза",
                "ЛДСП",
                "Сосна",
                "Дуб",
                "Ольха",
                "Металл",
              ].map((item) => (
                <CheckItem
                  key={item}
                  text={item}
                  checked={material.includes(item)}
                  onChange={() => changeFilter(item, setMaterial)}
                />
              ))}
            </FilterBlock>

            <FilterBlock title="Маятник">
              {[
                "Универсальный",
                "Поперечный",
                "Продольный",
              ].map((item) => (
                <CheckItem
                  key={item}
                  text={item}
                  checked={pendulum.includes(item)}
                  onChange={() => changeFilter(item, setPendulum)}
                />
              ))}
            </FilterBlock>

            <FilterBlock title="Ящик">
              {["Есть", "Нет"].map((item) => (
                <CheckItem
                  key={item}
                  text={item}
                  checked={box.includes(item)}
                  onChange={() => changeFilter(item, setBox)}
                />
              ))}
            </FilterBlock>

          </aside>

          <main className="flex-1">

            <div className="mb-5 flex items-center justify-between border-b border-[#edf1f3] pb-4">
              <span className="text-[13px] text-[#718899]">
                Сортировать по: популярности ↓
              </span>

              <span className="text-[13px] text-[#718899]">
                Найдено: {filteredProducts.length}
              </span>
            </div>

            {visibleProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <Card2
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.img}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-[#718899]">
                По выбранным фильтрам товары не найдены
              </div>
            )}

            {showCount < filteredProducts.length && (
              <button
                onClick={() => setShowCount((prev) => prev + 6)}
                className="mt-8 w-full rounded-[7px] border border-[#7fc9f0] py-3 text-[13px] text-[#53738a] transition hover:bg-[#7fc9f0] hover:text-white"
              >
                Показать еще
              </button>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}


function FilterBlock({ title, children }) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-[17px] text-[#446b80]">
        {title}
      </h3>

      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}


function CheckItem({ text, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[12px] text-[#718899]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-[#7fc9f0]"
      />
      {text}
    </label>
  );
}


export default Krovatki;