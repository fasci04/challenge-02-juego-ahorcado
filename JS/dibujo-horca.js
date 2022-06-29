var x=450;
var y=500;

function dibujarBase(){
    tablero.beginPath();
    tablero.moveTo(x,y);
    tablero.lineTo(x+50,y-10);
    tablero.moveTo(x+100,y);
    tablero.lineTo(x+50,y-10);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarPaloV(){
    tablero.beginPath();
    tablero.moveTo(x+50,y-310);
    tablero.lineTo(x+50,y-10);
    tablero.stroke();
    tablero.closePath();    
}


function dibujarPaloH(){
    tablero.beginPath();
    tablero.moveTo(x+50,y-310);
    tablero.lineTo(x+150,y-310);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarPalito(){
    tablero.beginPath();    
    tablero.moveTo(x+150,y-310);
    tablero.lineTo(x+150,y-290);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarCabeza(){
    tablero.beginPath();
    tablero.moveTo(x+180,y-260);
    tablero.arc(x+150,y-260,30,0,2*3.14);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarCuerpo(){
    tablero.beginPath();
    tablero.moveTo(x+150,y-230);
    tablero.lineTo(x+150,y-130);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarManoIzquierda(){
    tablero.beginPath();
    tablero.moveTo(x+150,y-210);
    tablero.lineTo(x+100,y-180);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarManoDerecha(){
    tablero.beginPath();
    tablero.moveTo(x+150,y-210);
    tablero.lineTo(x+200,y-180);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarPieIzquierdo(){
    tablero.beginPath();
    tablero.moveTo(x+150,y-130);
    tablero.lineTo(x+100,y-100);
    tablero.stroke();
    tablero.closePath();    
}

function dibujarPieDerecho(){
    tablero.beginPath();
    tablero.moveTo(x+150,y-130);
    tablero.lineTo(x+200,y-100);
    tablero.stroke();
    tablero.closePath();    
}



function adicionarAhorcado(){
    if(errores == 8){
        dibujarPaloV()
    }else if(errores==7){
        dibujarPaloH()
    }else if(errores==6){
        dibujarPalito()
    }else if(errores==5){
        dibujarCabeza()
    }else if(errores==4){
        dibujarCuerpo()
    }else if(errores==3){
        dibujarManoIzquierda()
    }else if(errores==2){
        dibujarManoDerecha()
    }else if(errores==1){
        dibujarPieIzquierdo()
    }else if(errores==0){
        dibujarPieDerecho()
    }
}