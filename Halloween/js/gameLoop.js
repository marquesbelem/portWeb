var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.width= 700; 
canvas.height= 630; 

document.body.appendChild(canvas);


//Cenario
var bgPronto = false; 
var bgImage = new Image();

bgImage.onload = function(){
	bgPronto = true; 
}; 
bgImage.src = "./image/b3.jpg";

//Jogador 
var playerPronto = false; 
var playerImage = new Image(); 

playerImage.onload = function(){
	playerPronto = true;
};
playerImage.src = "./image/player2.png";

//Mostros 
var monstroPronto = false; 
var monstroImage = new Image(); 

monstroImage.onload = function(){
	monstroPronto = true;
};
monstroImage.src = "./image/fantasma.png";

//monstro 2
var monstroPronto1 = false; 
var monstroImage1 = new Image(); 

monstroImage1.onload = function(){
	monstroPronto1 = true;
};
monstroImage1.src = "./image/aranha.png";

//perdeu
var perdeuPronto = false; 
var perdeuImage = new Image();

perdeuImage.onload = function(){
	perdeuPronto = true;
};
perdeuImage.src = "./image/perdeu.png";


//Castelo 
var casteloPronto = false; 
var casteloImage = new Image();

casteloImage.onload = function(){
	casteloPronto = true;
};
casteloImage.src = "./image/castelo.png";

//=========================================

//Configuração do Jogo 

var player = {
	speed: 300
};

var monstro = {};
var monstro2 = {};
var perdeu = {};
var monstrosCapt1 = Math.floor(Math.random() *  (5 + 1) + 1);
var monstrosCapt2 = Math.floor(Math.random() * (5 + 1) + 1); 
var fase = 0; 


var segundos;
var keysDown = {};

addEventListener("keydown",function(e){
	keysDown[e.keyCode] = true; 
},false); //anexando manipulador de eventos

addEventListener("keyup",function(e){
	delete keysDown[e.keyCode];
},false);

var fases = function (){
	var i = 0 ; 

	if(monstrosCapt1 == 0 && monstrosCapt2 == 0){

		for (i == 0; i<=4; i++){
			if(fase == i)
			{
				elementosFase();
			}

		}
		
	}
};

var elementosFase = function(){
	monstrosCapt1 = Math.floor(Math.random() *  (5 + 1) + 1);
	monstrosCapt2 = Math.floor(Math.random() *  (5 + 1) + 1);
	segundos = segundos + 10; 
	fase ++; 
};


var reset = function(){
	segundos = 20; 
	//document.getElementById("aviso").innerHTML = " ";
	player.x = canvas.width / 2; //Pegando a X l do canvas e posicionando o personage
	player.y = canvas.height / 2;  
	
	monstro.x = 32 + (Math.random()) * (canvas.width - 64);
	monstro.y = 32 + (Math.random()) * (canvas.height - 64);
	
	monstro2.x = 55 + (Math.random()) * (canvas.width - 64);
	monstro2.y = 55 + (Math.random()) * (canvas.height - 64);

	perdeu.x = canvas.width / 4; 
	perdeu.y = canvas.height /4;  

	playerImage.src = "./image/player2.png";
	monstroImage1.src = "./image/aranha.png";
	monstroImage.src = "./image/fantasma.png";
	
	monstrosCapt1 = Math.floor(Math.random() *  (5 + 1) + 1);
	monstrosCapt2 = Math.floor(Math.random() *  (5 + 1) + 1);


	fase = 0;

	contagem_tempo();
	
};

