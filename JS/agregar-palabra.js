var btnGuardar = document.getElementById("guardar");
var nuevaPalabra = document.getElementById("nueva-palabra");
var nueva = nuevaPalabra.value.toLowerCase();
var btncancelar = document.getElementById("cancela");
var divAgregar = document.getElementById("agregar-palabras")



function grabar(){
    if (nuevaPalabra.value !=""){
        console.log(nuevaPalabra.value);
        console.log(nueva);
        palabras.push(nuevaPalabra.value.toUpperCase());
        console.log(palabras);
        document.getElementById("nueva-palabra").value = "";
    }
}

function cancelar(){
    reset();
    menu.classList.remove("invisible");
    divAgregar.classList.add("invisible");
    document.getElementById("nueva-palabra").value = "";
}


btnGuardar.addEventListener("click",grabar);

btncancelar.addEventListener("click",cancelar)