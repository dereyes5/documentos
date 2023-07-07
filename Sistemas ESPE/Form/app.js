const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/83a2975e-b846-40ae-b916-153ea068f88d', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": formulario.name.value,
            "email": formulario.email.value,
            "phone": formulario.phone.value,
            "cedula": formulario.cedula.value,
            "updates": formulario.updates.value,
        }),
    })
    .then(response => {
        if (response.ok) {
            alert("La información se guardó correctamente.");
        } else {
            throw new Error("Error al enviar la información.");
        }
    })
    .catch(error => {
        console.error(error);
        alert("Ocurrió un error al enviar la información. Por favor, inténtalo nuevamente.");
    });
});
