document.addEventListener('DOMContentLoaded', function() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const boton = document.getElementById('button');
    const tabla = document.getElementById('tabla');
    var num = 1;
    function eliminaralumno(id) {
        document.getElementById(id).remove();
    }
    function añadiralumno() {
        if (nombre.value === "" || apellido.value === "") {
            console.error("el nombre y el apellido son requeridos");
        return;
        }
        const row = tabla.insertRow();
        row.setAttribute('id', num++);
        row.innerHTML = `
        <td>${nombre.value}</td>
        <td>${apellido.value}</td>
        `;
        nombre.value = "";
        apellido.value = "";

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'borrar';
        removeBtn.onclick = function(e) {
            eliminaralumno(row.getAttribute('id'));
        }
        row.children[1].appendChild(removeBtn);
    }

    boton.onclick =añadiralumno;
});