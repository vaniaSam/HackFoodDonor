function renderCartPage() {
    const cartHTML = `
      <h2>Your Cart</h2>
      <ul id="cart-list"></ul>
      <button onclick="checkout()">Checkout</button>
    `;
    document.getElementById('app').innerHTML = cartHTML;
  
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
  
    cartItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.foodName} - ${item.quantity} units`;
      cartList.appendChild(listItem);
    });
  }
  
  function checkout() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
  
    // Update the food items based on the items in the cart
    cartItems.forEach((cartItem) => {
      const foodItem = foodItems.find(item => item.foodName === cartItem.foodName);
      if (foodItem) {
        // Decrease the quantity of the food item based on cart quantity
        foodItem.quantity -= cartItem.quantity;
        
        // Remove the item from foodItems if quantity reaches zero
        if (foodItem.quantity <= 0) {
          foodItems = foodItems.filter(item => item.foodName !== cartItem.foodName);
        }
      }
    });
  
    // Save the updated food list to localStorage
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
  
    // Clear the cart after checkout
    localStorage.removeItem('cartItems');
  
    alert('Checkout successful! Food items have been reserved for you.');
    navigateTo('/food-list');
  }
  