const cartIndex = document.querySelector("#cart-index");

document
  .querySelectorAll("#into-cart-btn button")
  .forEach((button) => button.addEventListener("click", addToCart));
function addToCart() {
  const button = event.target;
  const id = button.dataset.id;
  localStorage.setItem(id, []);
  cartIndex.innerHTML = localStorage.length;
}

// class Cart {
//   constructor() {
//     this.cart = JSON.parse(localStorage["cart"] || "{}");
//   }
// }

// function saveCart() {
//   localStorage["cart"] = JSON.stringify(cart);
// }

// saveCart();
