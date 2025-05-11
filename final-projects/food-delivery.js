const restaurants = [
  {
    id: 1,
    name: "Pizza Place",
    menu: [
      { name: "Pepperoni Pizza", price: 12 },
      //   { name: "Chicken Roast", price: 120 }
    ],
  },
  {
    id: 2,
    name: "Sushi House",
    menu: [{ name: "Salmon Sushi", price: 15 }],
  },
];

const orders = [];
const reviews = [];

// Discount in percentage
const discountCodes = {
  SAVE10: 10,
  WELCOME15: 15,
};

function getFoodPrice(restaurantName, foodName) {
  const restaurant = restaurants.find(
    (restaurant) => restaurant.name === restaurantName
  );
  if (!restaurant) {
    return `Restaurant "${restaurantName}" not found.`;
  }

  const food = restaurant.menu.find((food) => food.name === foodName);

  if (!food) {
    return `Food Item "${foodName}" not found.`;
  }
  return food.price;
}

function placeOrder(customer, restaurantName, foodItem, discountCode) {
  let foodPrice = getFoodPrice(restaurantName, foodItem);
  if (typeof foodPrice !== "number") {
    return foodPrice;
  }

  if (discountCode) {
    if (discountCodes[discountCode]) {
      const discount = discountCodes[discountCode];
      foodPrice = foodPrice - (foodPrice * discount) / 100;
    } else {
      return `Coupon code "${discountCode}" invalid!`;
    }
  }

  const newOrder = {
    id: orders.length + 1,
    customer: customer,
    restaurant: restaurantName,
    food: foodItem,
    price: parseFloat(foodPrice.toFixed(2)),
    status: "Pending",
  };

  orders.push(newOrder);
  return `Your order is successfully placed! Order Id: ${newOrder.id}`;
}

function totalSell(restaurantName) {
  const restaurantOrders = orders.filter(
    (order) => order.restaurant === restaurantName
  );
  const totalAmount = restaurantOrders.reduce(
    (total, order) => total + order.price,
    0
  );
  return totalAmount;
}

function submitReview(orderId, restaurant, ratings, review) {
  const order = orders.find(
    (order) => order.id === orderId && order.restaurant === restaurant
  );
  if (!order) {
    return `Please don't give any fake review without eating!`;
  }
  if (ratings < 0 || ratings > 5) {
    return `Ratings must be a number between 0 to 5`;
  }
  if (review.length <= 20) {
    return `Review must be with more than 20 characters!`;
  }
  const newReview = {
    id: reviews.length + 1,
    orderId,
    restaurant,
    foodItem: order.food,
    customer: order.customer,
    ratings,
    review,
  };

  reviews.push(newReview);
  return `Review added successfully! Your review id: ${newReview.id}`;
}


// ✅ Place valid orders
console.log(placeOrder("Asha", "Pizza Place", "Pepperoni Pizza", "SAVE10"));
console.log(placeOrder("Nabil", "Sushi House", "Salmon Sushi", "WELCOME15"));

// ❌ Invalid restaurant or food
console.log(placeOrder("Jamal", "Burger Point", "Cheese Burger")); // Invalid restaurant
console.log(placeOrder("Rina", "Pizza Place", "Chicken Roast"));   // Invalid food

// ❌ Invalid discount code
console.log(placeOrder("Mina", "Sushi House", "Salmon Sushi", "HELLO50"));

// ✅ View total sell
console.log("Total Sell (Pizza Place):", totalSell("Pizza Place"));
console.log("Total Sell (Sushi House):", totalSell("Sushi House"));

// ✅ Submit valid review
console.log(
  submitReview(1, "Pizza Place", 4.5, "The pizza was delicious and hot, I loved it!")
);

// ❌ Submit review with invalid rating
console.log(
  submitReview(2, "Sushi House", 6, "Amazing sushi with fresh ingredients!")
);

// ❌ Submit review with short comment
console.log(
  submitReview(2, "Sushi House", 4, "Nice!") // Too short
);

// ❌ Fake review (invalid order or mismatched restaurant)
console.log(
  submitReview(999, "Pizza Place", 4, "Good food but a bit salty.")
);
