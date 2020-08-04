const registerForm = document.querySelector("#registerForm")
const registerEmail = document.querySelector("#registerEmail")
const registerEmailHelp = document.querySelector("#registerEmailHelp")
const registerPassword = document.querySelector("#registerPassword")
const registerPasswordHelp = document.querySelector("#registerPasswordHelp")
const registerPasswordAgain = document.querySelector("#registerPasswordAgain")
const registerPasswordAgainHelp = document.querySelector("#registerPasswordAgainHelp")

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (registerEmail.value === "" || registerPassword.value === "" || registerPasswordAgain.value !== registerPassword.value) {
        if (registerEmail.value === "") {
            registerEmailHelp.innerText = "Ingrese un email válido."
        }
        if (registerPassword.value === "") {
            registerPasswordHelp.innerText = "Ingrese su contraseña."
        }
        if (registerPasswordAgain.value !== registerPassword.value) {
            registerPasswordAgainHelp.innerText = "Asegúrese de ingresar la misma contraseña."
        }
        if (registerPasswordAgain.value === "") {
            registerPasswordAgainHelp.innerText = "Vuelva a ingresar su contraseña."
        }
    } else {
        registerForm.submit();
        window.location.replace("index.html");
    }
})