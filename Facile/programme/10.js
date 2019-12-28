var readline = require("readline-sync");

var personnage = {};

var nom = readline.question("Quel est votre nom ? ");

var age = parseInt(readline.question("Quel est votre age ? "));

personnage.nom = nom ;
personnage.age = age ;
personnage.carac = {

	force : 7,
	intel : 8,
	agi : 5
};
console.log(personnage);