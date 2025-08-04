document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    // redirect or proceed further
  } else {
    document.getElementById('errorMsg').textContent = 'Invalid username or password!';
  }
});
