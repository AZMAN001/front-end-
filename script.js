fetch('https://mon-backend.onrender.com/api/message')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  });
