function renderDonorPage() {
    const donorHTML = `
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
  }
  
  function addFoodItem(e) {
    e.preventDefault();
    // Code to handle adding the food item
  }
  