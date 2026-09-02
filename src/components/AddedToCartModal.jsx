import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router';
import { updateCartItemCount } from '../CartLogic';

export default function AddedToCartToast() {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleAdded(e) {
      setProduct(e.detail);
      setQty(e.detail.cnt);
      setVisible(true);

      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => setVisible(false), 5000);
    }
    window.addEventListener('productAdded', handleAdded);
    return () => window.removeEventListener('productAdded', handleAdded);
  }, []);

  if (!product) return null;

  const changeQty = (delta) => {
    const next = Math.max(1, qty + delta);
    setQty(next);
    updateCartItemCount(product.id, next);
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => setVisible(false), 5000);
  };

  return (
    <div
      className={`fixed bottom-[20px] left-[20px] z-50 transition-all duration-500 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0 pointer-events-none"}`}
    >
      <div className="bg-white shadow-xl rounded-[16px] p-[20px] w-[380px] flex flex-col gap-[15px]">
        <div className="flex justify-between items-start">
          <p className="custom text-[#446B80] text-[16px]">Товар добавлен в корзину</p>
          <CloseIcon
            sx={{ color: "#446B80", cursor: "pointer", fontSize: 20 }}
            onClick={() => setVisible(false)}
          />
        </div>

        <div className="flex items-center gap-[15px]">
          <img src={product.img} alt="" className="w-[60px] h-[60px] object-contain shrink-0" />

          <div className="flex flex-col gap-[6px] flex-1">
            <p className="text-[#446B80] text-[14px] leading-snug line-clamp-2">
              {product.text}
            </p>
            <p className="text-[#7FC9F0] text-[16px] font-medium">{product.price} ₽</p>
          </div>

          <div className="flex items-center border border-[#446B80] rounded-full shrink-0">
            <button onClick={() => changeQty(-1)} className="p-[6px]">
              <RemoveIcon sx={{ fontSize: 16, color: "#446B80" }} />
            </button>
            <span className="px-[8px] text-[14px] text-[#446B80]">{qty}</span>
            <button onClick={() => changeQty(1)} className="p-[6px]">
              <AddIcon sx={{ fontSize: 16, color: "#446B80" }} />
            </button>
          </div>
        </div>

        <Link to="/cart">
          <button
            onClick={() => setVisible(false)}
            className="w-full border border-[#446B80] rounded-full py-[10px] text-[#446B80] text-[14px] font-medium hover:bg-[#22354007] transition-colors"
          >
            Перейти в корзину
          </button>
        </Link>
      </div>
    </div>
  );
}