import blogData from "../blogData";
import Pag from "./Pagination";
import { useNavigate } from "react-router";

export default function Main() {
  const navigate = useNavigate();

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogData.map((item, index) => (
  <div
    key={`${item.id}-${index}`}
    className="bg-white rounded-[12px] overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300"
  >
            <img
              src={item.image}
              alt=""
              className="w-full h-[190px] object-cover"
            />

            <div className="p-4">
              <p className="text-[#446B80] text-[16px] font-medium">
                {item.name}
              </p>

              <p className="text-[#6F8FA0] text-[14px] mt-2 line-clamp-3">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => navigate(`/info/${item.id}`)}
                  className="border border-[#446B80] rounded-[8px] px-4 py-2 text-[#446B80] hover:bg-[#446B80] hover:text-white transition-all"
                >
                  Читать
                </button>

                <span className="text-[#90AAB8] text-[12px]">
                  25.05.2020
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Pag />
      </div>

    </section>
  );
}