document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUserData = JSON.parse(localStorage.getItem('user'));

    if (storedUserData) {
        if (storedUserData.email === email && storedUserData.password === password) {
            alert('Login successful! Welcome ' + storedUserData.name);
            window.location.href = "Index.html";  // You can change this URL to your dashboard or homepage
        } else {
            alert('invalid credentials. Please try again.');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }
});
