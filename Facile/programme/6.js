var readline = require("readline-sync");

var chiffre = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));

var fin = false;

while(!fin){

	if (isNaN(chiffre)) {
	console.log("Veillez saisir un chiffre svp!!!");
	var chiffre = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
	}else{
		console.log("Chiffre saisi :  " + chiffre);
		fin = true ;
	}
}
