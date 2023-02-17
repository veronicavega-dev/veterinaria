datos = [
   
];

let id = null
let bd = false

document.addEventListener("DOMContentLoaded", function () {
    traerDatos()
})

function traerDatos() {
    datos.forEach(dato => {
        document.getElementById("datos").innerHTML += `
        <div class="col-sm-6">
      
        <div class="card" style="width: 18rem;">
    <div class="card-body" id="card">

    <img src="./perro.jpg.jpg" class="d-block w-100" alt="...">


    <p class="card-text"> <br>
    <b>numero de la cita: </b> ${dato.id}<br>
    <b>mascota:🐱🐶🦝 </b> ${dato.nombre}<br>
    <b>Propietario:🧍‍♂️🧍‍♀️ </b> ${dato.propietario}<br>
    <b>Teléfono:📞 </b> ${dato.telefono}<br>
    <b>Fecha:📆 </b> ${dato.fecha}<br>
    <b>Hora:⏲</b> ${dato.hora}<br>
    <b>Síntomas:🚑 </b> ${dato.sintomas}<br><br>
    <input class="btn btn-primary" onclick=editar(${JSON.stringify(dato).toString()}) type="button" value="Editar">
    <input class="btn btn-danger" onclick=eliminar(${dato.id}) type="button" value="Eliminar">

    </p>
    
  </div>
</div>
<br>
         
        `
    });
}


//editar
function editar(p) {
    bd = true
    id = p.id
    console.log(p);
    document.getElementById("nombre").value = p.nombre
    document.getElementById("propietario").value = p.propietario
    document.getElementById("telefono").value = p.telefono
    document.getElementById("hora").value = p.hora
    document.getElementById("fecha").value = p.fecha
    document.getElementById("sintomas").value = p.sintomas

}


//editar la tabla
function edicion() {

    if (bd === true) {
        datos.forEach(dato => {
            if (dato.id == id) {
                dato.nombre = document.getElementById("nombre").value
                dato.propietario = document.getElementById("propietario").value
                dato.telefono = document.getElementById("telefono").value
                dato.hora = document.getElementById("hora").value
                dato.fecha = document.getElementById("fecha").value
                dato.sintomas = document.getElementById("sintomas").value
            }
        })



        console.log(datos);
        document.getElementById("datos").innerHTML = ""
        traerDatos()
        vaciar()
        bd = false
        id = null


    } else {
        validacion()
        agregar()

    }

}


//agregar
function agregar() {

    datos.push(
        {
            id: datos.length + 1,
            nombre: document.getElementById("nombre").value,
            propietario: document.getElementById("propietario").value,
            telefono: document.getElementById("telefono").value,
            hora: document.getElementById("hora").value,
            fecha: document.getElementById("fecha").value,
            sintomas: document.getElementById("sintomas").value,
        }
    )

    console.log(datos);
    document.getElementById("datos").innerHTML = ""
    traerDatos()
    vaciar()

}



//vaciar

function vaciar() {
    document.getElementById("nombre").value = ""
    document.getElementById("propietario").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("sintomas").value = ""
}


//eliminar
function eliminar(i) {
    console.log(i);
    let pos = datos.findIndex(e =>
        e.id == i
    )
    console.log(pos);

    datos.splice(pos, 1)
    document.getElementById("datos").innerHTML = ""
    traerDatos()
}


let nombre = document.getElementById("nombre")
let propietario = document.getElementById("propietario")
let telefono = document.getElementById("telefono")
let hora = document.getElementById("hora")
let fecha = document.getElementById("fecha")
let sintomas = document.getElementById("sintomas")



validaciones
function validacion() {


    if (nombre.value === "" || nombre.value === null) {
        alert("falta tu nombre.")
        return dato.nombre = document.getElementById("nombre").value

    }


    if (propietario.value === "" || propietario.value === null) {
        alert("falta tu propietario.")
        return dato.propietario = document.getElementById("propietario").value
    
    }


    if (telefono.value === "" || telefono.value === null) {
        alert("falta tu telefono.")
        return dato.telefono = document.getElementById("telefono").value

    }

    if (fecha.value === "" || fecha.value === null) {
        alert("falta la fecha.")
        return dato.fecha = document.getElementById("fecha").value
    } 

    if (hora.value === "" || hora.value === null) {
        alert("falta agregar la hora.")
        return dato.hora = document.getElementById("hora").value
    }


    if (sintomas.value === "" || sintomas.value === null) {
        alert("faltan los sintomas.")
        return dato.sintomas = document.getElementById("sintomas").value
    } 


}



