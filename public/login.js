document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ Login successful!');
      window.location.href = 'index.html';
    } else {
      errorMsg.textContent = data.message;
    }
  } catch {
    errorMsg.textContent = '❌ Server error';
  }
});
