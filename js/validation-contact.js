console.log("test")
const contactForm = document.querySelector("#contactForm")
const contactEmail = document.querySelector("#contactEmail")
const contactEmailHelp = document.querySelector("#contactEmailHelp")
const contactText = document.querySelector("#contactText")
const contactTextHelp = document.querySelector("#contactTextHelp")
const contactSubmitHelp = document.querySelector("#contactSubmitHelp")

contactForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if (contactEmail.value === "" || contactText.value === "") {
        if (contactEmail.value === "") {
            contactEmailHelp.innerText = "Ingrese un email válido."
        }
        if (contactText.value === "") {
            contactTextHelp.innerText = "Escriba un mensaje."
        }
    } else {
        contactSubmitHelp.innerText = "¡Mensaje enviado!"
        setTimeout(() => {
            contactForm.submit();
        }, 1000)
        
    }
})