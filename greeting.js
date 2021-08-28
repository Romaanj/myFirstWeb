const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login input");
const loginHappen = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
function clickLoginButton(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreeting(username);
}

function paintGreeting(username) {
    loginHappen.innerText = `Welcome ${username}!!!`;
    loginHappen.classList.remove(HIDDEN_CLASS);
    document.getElementById("todo").classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", clickLoginButton);
} 
else {
    paintGreeting(savedUsername);
}
