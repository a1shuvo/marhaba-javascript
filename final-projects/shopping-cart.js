let products = [
  { id: 1, name: "Smartphone", price: 200, stock: 10 },
  { id: 2, name: "Laptop", price: 800, stock: 5 },
  { id: 3, name: "Tablet", price: 150, stock: 7 },
  { id: 4, name: "Smartwatch", price: 120, stock: 15 },
  { id: 5, name: "Wireless Earbuds", price: 50, stock: 25 },
  { id: 6, name: "Bluetooth Speaker", price: 70, stock: 12 },
  { id: 7, name: "Monitor", price: 180, stock: 8 },
  { id: 8, name: "Keyboard", price: 40, stock: 30 },
  { id: 9, name: "Mouse", price: 25, stock: 35 },
  { id: 10, name: "Webcam", price: 60, stock: 10 },
];

let cart = [];
let orders = [];

function addToCart(id, quantity) {
  const product = products.find((product) => product.id === id);

  // Check if product available
  if (!product) {
    return "Product Not Found!";
  }

  // Check if product stock available
  if (product.stock >= quantity) {
    // Reduce product stock
    product.stock -= quantity;
    // Added to cart
    cart.push({
      id: product.id,
      quantity: quantity,
      price: product.price,
    });
    return `${product.name} added to cart. Quantity: ${quantity}`;
  } else {
    return `Only ${product.stock} units of ${product.name} available.`;
  }
}

function viewCart() {
  return cart.map((item) => item);
}

function placeOrder() {
  if (cart.length === 0) {
    return "Your cart is empty!";
  } else {
    // Create order object
    const order = {
      id: orders.length + 1,
      products: [...cart],
      totalPrice: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    };

    // Add order to orders array
    orders.push(order);

    // Empty cart array
    cart = [];

    // Return order placed
    return "Order placed!";
  }
}

console.log(addToCart(10, 3));
console.log(addToCart(1, 2));
console.log(viewCart());
console.log(placeOrder());