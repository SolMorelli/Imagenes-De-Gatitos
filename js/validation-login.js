const loginForm = document.querySelector("#loginForm")
const loginEmail = document.querySelector("#loginEmail")
const loginEmailHelp = document.querySelector("#loginEmailHelp")
const loginPassword = document.querySelector("#loginPassword")
const loginPasswordHelp = document.querySelector("#loginPasswordHelp")

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (loginEmail.value === "" || loginPassword.value === "") {
        if (loginEmail.value === "") {
            loginEmailHelp.innerText = "Ingrese un email válido."
        }
        if (loginPassword.value === "") {
            loginPasswordHelp.innerText = "Ingrese su contraseña."
        }
    } else {
        loginForm.submit();
        window.location.replace("index.html");
    }
})
