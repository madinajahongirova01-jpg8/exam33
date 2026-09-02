export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let exist = cart.find(item => item.id === product.id);

  if (exist) {
    exist.cnt += 1;
  } else {
    cart.push({ ...product, cnt: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new Event("cartUpdate"));
  window.dispatchEvent(new CustomEvent("productAdded", {
    detail: exist ? exist : cart[cart.length - 1],
  }));
}

export function updateCartItemCount(id, cnt) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.cnt = Math.max(1, cnt);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdate"));
}