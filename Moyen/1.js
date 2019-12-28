var readline = require("readline-sync");

var tab = [3,5,10,12];

var saisie = " ";
while( saisie !== "Q" && saisie !== "q"){

	menu();

	var saisie = readline.question("Quel est votre choix ? ");

	switch(saisie){
		//case a pour traiter le cas petit a sans le break a la fin
		case "a" :
		case "A" : ajouterChiffre();
		break ;
		case "b" :
		case "B" : afficherTab();
		break ;
		case "q" :
		case "Q" : console.log("A plus");
		break ; 
		default : console.log("Je n'ai pas compris");
	}

}

function menu(){
	
	var txt = "";
	txt += "A\ Ajouter un chiffre \n"; 
	txt += "B\ Afficher le tableau \n"; 
	txt += "c\ Quitter le programme"; 

	console.log(txt);
}

function ajouterChiffre(){
	var chiffre = parseInt(readline.question("Entrer un chiffre "));
	var positionToPush = getPosition(tab,chiffre);
	tab.splice(positionToPush,0,chiffre);
}

function getPosition(t,c){

	for (var i = 0; i < t.length; i++) {
		
		if (t[i] > c) {

			return i;
		}
	}

	return t.length;

}

function afficherTab(){
	console.log(tab);
}