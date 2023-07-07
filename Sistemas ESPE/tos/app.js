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
            "nombre": formulario.nombre.value,
            "apellido": formulario.apellido.value,
            "peso": formulario.peso.value,
            "edad": formulario.edad.value,
            "cedula": formulario.cedula.value,
        }),
    }).then(response => response.json())
      .then(data => {
          alert("La informacion se envió correctamente");
      });
});
