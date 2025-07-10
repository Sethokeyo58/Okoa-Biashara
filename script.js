// Show login form by default
document.querySelector('.login-form').classList.add('active');

// Toggle to register
document.querySelector('.register-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.login-form').classList.remove('active');
  document.querySelector('.form-box.register').classList.add('active');
});

// Toggle to login
document.querySelector('.login-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.form-box.register').classList.remove('active');
  document.querySelector('.login-form').classList.add('active');
});

// Optional: handle form submissions (demo only)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
});