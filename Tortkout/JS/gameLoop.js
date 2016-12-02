var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d"); 

canvas.width = 800; 
canvas.height = 650;

document.body.appendChild(canvas);


//bg 
var bgReady = false; 
var bgImage = new Image (); 

bgImage.onload = function (){
	bgReady = true;
};
bgImage.src = "./imagens/b3.jpg";


//Jogador 
var playerWidth = 100; 
var playerHeight = 100;

var playerX = (canvas.width - playerWidth) / 2 ; 
var playerY = canvas.height - playerHeight; 

var playerReady = false; 
var playerImage = new Image (); 

playerImage.onload = function (){
	playerReady = true; 
}; 

playerImage.src = "./imagens/player.png";


//Ball 
var ballReady = false; 
var ballImage = new Image(); 

var ballWidth = 50;
var ballHeight = 50;

var ballX = canvas.width / 2;
var ballY = canvas.height - 130;
var ballDX = 2;
var ballDY = -2;
var ballRa = 85; 

ballImage.onload = function(){
	ballReady = true; 
};

ballImage.src = "./imagens/bola.png";


//brick
var brickReady = false; 
var brickImage = new Image(); 


var brickWidth = 50;
var brickHeight = 50;

var brickX; 
var brickY;

var c; 
var r; 
var b; 

var brickRowCount = 7; 
var brickColumnCount = 12; 
var brickPadding = 8;
var brickOffsetTop = 10;
var brickOffsetLeft = 30;
var numberOfPhases = 1;

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

brickImage.onload = function(){
	brickReady = true; 
};

brickImage.src = "./imagens/tijolo.png";

//score 
var score = 0; 


//keys
var keysDown = {}; 

addEventListener("keydown",function(e){
	keysDown[e.keyCode] = true; 
},false); //anexando manipulador de eventos

addEventListener("keyup",function(e){
	delete keysDown[e.keyCode];
},false);


//Posicionamento
var reset = function (){
	playerX = (canvas.width - playerWidth) / 2 ; 
	playerY = canvas.height - playerHeight;  //posição player
	
};

var movBall = function (){
 	
    if(ballX + ballDX > canvas.width - ballRa || ballX + ballDX < ballRa){
    	ballDX = -ballDX; 
    }

    if(ballY + ballDY < ballRa){
    	ballDY = -ballDY;
    }
    else if( ballY + ballDY > canvas.height - ballRa){

    	if(ballX > playerX && ballX < playerX + playerWidth){
    		ballDY = -ballDY; 
    	}
    	else {
    		document.location.reload(); //restart the game
    	}
    }

    ballX += ballDX;
    ballY += ballDY;
};

var drawBricks = function (){
	for(c = 1; c < brickColumnCount; c++){
		for (r = 1; r < brickRowCount; r++){
			if(bricks[c][r].status == 1) {
				brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
				brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;

				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
			

				ctx.drawImage(brickImage, brickX, brickY,brickWidth,brickHeight);
			}
		}
	}
	
};

var collisionDetection = function (){
	for(c = 0; c < brickColumnCount; c++){
		for (r = 0; r < brickRowCount; r ++){
			b = bricks[c][r]; 

			if(b.status == 1) {
				if(ballX > b.x && ballX <  b.x + brickWidth && ballY > b.y && ballY <  b.y + brickHeight){
					ballDY = -ballDY;
					b.status = 0;
					score ++;
					if(score == brickRowCount * brickColumnCount){
						alert("Você ganhou ! "); 
						document.location.reload();
						numberOfPhases ++;
						phases();
					}
				}
			}
		}
	}

};

var phases = function (){

	if(numberOfPhases > 0){
		brickRowCount =  Math.floor(Math.random() *  (6 + 3) + 3);
		brickColumnCount =  Math.floor(Math.random() *  (11 + 3) + 3);
	}

};

var collisionPlayer = function(){

	if(playerX >= canvas.width - 92){
		playerX = canvas.width - 92;
	}

	if(playerX <= 0){
		playerX = 0;
	}
};

var drawScore = function (){

	ctx.font = "30px Indie Flower";
	ctx.fillStyle = "#DBE1FF";
	ctx.fillText("Pontos: "+score, 8, 55);
};

//Funcionalidade do jogador
var update = function(){
	if(37 in keysDown){
		playerX -= 2; 
	} // esquerda
	if(39 in keysDown){
		playerX += 2; 
	}//direita
	if(32 in keysDown){
		if(39 in keysDown){
			playerX += 5;
		}
		if(37 in keysDown){
			playerX -= 5;
		}
	}
	
	collisionPlayer();
};


//Desenhar na tela 
var render = function(){
	if(bgReady){
		ctx.drawImage(bgImage, 0, 0);
	}
	if(playerReady){
		ctx.drawImage(playerImage, playerX, playerY , playerWidth, playerHeight);
	}
	if(ballReady){
		ctx.drawImage(ballImage, ballX, ballY, ballWidth, ballHeight);
	}
	if(brickReady){
		drawBricks();
	}	

	drawScore();
	
}



//loop de verificação /loop do jogo 
var main = function () { 

	var now = Date.now();
	var delta = now - then; 

	update(delta / 1000);
	movBall();
	collisionDetection();
	render();
	the = now;

};


//inicia 
reset();
var then = Date.now();
setInterval(main, 10);
