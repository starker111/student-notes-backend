document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Login successful!');
      window.location.href = '/index.html';  // ✅ Redirect to main page
    } else {
      errorMsg.textContent = data.message || 'Invalid username or password.';
    }
  } catch (err) {
    errorMsg.textContent = '❌ Server error. Please try again later.';
  }
});
