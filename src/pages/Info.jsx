import { useParams } from "react-router";
import blogData from "../blogData";

import hangOuts from "../assets/left-quote 1.png";
import breakfast from "../assets/breakfast.png";

export default function Info() {
  const { id } = useParams();

  const user = blogData.find((item) => item.id === Number(id));

  if (!user) {
    return (
      <div className="text-center py-20 text-[#446B80]">
        😩😩😩😩😩😩
      </div>
    );
  }

  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 py-6">

      <p className="text-[#8AA5B3] text-[14px] mb-6">
        Главная › Блог › {user.name}
      </p>

      <img
        src={user.image}
        alt=""
        className="w-full h-[300px] sm:h-[500px] object-cover rounded-[12px]"
      />

      <h1 className="custom text-[#446B80] text-[40px] sm:text-[48px] mt-5">
        {user.name}
      </h1>

      <p className="text-[#8AA5B3] mt-1">
        25.05.2020
      </p>

      <p className="text-[#446B80] leading-[1.7] mt-5">
        {user.description}
      </p>

      <p className="text-[#446B80] leading-[1.7] mt-5">
        Постарайтесь включить в меню ежедневно зеленые салаты с
        растительным маслом и морскую рыбу. Важно начать прием
        препаратов фолиевой кислоты, йода и витамина Е.
      </p>

      <img
        src={breakfast}
        alt=""
        className="w-full h-[300px] sm:h-[500px] object-cover rounded-[12px] mt-6"
      />

      <div className="flex items-start gap-5 mt-6">
        <img
          src={hangOuts}
          alt=""
          className="w-[45px]"
        />

        <p className="text-[#446B80] leading-[1.7]">
          <span className="font-bold">
            В 1-м триместре беременности
          </span>{" "}
          рацион женщины существенно не отличается от ее меню
          до беременности, могут лишь поменяться вкусы беременной.
        </p>
      </div>

      <p className="text-[#446B80] leading-[1.7] mt-6">
        За время беременности организм должен получать достаточно
        железа, чтобы предотвратить анемию у матери и плода.
      </p>

      <p className="text-[#7FC9F0] mt-8 hover:underline cursor-pointer">
        Читать следующую статью ›
      </p>

    </section>
  );
}