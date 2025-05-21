document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Registration successful! Redirecting to login...');
      window.location.href = '/login.html';  // ✅ works if served from Express
    } else {
      document.getElementById('errorMsg').textContent = data.message || 'Registration failed';
    }
  } catch (err) {
    document.getElementById('errorMsg').textContent = 'Server error';
  }
});
