const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";

  displayProduct(product, quantity);
  saveProductsToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const productList = document.getElementById("products-container");
  const li = document.createElement("li");
  li.innerHTML = `${product}: ${quantity} `;
  productList.appendChild(li);
};

const getProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem("cart");
  let cart = {};
  if (storedProducts) {
    cart = JSON.parse(storedProducts);
    return cart;
  }
  return cart;
};

const saveProductsToLocalStorage = (product, quantity) => {
  const cart = getProductsFromLocalStorage();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  console.log(cartStringified);
  localStorage.setItem("cart", cartStringified);
};

const displayFromLocalStorage = (product, quantity) => {
  const savedCart = getProductsFromLocalStorage();
  for (let product in savedCart) {
    const quantity = savedCart[product];
    displayProduct(product, quantity);
  }
};
displayFromLocalStorage();
