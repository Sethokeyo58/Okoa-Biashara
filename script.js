document.addEventListener('DOMContentLoaded', () => {
    // Select elements from the DOM
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.form-box.register');

    // Event listener to open the popup when the "Login" button is clicked
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    // Event listener to close the popup when the "X" icon is clicked
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        wrapper.classList.remove('active'); // Ensure form state is reset
    });

    // Event listener to switch from login to register form
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('active');
    });

    // Event listener to switch from register to login form
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.remove('active');
    });

    // Basic form submission handlers (client-side only)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send data to a server for authentication
        console.log("Login form submitted.");
        alert("Login functionality is not implemented on the client-side.");
        // Close the popup after submission
        wrapper.classList.remove('active-popup');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send data to a server for user creation
        const password = registerForm.querySelector('input[type="password"]').value;
        // In a real app, you'd add a "Confirm Password" input and validation
        console.log("Register form submitted with a password.");
        alert("Registration functionality is not implemented on the client-side.");
        // Close the popup after submission
        wrapper.classList.remove('active-popup');
        wrapper.classList.remove('active');
    });

});