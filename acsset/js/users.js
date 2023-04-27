const storedUser = JSON.parse(localStorage.getItem('user'))
const welcome = document.querySelector('.welcome');
const userName = document.querySelector('.js-user-name')
const logout = document.querySelector('.js-logout')
if(storedUser != null || storedUser != undefined) {
    welcome.innerHTML = "Welcome " + storedUser.user_name;
    userName.innerHTML = "Welcome, " + storedUser.user_name;
    userName.href = "#"
    logout.innerHTML = "Logout"
    logout.classList.add('btn-logout')
    logout.href = "#";
}

let usersApis = "http://localhost:3000/users"

const btnRegister = document.querySelector('.js-btn-register');
const btnLogin = document.querySelector('.js-btn-login');

function getUser(callback) {
    fetch(usersApis).then(res => res.json())
    .then(callback)
}

function postUsers(data) {
    var option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(usersApis, option).then(response => response.json())
    .then(data => {
        localStorage.setItem('user', JSON.stringify(data))
    })
}

function putUsers(data) {
    var option = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(usersApis, option).then(response => response.json())
    .then(data => {
        localStorage.setItem('user', JSON.stringify(data))
    })
}

function register() {
    getUser(handleRegister)
}


function login() {
    getUser(handleLogin)
}

function handleRegister(users) {
    let email = document.querySelector('input[name ="email-register"]').value;
    let pass = document.querySelector('input[name ="pass-register"]').value;
    let userName = document.querySelector('input[name="userName-register"]').value;
    let id = Math.floor(Math.random() * 10000)
    let carts = [];
    while(users.some(user => (user.id === id))) {
        id = Math.floor(Math.random() * 10000)
    }
    var data = {
        id,
        user_name: userName,
        email,
        pass,
        carts
    }
    var isValidate = users.some(user => (user.email === email));

    if(!isValidate) {
        postUsers(data);
        window.location.href = '/index.html';
    }else {
        document.querySelector('.error').classList.remove('d-none');
    }
}

function handleLogin(users) {
    let email = document.querySelector('input[name ="email-login"]').value;
    let pass = document.querySelector('input[name ="pass-login"]').value;
    users.forEach(user => {
        if((user.email === email && user.pass == pass)) {
            localStorage.setItem('user', JSON.stringify(user))
            window.location.href = '/index.html'
        }
    });
}

if(btnLogin != null && btnRegister != null) {
    btnRegister.addEventListener('click', () => {
        register();
    })
    
    btnLogin.addEventListener('click', ()=> {
        login()
    })
}

const btnLogout = document.querySelector('.btn-logout')

if(btnLogout != null || btnLogout != undefined) {
    btnLogout.addEventListener('click', ()=> {
        localStorage.removeItem('user');
        location.reload()
    })
}