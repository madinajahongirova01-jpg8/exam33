import koko1 from '../assets/koko1.png';

const orders = [
  { id: 5454647, status: 'Получен', color: 'text-green-500', dot: 'bg-green-500' },
  { id: 5454647, status: 'Отменен', color: 'text-red-500', dot: 'bg-red-500' },
  { id: 5454647, status: 'В пути', color: 'text-sky-400', dot: 'bg-sky-400' },
];

const Orders = () => {
  return (
      <div className="max-w-6xl mx-auto px-10 py-10">
      <h1 className="text-3xl font-bold text-slate-700 mb-8">Мои заказы</h1>

      <div className="grid grid-cols-2 gap-6">
        {orders.map((order, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl p-6">
            <p className="text-slate-500 mb-2">Заказ №{order.id}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 rounded-full ${order.dot}`}></span>
              <span className={`font-medium ${order.color}`}>{order.status}</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img src={koko1} alt="" className="w-16 h-16 object-contain" />
              <div>
                <p className="text-sm text-slate-700 max-w-xs">
                  Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING
                </p>
                <p className="text-xs text-slate-400 mt-1">1 шт.</p>
              </div>
            </div>

            <div className="text-sm space-y-2">
              <p className="font-semibold text-slate-700">Дата оформления</p>
              <p className="text-slate-500">21.05.2020</p>
              <p className="font-semibold text-slate-700">Способ оплаты</p>
              <p className="text-slate-500">Картой онлайн 152 000 ₽</p>
              <p className="font-semibold text-slate-700">Адрес доставки</p>
              <p className="text-slate-500">Москва, ул. Московская 25-45</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;