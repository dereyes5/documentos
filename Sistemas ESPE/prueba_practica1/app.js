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
            "paquete": formulario["paquete"].value,
            "nombre-dominio": formulario["nombre-dominio"].value,
            "ip-dominio": formulario["ip-dominio"].value,
            "nombre-admin": formulario["nombre-admin"].value,
            "ciudad-admin": formulario["ciudad-admin"].value,
            "pais-admin": formulario["pais-admin"].value,
            "telefono-admin": formulario["telefono-admin"].value,
            "correo-admin": formulario["correo-admin"].value,
            "nombre-tecnico": formulario["nombre-tecnico"].value,
            "ciudad-tecnico": formulario["ciudad-tecnico"].value,
            "pais-tecnico": formulario["pais-tecnico"].value,
            "telefono-tecnico": formulario["telefono-tecnico"].value,
            "correo-tecnico": formulario["correo-tecnico"].value,
            "nserver1": formulario.nserver1.value,
            "nserver2": formulario.nserver2.value,
            "txt-registro": formulario["txt-registro"].value,
            "a-registro": formulario["a-registro"].value,
            "cname-registro": formulario["cname-registro"].value,
            "ptr-registro": formulario["ptr-registro"].value,
            "spf-registro": formulario["spf-registro"].value,
            "mx-registro": formulario["mx-registro"].value
        }),
        })
        .then(respuesta => {
            if (respuesta.ok) {
                alert('Información guardada correctamente');
            } else {
                alert('Error al guardar la información');
            }
        });
});
