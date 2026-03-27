function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

function togglePassword(id) {
    const passwordInput = document.getElementById(id);
    const icon = passwordInput.parentElement.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Check if user is logged in on load
// No auto-login check needed for login page

// Login form handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill all fields');
        return;
    }
    
    // Fake login - check localStorage users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        goToDashboard(user);
    } else {
        alert('Invalid credentials. Password is "defaultpass123" for registered users.');
    }
});

// Register form handler
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userData = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email_address').value,
        program: document.getElementById('program').value,
        studentId: document.getElementById('student_id').value,
        password: 'defaultpass123' // In real app, hash this
    };
    
    // Validation
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.program || !userData.studentId) {
        alert('Please fill all fields');
        return;
    }
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === userData.email)) {
        alert('User already exists');
        return;
    }
    
    // Save user
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    goToDashboard(userData);
    
    alert('Registration successful!');
});

// Redirect to dashboard on success
function goToDashboard(user) {
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'dashboard/dashboard.html';
}

// Hide register link (for logout-only login)
function hideRegisterLink() {
    document.getElementById('register-link').style.display = 'none';
}

// Show register link
function showRegisterLink() {
    document.getElementById('register-link').style.display = 'block';
}
