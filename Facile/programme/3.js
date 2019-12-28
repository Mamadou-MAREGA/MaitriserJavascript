//Réaliser un programme qui demande à l'utilisateur de saisir la puissance de 2 qu'il souhaite afficher
var readline = require("readline-sync");

const PUISSANCE = 2;

var saisie = parseInt(readline.question("Puissance voulue ?"));

console.log(PUISSANCE + " à la puissance " + saisie + " = " + Math.pow(PUISSANCE, saisie));