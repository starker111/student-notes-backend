document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Login successful! Redirecting to notes page...');
      localStorage.setItem('token', data.token || 'demo'); // optional if JWT is returned
      window.location.href = '/index.html';  // ✅ works if hosted from Express
    } else {
      document.getElementById('errorMsg').textContent = data.message || 'Invalid credentials';
    }
  } catch (err) {
    document.getElementById('errorMsg').textContent = 'Server error';
  }
});
