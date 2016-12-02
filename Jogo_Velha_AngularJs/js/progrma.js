var app = angular.module('myApp', []);

app.controller('formCtrl',function($scope){

	var contadorJogadas = 0;
	var turno = 1; 
	var O_val = "O"; 
	var X_val = "X"; 
	var opontos = 0; 
	var xpontos = 0;

	$scope.empate = false;
	$scope.xGanhou = false;
	$scope.oGanhou = false;
	$scope.player1;
	$scope.player2;


	

	//Funções pra setar o nomes do jogadores
	$scope.mostraNomePlayer1 = function (inputPlayer1){
		$scope.player1 = angular.copy(inputPlayer1);
		$scope.inputPlayer1 = "";

	};

	$scope.mostraNomePlayer2 = function (inputPlayer2){
		$scope.player2 = angular.copy(inputPlayer2);
		$scope.inputPlayer2 = "";

	};


	//Zerar o jogo todo e limpar o placar,nomes
	$scope.zerarJogo = function(){
		$scope.player1 = "";
		$scope.player2 = "";
		$scope.inputPlayer1 = "";
		$scope.inputPlayer2 = "";
		$scope.xpontos = "0";
		$scope.opontos = "0";
		$scope.reset();
	}

	$scope.rodada = function  (sqr){
		if(turno == 1){
			switch(sqr){
				case 1 :
				$scope.sqr1 = X_val;	
				$scope.Esqr1 = 'btn btn-danger';
				break;
				case 2 : 
				$scope.sqr2 = X_val;
				$scope.Esqr2 = 'btn btn-danger';
				break;
				case 3 : 
				$scope.sqr3 = X_val; 
				$scope.Esqr3 = 'btn btn-danger';
				break;
				case 4 :
				$scope.sqr4 = X_val; 
				$scope.Esqr4 = 'btn btn-danger';
				break;
				case 5 : 
				$scope.sqr5 = X_val; 
				$scope.Esqr5 = 'btn btn-danger';
				break;
				case 6 : $scope.sqr6 = X_val; 
				$scope.Esqr6 = 'btn btn-danger';
				break;
				case 7 : $scope.sqr7 = X_val; 
				$scope.Esqr7 = 'btn btn-danger';
				break;
				case 8 : $scope.sqr8 = X_val;
				$scope.Esqr8 = 'btn btn-danger';
				break;
				case 9 : $scope.sqr9 = X_val; 
				$scope.Esqr9 = 'btn btn-danger';
				break;
			}

		}
		else{
			switch(sqr){
				case 1 : 
				$scope.sqr1 =  O_val;
				$scope.Esqr1 = 'btn btn-primary';
				break;
				case 2 : 
				$scope.sqr2 =  O_val; 
				$scope.Esqr2 = 'btn btn-primary';
				break;
				case 3 : 
				$scope.sqr3 =  O_val; 
				$scope.Esqr3 = 'btn btn-primary';
				break;
				case 4 : $scope.sqr4 =  O_val; 
				$scope.Esqr4 = 'btn btn-primary';
				break;
				case 5 : $scope.sqr5 =  O_val;
				$scope.Esqr5 = 'btn btn-primary';
				break;
				case 6 : $scope.sqr6 =  O_val; 
				$scope.Esqr6 = 'btn btn-primary';
				break;
				case 7 : $scope.sqr7 =  O_val; 
				$scope.Esqr7 = 'btn btn-primary';
				break;
				case 8 : $scope.sqr8 =  O_val;
				$scope.Esqr8 = 'btn btn-primary';
				break;
				case 9 : $scope.sqr9 =  O_val; 
				$scope.Esqr9 = 'btn btn-primary';
				break;
			}


		}

		turno = turno*(- 1); 
		$scope.validaJogada();
		
	}

	
	$scope.validaJogada = function (){

		var sqr1 = $scope.sqr1; 
		var sqr2 = $scope.sqr2;
		var sqr3 = $scope.sqr3; 
		var sqr4 = $scope.sqr4; 
		var sqr5 = $scope.sqr5; 
		var sqr6 = $scope.sqr6; 
		var sqr7 = $scope.sqr7; 
		var sqr8 = $scope.sqr8; 
		var sqr9 = $scope.sqr9; 
		

		var valorTurno; 

		if(turno == -1){

			valorTurno = X_val;
		}
		else if (turno == 1){

			valorTurno = O_val; 		
		}

		if ((sqr1 == valorTurno && sqr2 == valorTurno && sqr3 == valorTurno) || 
			(sqr4 == valorTurno && sqr5 == valorTurno && sqr6 == valorTurno) || 
			(sqr7 == valorTurno && sqr8 == valorTurno && sqr9 == valorTurno) || 

			(sqr1 == valorTurno && sqr4 == valorTurno && sqr7 == valorTurno) || 
			(sqr2 == valorTurno && sqr5 == valorTurno && sqr8 == valorTurno) || 
			(sqr3 == valorTurno && sqr6 == valorTurno && sqr9 == valorTurno) || 

			(sqr1 == valorTurno && sqr5 == valorTurno && sqr9 == valorTurno) || 
			(sqr7 == valorTurno && sqr5 == valorTurno && sqr3 == valorTurno) 	
			){


			if (valorTurno == O_val){
				$scope.oGanhou = true;
				opontos ++;
				$scope.opontos = opontos; 	
				$scope.desabilitar();

			}
			else {
				$scope.xGanhou = true;
				xpontos ++;
				$scope.xpontos = xpontos;
				$scope.desabilitar();			
			}

		}else{

			contadorJogadas ++; 
			if(contadorJogadas >= 9){
				$scope.empate = true;
				$scope.desabilitar();

			}

		}
	}


	$scope.reset = function (){

		$scope.sqr1 = "";
		$scope.sqr2 = "";
		$scope.sqr3 = "";
		$scope.sqr4 = "";
		$scope.sqr5 = "";
		$scope.sqr6 = "";
		$scope.sqr7 = "";
		$scope.sqr8 = "";
		$scope.sqr9 = "";

		$scope.Esqr1 = 'btn btn-default';
		$scope.Esqr2 = 'btn btn-default';
		$scope.Esqr3 = 'btn btn-default';
		$scope.Esqr4 = 'btn btn-default';
		$scope.Esqr5 = 'btn btn-default';
		$scope.Esqr6 = 'btn btn-default';
		$scope.Esqr7 = 'btn btn-default';
		$scope.Esqr8 = 'btn btn-default';
		$scope.Esqr9 = 'btn btn-default';


		$scope.Ssqr1 = '';		
		$scope.Ssqr2 = '';		
		$scope.Ssqr3 = '';		
		$scope.Ssqr4 = '';		
		$scope.Ssqr5 = '';		
		$scope.Ssqr6 = '';		
		$scope.Ssqr7 = '';		
		$scope.Ssqr8 = '';		
		$scope.Ssqr9 = '';	

		turno = 1; 
		contadorJogadas = 0; 


	}

	//Resetar o jogo quando clicar no "X" da mensagem/alert
	$scope.fecharRest = function (vari){

		if(vari == 0)
			$scope.empate = !$scope.empate;
		else if(vari == 1)
			$scope.oGanhou = !$scope.oGanhou;
		else if(vari == 2)
			$scope.xGanhou = !$scope.xGanhou;

		$scope.reset(); 
	}


	$scope.desabilitar = function(){
		$scope.Ssqr1 = 'ng-desabled';		
		$scope.Ssqr2 = 'ng-desabled';		
		$scope.Ssqr3 = 'ng-desabled';		
		$scope.Ssqr4 = 'ng-desabled';		
		$scope.Ssqr5 = 'ng-desabled';		
		$scope.Ssqr6 = 'ng-desabled';		
		$scope.Ssqr7 = 'ng-desabled';		
		$scope.Ssqr8 = 'ng-desabled';		
		$scope.Ssqr9 = 'ng-desabled';		
	}

 

});