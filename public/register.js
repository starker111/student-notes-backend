document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  try {
    const response = await fetch('http://localhost:10000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    let data = {};
    try {
      data = await response.json(); // safely attempt to parse
    } catch (e) {
      console.warn('⚠️ Could not parse JSON:', e);
    }

    if (response.ok) {
      alert('✅ Registered successfully');
      window.location.href = '/login.html';
    } else {
      errorMsg.textContent = data.message || '❌ Registration failed.';
    }
  } catch (err) {
    console.error('❌ Error:', err);
    errorMsg.textContent = '❌ Server error. Try again later.';
  }
});
