document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  
    
    // Get values from the input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;

    if (name && email && password && confirmPassword && phone) {
        // Check passwords
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

       
        const userData = {
            name: name,
            email: email,
            password: password,
            phone: phone
        };

        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        alert('Registration successful! Welcome ' + name);

        // Redirect to login or dashboard page after successful registration
        window.location.href = 'login.html'; 
    } else {
        alert('Please fill in all fields');
    }
});
