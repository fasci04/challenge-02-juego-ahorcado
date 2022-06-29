var palabras = ["CASA", "PERRO", "AUTOMOVIL", "FERROCARRIL", "ELEFANTE", "TERMOMETRO", "AUSTRALIA", "VENEZUELA"];
var tablero = document.getElementById("horca").getContext("2d");
var letras = [];
var palabraCorrecta = "";
var errores = 9;
var habilitado = true;
var cantAciertos = 0;
var cantLetras = 0
var palabraSecreta


function escogerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    cantLetras = palabraSecreta.length;
    return palabraSecreta;
}

function dibujarLineas(){
    tablero.LineWidth = 6;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.strokeStyLe = "#0A3871";
    tablero.beginPath();
    
    var ancho = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500+(ancho*i),640)
        tablero.lineTo(550+(ancho*i),640)
    }
    tablero.stroke()
    tablero.closePath()
}




function escribirLetraCorrecta(index){
    tablero.font = "bold 52px Inter";
    tablero.LineWidth=6;
    tablero.LineCap="round";
    tablero.LineJoin = "round";
    tablero.strokeStyLe = "#0A3871";

    var ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 505+(ancho*index),620)
    cantAciertos ++;    
}

function escribirLetraIncorrecta(letra,errorsLeft){
    tablero.font = "bold 40px Inter";
    tablero.LineWidth=6;
    tablero.LineCap="round";
    tablero.LineJoin = "round";
    tablero.strokeStyLe = "#0A3871";

    tablero.fillText(letra,535+(40*(10-errorsLeft)),691,40)
}

function verificarLetraCliqueada(key){
    if (key.charCodeAt(0)===192 || (key.charCodeAt(0)>=97) && (key.charCodeAt(0)<=122))  {
        if (letras.length <1 || letras.indexOf(key)<0){
            letras.push(key);
            
            return false;
        }else{
            letras.push(key);
            
            return true;
        }
    } 
}

function adicionaLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores-=1
    }
}



function teclear(){
  
        document.onkeydown = (e) =>{
            if (habilitado==true){
                let letra=e.key.toUpperCase()

                if(!verificarLetraCliqueada(e.key)){
                        if(palabraSecreta.includes(letra)){
                            adicionaLetraCorrecta(palabraSecreta.indexOf(letra))
                            for (let i=0;i<palabraSecreta.length; i++){
                                if(palabraSecreta[i]===letra){
                                    escribirLetraCorrecta(i);   
                                }
                            }
                        }else{
                            if(!verificarLetraCliqueada(e.key))return 
                            adicionarLetraIncorrecta(letra)
                            escribirLetraIncorrecta(letra,errores)
                            adicionarAhorcado()      
                        }
                } 
            }
            perdisteOGanaste(errores,cantAciertos,cantLetras);
        }
}