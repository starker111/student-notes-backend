// Wake up Render backend before registration
(async function wakeUpServer() {
  try {
    await fetch("https://student-notes-backend.onrender.com/");
    console.log("✅ Server wake-up request sent");
  } catch (error) {
    console.warn("⚠️ Wake-up failed:", error);
  }
})();

document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  try {
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
  } catch {
    errorMsg.textContent = '❌ Server error';
  }
});
