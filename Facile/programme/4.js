var readline = require("readline-sync");

var nom  = readline.question("Quel est votre nom ? ");
var prenom  = readline.question("Quel est votre prenom ? ");
var age  = parseInt(readline.question("Quel est votre age ? "));

console.log("-------------------------------------------------------------------------");
console.log("-----------------------------Bienvenue-----------------------------------");
console.log("-------------------------------------------------------------------------");

console.log("Votre nom est " + nom );
console.log("Votre prenom est " + prenom );
console.log("Votre age est " + age );
