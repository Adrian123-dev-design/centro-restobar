// Verificar la edad al entrar a la página de bebidas
if (window.location.pathname.includes('bebidas.html')) {
    const añoNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");
    const añoActual = new Date().getFullYear();
    const edad = añoActual - añoNacimiento;

    if (edad >= 18) {
        alert("Puedes escoger también las bebidas con alcohol.");
    } else {
        alert("No puedes escoger bebidas con alcohol.");
    }
}
