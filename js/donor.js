function renderDonorPage() {
  const donorHTML = `
    <h2>Add Food Donation</h2>
    <form id="donor-form">
      <label>Food Name</label>
      <input type="text" id="food-name" required>
      <label>Quantity</label>
      <input type="number" id="quantity" required>
      <label>Expiration Date</label>
      <input type="date" id="expiration-date" required>
      <button type="submit">Add Food</button>
    </form>
    <ul id="food-list"></ul>
  `;
  document.getElementById('app').innerHTML = donorHTML;
  document.getElementById('donor-form').addEventListener('submit', addFoodItem);

  // Placeholder for displaying food items retrieved from Firebase
  displayFoodList();
}

function addFoodItem(e) {
  e.preventDefault();

  // Get values from form inputs
  const foodName = document.getElementById('food-name').value;
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const expirationDate = document.getElementById('expiration-date').value;

  // Create a new food item object
  const newItem = { foodName, quantity, expirationDate };

  // Placeholder where Firebase function to save the new item would go
  // Example: firebaseAddItem(newItem);

  // Clear the form for the next entry
  document.getElementById('donor-form').reset();

  // Update the displayed food list (assuming Firebase handles fetching and displaying)
  displayFoodList();
}

function displayFoodList() {
  const foodListElement = document.getElementById('food-list');
  foodListElement.innerHTML = ''; // Clear the current list

  // Placeholder for Firebase call to retrieve food items
  // Example: firebaseFetchItems().then((foodItems) => {
  const foodItems = []; // This would be replaced with data from Firebase

  // Display each item in the list (from Firebase data)
  foodItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.foodName} - Quantity: ${item.quantity} - Expires: ${item.expirationDate}`;
    foodListElement.appendChild(listItem);
  });
}
