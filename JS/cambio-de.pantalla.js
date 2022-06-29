var btnNuevoJuego = document.getElementById("inicio");
var btnAgregar = document.getElementById("agregar");
var divAgregar = document.getElementById("agregar-palabras");
var nuevo = document.getElementById("nuevo");
var menu = document.getElementById("menu-inicial");
var horca = document.getElementById("div-aparece-ahorcado");
var divBtn = document.getElementById("botones");
var volvermenu = document.getElementById("menu");

btnNuevoJuego.addEventListener("click",nuevoJuego);
nuevo.addEventListener("click",nuevoJuego);
volvermenu.addEventListener("click",volver);
btnAgregar.addEventListener("click",pantallaAgregar);

function nuevoJuego(){

    menu.classList.add("invisible");
    horca.classList.remove("invisible");
    divBtn.classList.remove("invisible");
    reset();
    dibujarLineas(escogerPalabraSecreta());
    dibujarBase();
    habilitado=true;
    teclear();

}


function volver(){
    
    reset();
    menu.classList.remove("invisible");
    horca.classList.add("invisible");
}

function pantallaAgregar(){
    menu.classList.add("invisible");
    horca.classList.add("invisible");
    divBtn.classList.add("invisible");
    divAgregar.classList.remove("invisible");


    reset();

}