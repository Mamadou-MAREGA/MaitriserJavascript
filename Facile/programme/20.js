var readline = require("readline-sync");

var saisie  = parseInt(readline.question("Factoriel : "));

var fact = factorielle(saisie);
console.log("Le résultat de la factorielle est " + fact);

function factorielle(n){
	if(n > 1){

		return n * factorielle(n-1);
	}else{

		return 1;
	}
}

// for (var i = 1; i <=saisie; i++) {
	
// 	fact *= i;
// 	console.log("Etape " + i + " : " + fact);
// }
// console.log("Le résultat de la factorielle est " + fact);