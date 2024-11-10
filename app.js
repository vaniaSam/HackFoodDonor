function renderPage(path) {
    const page = routes[path] || 'home';
    appDiv.innerHTML = '';
  
    switch (page) {
      case 'home':
        appDiv.innerHTML = `<h1>Welcome to the Home Page</h1>
          <button onclick="navigateTo('/register')">Register</button>
          <button onclick="navigateTo('/login')">Login</button>`;
        break;
      case 'register':
        renderRegisterPage();
        break;
      case 'login':
        renderLoginPage();
        break;
      case 'donor':
        renderDonorPage();
        break;
      case 'receiver':
        renderReceiverPage();
        break;
      case 'foodList':
        renderFoodListPage();
        break;
      case 'eligibility':
        renderEligibilityPage();
        break;
      case 'cart':
        renderCartPage();
        break;
      default:
        appDiv.innerHTML = `<h1>Page Not Found</h1>`;
        break;
    }
  }
  
