//global vars
		var wins = 0;
		var losses = 0;
		var guessesLeft = 10;
		var allGuesses=[];
		var i=0;
		var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

		var randomLetter = letters[Math.floor(Math.random()*letters.length)];
		console.log("initial letter: "+randomLetter);
		document.onkeyup= function(event){
			
			var key = event.key;
			allGuesses[i]=key;
			i++;
			var guesses = document.getElementById("guesses");

			guesses.innerHTML = "Your Guesses so far: " + allGuesses;
			if(key=="a"||key=="b"||key=="c"||key=="d"||key=="e"||key=="f"||key=="g"||key=="h"||key=="i"||key=="j"||key=="k"||key=="l"||key=="m"||key=="n"||key=="o"||key=="p"||key=="q"||key=="r"||key=="s"||key=="t"||key=="u"||key=="v"||key=="w"||key=="x"||key=="y"||key=="z"){

				if(key!=randomLetter){
					guessesLeft--;

					var counter = document.getElementById("guessesLeft");

					counter.innerHTML = "Guesses Left: " + guessesLeft;
				}

				else{
					wins++;

					var winner = document.getElementById("wins");

					winner.innerHTML = "Wins: " + wins;

					gameReset();
				}
				if(guessesLeft==0){
					losses++;

					var lose = document.getElementById("losses");

					lose.innerHTML = "Losses: " + losses;
					gameReset();
				}
				function gameReset(){ 
					guessesLeft=10;
					var counter = document.getElementById("guessesLeft");
					counter.innerHTML = "Guesses Left: " + guessesLeft;
					randomLetter = letters[Math.floor(Math.random()*letters.length)];
					allGuesses=[];
					i=0;
					console.log(randomLetter);

				}
			}

		}