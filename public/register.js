document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  try {
    // 1. Wake up Render before API call
    await fetch("https://student-notes-backend.onrender.com/");

    // 2. Now send actual registration request
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ Registered successfully!');
      window.location.href = 'login.html';
    } else {
      errorMsg.textContent = data.message;
    }
  } catch (err) {
    errorMsg.textContent = '❌ Server error. Try again later.';
  }
});
