import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router";
import { updateCartItemCount } from "../CartLogic";

export default function AddedToCartToast() {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleAdded = (e) => {
      setProduct(e.detail);
      setQty(e.detail.cnt);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 30000);
    };

    window.addEventListener("productAdded", handleAdded);

    return () => {
      window.removeEventListener("productAdded", handleAdded);
    };
  }, []);

  if (!product) return null;

  const changeQty = (num) => {
    const newQty = Math.max(1, qty + num);
    setQty(newQty);
    updateCartItemCount(product.id, newQty);
  };

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white shadow-xl rounded-2xl p-5 w-[380px] flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-[#446B80] text-[16px]">
            Товар добавлен в корзину
          </p>

          <CloseIcon
            onClick={() => setVisible(false)}
            sx={{ color: "#446B80", cursor: "pointer" }}
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src={product.img}
            alt=""
            className="w-[60px] h-[60px] object-contain"
          />

          <div className="flex-1">
            <p className="text-[#446B80] text-[14px]">
              {product.text}
            </p>

            <p className="text-[#7FC9F0] text-[16px]">
              {product.price} ₽
            </p>
          </div>

          <div className="flex items-center border border-[#446B80] rounded-full">
            <button onClick={() => changeQty(-1)} className="p-2">
              <RemoveIcon sx={{ fontSize: 16, color: "#446B80" }} />
            </button>

            <span className="px-2 text-[#446B80]">
              {qty}
            </span>

            <button onClick={() => changeQty(1)} className="p-2">
              <AddIcon sx={{ fontSize: 16, color: "#446B80" }} />
            </button>
          </div>
        </div>

        <Link to="/cart">
          <button
            onClick={() => setVisible(false)}
            className="w-full border border-[#446B80] rounded-full py-2 text-[#446B80] hover:bg-[#22354007]"
          >
            Перейти в корзину
          </button>
        </Link>
      </div>
    </div>
  );
}