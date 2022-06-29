function reset(){
    tablero.clearRect(0, 0, 1200, 860);
    letras = [];
    palabraCorrecta = "";
    palabraSecreta = "";
    errores = 9;
    cantAciertos = 0;
    habilitado = false;
    document.getElementById("fin-de-juego").innerHTML = "<p></p>";
    document.getElementById("mostrar-palabra").innerHTML = "<p></p>";
    
}