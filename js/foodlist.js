function renderFoodListPage() {
    const foodListHTML = `
      <h2>Available Food Items</h2>
      <ul id="food-list"></ul>
      <button onclick="navigateTo('/cart')">Go to Cart</button>
    `;
    document.getElementById('app').innerHTML = foodListHTML;
  
    // Load food items from localStorage
    const foodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
  
    // Display each item
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';
    foodItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.foodName} - ${item.quantity} units - Expires: ${item.expirationDate}`;
      
      // Add a button to add this item to the cart
      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.onclick = () => addToCart(item, index);
      
      listItem.appendChild(addToCartButton);
      foodList.appendChild(listItem);
    });
  }
  
  function addToCart(item, index) {
    // Retrieve cart items from localStorage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if the item is already in the cart
    const existingCartItem = cartItems.find(cartItem => cartItem.foodName === item.foodName);
    
    if (existingCartItem) {
      // Increase the quantity if the item is already in the cart
      existingCartItem.quantity += 1;
    } else {
      // Add the item to the cart with an initial quantity of 1
      cartItems.push({ ...item, quantity: 1 });
    }
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  