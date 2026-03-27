// Load user on dashboard load
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'index.html';
        return;
    }
    
    const userData = JSON.parse(user);
    loadUserData(userData);
    initNavigation();
});

// Load user profile data
function loadUserData(user) {
    document.getElementById('user-name').textContent = `${user.firstName} ${user.lastName}`;
    document.getElementById('user-program').textContent = user.program;
    document.getElementById('user-id').textContent = user.studentId;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('page-title').textContent = 'Home';
}

// Navigation
function initNavigation() {
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // Update nav
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Switch content
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(page).classList.add('active');
            
            document.getElementById('page-title').textContent = this.querySelector('span').textContent;
        });
    });
}

// Logout
function logout() {
    if (confirm('Logout?')) {
        localStorage.removeItem('user');
        window.location.href = '../index.html';
    }
}

