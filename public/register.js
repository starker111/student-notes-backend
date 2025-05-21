document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  try {
    const response = await fetch('https://student-notes-backend.onrender.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ Registration successful!');
      window.location.href = 'login.html';
    } else {
      errorMsg.textContent = data.message || 'Registration failed.';
    }
  } catch (err) {
    errorMsg.textContent = '❌ Server error. Try again later.';
  }
  const hashedPassword = await bcrypt.hash(password, 10);

});
