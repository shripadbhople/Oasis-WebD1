function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;


    if (username === 'user' && password === 'password') {
        showSecuredPage(username, 'user');
    } else if (username === 'admin' && password === 'adminpassword') {
        showSecuredPage(username, 'admin');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;


    alert(`User ${username} registered successfully!`);
}

function showSecuredPage(username, role) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('securedPage').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = username;

    if (role === 'admin') {
        document.getElementById('adminSecuredPageBtn').style.display = 'block';
    }
}

function logout() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
    document.getElementById('adminSecuredPageBtn').style.display = 'none';
    document.getElementById('adminSecuredPage').style.display = 'none';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
}
