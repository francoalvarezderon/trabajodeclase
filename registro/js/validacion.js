function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Elementos del formulario
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const terminos = document.getElementById("terminos");
const btn = document.getElementById("regBtn"); // botón

btn.addEventListener("click", (e) => {
    e.preventDefault(); // evita que se recargue la página

    // Validar campos
    const nombreVal = nombre.value.trim();
    const apellidoVal = apellido.value.trim();
    const emailVal = email.value.trim();
    const password1Val = password1.value.trim();
    const password2Val = password2.value.trim();
    const terminosChecked = terminos.checked;

    // Validar que **ningún campo esté vacío** y checkbox marcado
    if(!nombreVal || !apellidoVal || !emailVal || !password1Val || !password2Val || !terminosChecked) {
        showAlertError();
        return; // corta la ejecución
    }

    // Validar que las contraseñas sean iguales y tengan al menos 6 caracteres
    if(password1Val !== password2Val || password1Val.length < 6) {
        showAlertError();
        return;
    }

    // Si todo está correcto
    showAlertSuccess();
});




