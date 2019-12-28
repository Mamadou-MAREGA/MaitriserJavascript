var readline = require("readline-sync");

function divisible(nbre){

	

	if(nbre%3 == 0){

		console.log("Ce nombre est divisible par 3");

	}else{

		console.log("Ce n'est pas divisible par 3");
	}
}

var nombre = parseInt(readline.question("Entrer un nombre "));

divisible(nombre);