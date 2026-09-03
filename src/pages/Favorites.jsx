import { Heart } from 'lucide-react';
import koko9 from '../assets/koko1.png';
import koko7 from '../assets/koko1.png';

const favorites = [
  { title: 'Коляска Riko Basic, Польша', price: '52 000', image: koko9 },
  { title: 'Постельное белье Forest Sky (3 предмета)', price: '2 000', image: koko7 },
];

const Favorites = () => {
  return (
    <div className="max-w-6xl mx-auto px-10 py-10">
      <h1 className="text-3xl font-bold text-slate-700 mb-8">Мое избранное</h1>

      <div className="grid grid-cols-4 gap-6">
        {favorites.map((item, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl p-6 text-center relative">
            <Heart size={20} className="absolute top-4 right-4 text-sky-400" fill="currentColor" />
            <img src={item.image} alt="" className="w-full h-40 object-contain mb-4" />
            <p className="text-sm text-slate-700 mb-2">{item.title}</p>
            <p className="text-sky-400 font-bold mb-4">{item.price} ₽</p>
            <button className="w-full bg-sky-400 text-white py-2 rounded-full text-sm">
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;