document.querySelector('#signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Sign in successful') {
            alert('Welcome back!');
            // Redirect to user dashboard or another page
        } else {
            alert('Invalid credentials, please try again or sign up.');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.querySelector('#signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'User registered successfully') {
            alert('Account created successfully. Please sign in.');
        } else if (data.message === 'User already exists') {
            alert('User already exists. Please sign in.');
        }
    })
    .catch(error => console.error('Error:', error));
});

console.log("Welcome to GameZone");