var colisao = function(){
	//player com os monstros 
	if(	player.x <= (monstro.x + 32) && monstro.x <= (player.x + 32) && 
		player.y <= (monstro.y + 32) && monstro.y <= (player.y + 32))
	{
			--monstrosCapt1;
			if(monstrosCapt1 == 0){
				monstrosCapt1 = 0; 
			}
			monstro.x = 32 + (Math.random()) * (canvas.width - 64);
			monstro.y = 32 + (Math.random()) * (canvas.height - 64);
	}

	if (player.x <= (monstro2.x + 55) && monstro2.x <= (player.x + 55) && 
		player.y <= (monstro2.y + 55) && monstro2.y <= (player.y + 55))
	{	
			--monstrosCapt2;
			if(monstrosCapt2 == 0){
				monstrosCapt2 = 0; 
			}
			monstro2.x = 55 + (Math.random()) * (canvas.width - 64);
		monstro2.y = 55 + (Math.random()) * (canvas.height - 64);
	}

	//player com ponta da tela

	if(player.x >= canvas.width - 40){
		player.x = canvas.width - 40; 
	}

	if(player.y >= canvas.height - 40){
		player.y = canvas.height - 40; 
	}

	if(player.x <= 0 ){
		player.x = 0; 
	}
	if(player.y <= 0 ){
		player.y = 0; 
	}

	//monstro com ponta tela
	if(monstro.x >= canvas.width - 40){
		monstro.x = canvas.width - 40; 
	}

	if(monstro.y >= canvas.height - 40){
		monstro.y = canvas.height - 40; 
	}

	if(monstro.x <= 0 ){
		monstro.x = 0; 
	}
	if(monstro.y <= 0 ){
		monstro.y = 0; 
	}

	if(monstro2.x >= canvas.width - 40){
		monstro2.x = canvas.width - 40; 
	}

	if(monstro2.y >= canvas.height - 40){
		monstro2.y = canvas.height - 40; 
	}

	if(monstro2.x <= 0 ){
		monstro2.x = 0; 
	}
	if(monstro2.y <= 0 ){
		monstro2.y = 0; 
	}

};

var contagem_tempo = function (){
	segundos = segundos - 1;
	if(segundos == -1){
		segundos = 0;
		monstrosCapt1 = Math.floor(Math.random() *  (5 + 1) + 1);
		monstrosCapt2 = Math.floor(Math.random() *  (5 + 1) + 1); 
		//document.getElementById("aviso").innerHTML = "Você perdeu";
		return setTimeout("reset()",1000);
	}

	timerid = setTimeout("contagem_tempo()",1000);
};

var textoTela = function(){

	document.getElementById("monstroB").innerHTML = monstrosCapt1 ; 
	document.getElementById("monstroP").innerHTML = monstrosCapt2;
	document.getElementById("tempo").innerHTML = segundos;
	
};

//Fucionalidade do Jogador 
var update = function(modifier){
	if(37 in keysDown){
		player.x -= player.speed * modifier; 
	} // esquerda
	if(38 in keysDown){
		player.y -= player.speed * modifier;
	}//cima
	if(39 in keysDown){
		player.x += player.speed * modifier; 
	}//direita
	if(40 in keysDown){
		player.y += player.speed * modifier;
	}//baixo
	
	
	//colisão
	colisao();
	
};

//Desenhar tela 
var render = function(){
	if(bgPronto){
		ctx.drawImage(bgImage, 0, 0);
	}
	if(playerPronto){
		ctx.drawImage(playerImage, player.x, player.y);
	}
	if(monstroPronto){
		ctx.drawImage(monstroImage, monstro.x, monstro.y);
	}
	
	if(monstroPronto1){
		ctx.drawImage(monstroImage1, monstro2.x, monstro2.y);
	}
	
	if(segundos == 0){
		if(perdeuPronto){
			ctx.drawImage(perdeuImage,perdeu.x ,perdeu.y);
			Nrender();

		}
	}
	if(fase == 4){
		if(casteloPronto){
			ctx.drawImage(casteloImage,castelo.x ,castelo.y);
		}
	}

	textoTela();
	
	
};
//Não desenhar
var Nrender = function(){
	monstroImage1.src = " ";
	monstroImage.src = " ";
	playerImage.src = " ";
	
};

//loop de verificação / loop do jogo
var main = function(){
	
	var now = Date.now();
	var delta = now - then; 
	
	update(delta / 1000);
	fases();
	render();
	
	//monstro.x ++; 
	//monstro2.y ++;
	
	then = now; 
	
};


//Iniciar o jogo 
contagem_tempo();
reset();
var then = Date.now();
setInterval(main, 1);







