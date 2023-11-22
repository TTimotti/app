const container = document.querySelector(".container");
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginDiv = document.getElementById("login-div");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);    
}

function paintGreetings(name) {
    loginDiv.classList.add(HIDDEN_CLASSNAME);
    greeting.querySelector('span').innerText = name;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    container.classList.remove(HIDDEN_CLASSNAME);    
}

if (savedUsername === null) {
    container.classList.add(HIDDEN_CLASSNAME);
    loginDiv.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);    
} else {
    paintGreetings(savedUsername);
}

