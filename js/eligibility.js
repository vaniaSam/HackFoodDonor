// Function to render the Eligibility page content
function renderEligibilityPage() {
    const eligibilityHTML = `
      <form id="eligibility-form">
        <label>Household Size</label>
        <input type="number" id="household-size" required>
        <label>Household Income</label>
        <input type="number" id="household-income" required>
        <button type="submit">Check Eligibility</button>
      </form>
      <div id="eligibility-message"></div>
    `;
    document.getElementById('app').innerHTML = eligibilityHTML;
    document.getElementById('eligibility-form').addEventListener('submit', checkEligibility);
  }
  
  // Define income thresholds for different household sizes
  const incomeThresholds = {
    1: 28863,
    2: 40818,
    3: 49992,
    4: 57726,
    5: 64540,
    6: 70700,
    7: 76364,
    8: 81637,
    9: 86589,
    10: 91273
  };
  
  // Function to handle eligibility check
  function checkEligibility(e) {
    e.preventDefault();
  
    const householdSize = parseInt(document.getElementById('household-size').value, 10);
    const householdIncome = parseInt(document.getElementById('household-income').value, 10);
  
    if (isNaN(householdSize) || isNaN(householdIncome) || householdSize <= 0 || householdIncome <= 0) {
      alert('Please enter valid positive numbers for household size and income.');
      return;
    }
  
    const incomeThreshold = incomeThresholds[householdSize];
    const eligibilityMessage = document.getElementById('eligibility-message');
  
    if (householdIncome <= incomeThreshold) {
      eligibilityMessage.textContent = "You are eligible to receive food donations.";
      window.location.href = '/food-list'; // Redirect to food-list page (replace with actual page logic)
    } else {
      showNotEligiblePopup();
    }
  }
  
  // Function to show a "not eligible" popup message
  function showNotEligiblePopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <div class="popup-content">
        <h3>Eligibility Check</h3>
        <p>Unfortunately, you are not eligible for food donations based on your income.</p>
        <button id="close-popup">Close</button>
      </div>
    `;
  
    document.body.appendChild(popup);
    document.getElementById('close-popup').addEventListener('click', () => popup.remove());
  }
  