const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const fechaIngreso = obtenerFechaActual();
    const horaIngreso = obtenerHoraActual();

    fetch('https://sheet.best/api/sheets/83a2975e-b846-40ae-b916-153ea068f88d', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": formulario.username.value,
            "password": formulario.password.value,
            "fechaIngreso": fechaIngreso,
            "horaIngreso": horaIngreso
        }),
    }).then(response => response.json())
        .then(data => {
            alert("La información se envió correctamente");
            window.location.href = "materia.html";
        });
});

function obtenerFechaActual() {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const day = fecha.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function obtenerHoraActual() {
    const fecha = new Date();
    const hour = fecha.getHours().toString().padStart(2, '0');
    const minute = fecha.getMinutes().toString().padStart(2, '0');
    const second = fecha.getSeconds().toString().padStart(2, '0');
    return `${hour}:${minute}:${second}`;
}

