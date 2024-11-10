// Placeholder for Firebase login function
/*document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Firebase login function to be implemented by the backend team
    // signInWithEmailAndPassword(auth, email, password)
    console.log("Logging in:", email);
    document.getElementById('login-message').innerText = "Login successful!";
  }); */
function renderLoginPage() {
    const loginHTML = `
      <form id="login-form">
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" id="login-email" required>
        <label>Password</label>
        <input type="password" id="login-password" required>
        <button type="submit">Login</button>
      </form>
      <div id="login-message"></div>
    `;
    document.getElementById('app').innerHTML = loginHTML;
  
    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
  
      if (localStorage.getItem(email) === password) {
        document.getElementById('login-message').innerText = "Login successful!";
        navigateTo('/receiver');
      } else {
        document.getElementById('login-message').innerText = "Invalid credentials.";
      }
    });
  }
  
  
