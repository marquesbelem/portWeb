var contadorJogadas = 0;
var turno = 1; 
var O_val = "O"; 
var X_val = "X"; 
var vazio_val = " "; 
var opontos = 0; 
var xpontos = 0;

function rodada (sqr){
	if(sqr.value == vazio_val){
		if(turno == 1){
			
			sqr.value = X_val; 
			sqr.style.backgroundColor = "#B82B1B";
			mudarCorNomePlay2();
		}
		else{
			
			sqr.value = O_val; 
			sqr.style.backgroundColor = "#000B42";
			mudarCorNomePlay1();
		}
		
		turno = turno*(- 1); 
		validaJogada(); 
	}
}

function validaJogada(){

	
	
	contadorJogadas = 0; 
	var sqr1 = document.gameLoop.sqr1.value; 
	var sqr2 = document.gameLoop.sqr2.value; 
	var sqr3 = document.gameLoop.sqr3.value; 
	var sqr4 = document.gameLoop.sqr4.value; 
	var sqr5 = document.gameLoop.sqr5.value; 
	var sqr6 = document.gameLoop.sqr6.value; 
	var sqr7 = document.gameLoop.sqr7.value; 
	var sqr8 = document.gameLoop.sqr8.value; 
	var sqr9 = document.gameLoop.sqr9.value; 
	
	var valorTurno; 
	
	if(turno == -1){
	
		valorTurno = X_val;
	}
	else if (turno == 1){

		valorTurno = O_val; 		
	}
	
	if ( 
	(sqr1 == valorTurno && sqr2 == valorTurno && sqr3 == valorTurno) || 
	(sqr4 == valorTurno && sqr5 == valorTurno && sqr6 == valorTurno) || 
	(sqr7 == valorTurno && sqr8 == valorTurno && sqr9 == valorTurno) || 
	
	(sqr1 == valorTurno && sqr4 == valorTurno && sqr7 == valorTurno) || 
	(sqr2 == valorTurno && sqr5 == valorTurno && sqr8 == valorTurno) || 
	(sqr3 == valorTurno && sqr6 == valorTurno && sqr9 == valorTurno) || 
	
	(sqr1 == valorTurno && sqr5 == valorTurno && sqr9 == valorTurno) || 
	(sqr7 == valorTurno && sqr5 == valorTurno && sqr3 == valorTurno) 	
	){
		
		
		if (valorTurno == O_val){
			opontos++;
			
			setTimeout(function () {
				alert(document.getElementById("player2").innerHTML + " ganhou");	
				reset();
				document.getElementById("opontos").innerHTML = opontos;
			}, 500);
			
			mudarCorNomePlay1();
		}
		
		else {
			xpontos++; 
			
			setTimeout(function (){
				alert(document.getElementById("player1").innerHTML + " ganhou");
				reset();
				document.getElementById("xpontos").innerHTML = xpontos;
			}, 500);
			
			mudarCorNomePlay1();
		}
	
		
	}else{
		if(sqr1 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr1 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr2 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr3 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr4 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr5 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr6 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr7 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr8 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(sqr9 != vazio_val){
			contadorJogadas = contadorJogadas + 1; 
		}
		if(contadorJogadas >= 9){
			alert("Empate"); 
			reset(); 
		}
		
	}
	
}

function reset(){
	document.gameLoop.sqr1.value = vazio_val;
	document.gameLoop.sqr2.value = vazio_val;
	document.gameLoop.sqr3.value = vazio_val;
	document.gameLoop.sqr4.value = vazio_val;
	document.gameLoop.sqr5.value = vazio_val;
	document.gameLoop.sqr6.value = vazio_val;
	document.gameLoop.sqr7.value = vazio_val;
	document.gameLoop.sqr8.value = vazio_val;
	document.gameLoop.sqr9.value = vazio_val;
	
	document.gameLoop.sqr1.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr2.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr3.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr4.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr5.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr6.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr7.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr8.style.backgroundColor = "#D6D6D6";
	document.gameLoop.sqr9.style.backgroundColor = "#D6D6D6";
	
	turno = 1; 
	contadorJogadas = 0; 
	
	

}

function mostraNomePlayer1(){
	document.getElementById("player1").innerHTML = document.getElementById("inputPlayer1").value;
	document.getElementById("labelNome").innerHTML = document.getElementById("inputPlayer1").value;
	document.getElementById("labelNome").style.color = "#B82B1B"; 
	document.getElementById('inputPlayer1').value='';
}

function mostraNomePlayer2(){
	document.getElementById("player2").innerHTML = document.getElementById("inputPlayer2").value;
	document.getElementById('inputPlayer2').value='';
}

function resetJogo(){
	document.getElementById("player2").innerHTML = "Player2";
	document.getElementById("player1").innerHTML = "Player1";
	document.getElementById("opontos").innerHTML = "0";
	document.getElementById("xpontos").innerHTML = "0";
	document.getElementById("labelNome").innerHTML = "";
	
	opontos = 0; 
	xpontos = 0;
	
	reset();
}


function mudarCorNomePlay1 () {
	document.getElementById("labelNome").innerHTML = document.getElementById("player1").innerHTML;
	document.getElementById("labelNome").style.color = "#B82B1B"; 
}



function mudarCorNomePlay2 (){
	document.getElementById("labelNome").innerHTML = document.getElementById("player2").innerHTML;
	document.getElementById("labelNome").style.color = "#000B42"; 
}


