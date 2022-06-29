function perdisteOGanaste(errores, cantAciertos, cantLetras){
    if(errores == 0 ){
        habilitado = false;
        document.getElementById("fin-de-juego").innerHTML = "<p>Perdiste, la palabra era</p>";
        document.getElementById("mostrar-palabra").innerHTML = palabraSecreta;
    }else if(cantAciertos==cantLetras){
            habilitado = false;
            document.getElementById("fin-de-juego").innerHTML = "<p>Felicitaciones, GANASTE!!!</p>";       
    }    
}


