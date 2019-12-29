var readline = require("readline-sync");
var calculManager = require("./calculManager.js");

do{

	menu();

	var saisie = parseInt(readline.question("Quel est votre choix ? "));

	if (saisie === 1) {

		calculManager.addition(parseInt(readline.question("Quel chiffre voulez-vous additionner ? ")));

	}else if(saisie === 2){

		calculManager.multiplication(parseInt(readline.question("Quel chiffre voulez-vous multiplier ? ")))

	}else if(saisie === 3){
		
		console.log("Fin du programme");
	}

}while(saisie !== 3);

function menu(){
	var txt  = "";

	txt += "1\ Addition des n premiers nombres\n";
	txt += "2\ Multiplication des n premiers nombres\n";
	txt += "3\ Quitter le programme";

	console.log(txt);
}