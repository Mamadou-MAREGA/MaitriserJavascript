var readline = require("readline-sync");

var saisie = parseInt(readline.question("Quelle table de multiplication voulez vous affichez ?  "));

for (var i = 1 ; i <= 10; i++) {
	
	var resultat = saisie * i;
	console.log(saisie + " * " + i + " = " + resultat);
}