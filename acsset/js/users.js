const storedUserName = localStorage.getItem('user_name')

let usersApis = "http://localhost:3000/users"

const btnRegister = document.querySelector('.js-btn-register');
const btnLogin = document.querySelector('.js-btn-login');
const title = document.querySelector('.welcome');

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
        localStorage.setItem('user-_name', data.user_name)
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
    while(users.some(user => (user.id === id))) {
        id = Math.floor(Math.random() * 10000)
    }
    var data = {
        id,
        user_name: userName,
        email,
        pass
    }
    var isValidate = users.some(user => (user.email === email));

    if(!isValidate) {
        postUsers(data);
        window.location.href = '/index.html';
    }else {
        alert("Email đã tồn tại");
    }
}

function handleLogin(users) {
    let email = document.querySelector('input[name ="email-login"]').value;
    let pass = document.querySelector('input[name ="pass-login"]').value;
    var isExist = users.some(user => (user.email === email && user.pass == pass));
    users.forEach(user => {
        if((user.email === email && user.pass == pass)) {
            localStorage.setItem('user-_name', user.user_name)
            window.location.href = '/index.html'
        }
    });
}

btnRegister.addEventListener('click', () => {
    register();
})

btnLogin.addEventListener('click', ()=> {
    login()
})

