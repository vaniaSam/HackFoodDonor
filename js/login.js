// Placeholder for Firebase login function
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Firebase login function to be implemented by the backend team
    // signInWithEmailAndPassword(auth, email, password)
    console.log("Logging in:", email);
    document.getElementById('login-message').innerText = "Login successful!";
  });
  