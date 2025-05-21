document.getElementById('registerForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Registration successful!');
      window.location.href = 'login.html'; // Redirect to login page
    } else {
      errorMsg.textContent = data.message || 'Registration failed.';
    }
  } catch (error) {
    errorMsg.textContent = '❌ Server error. Please try again later.';
  }
});