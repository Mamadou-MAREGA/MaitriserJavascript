const pseudo = document.querySelector('#pseudo');
const chiffreVoulu = document.querySelector('#chiffreVoulu');
const addition = document.querySelector("#addition");
const factorielle = document.querySelector("#factorielle");
const resultat = document.querySelector('#resultat');

function afficherResultat(calcul){

	resultat.innerHTML = "<h1>Bonjour " + pseudo.value +  "</h1>";
	resultat.innerHTML = "<div> Le resultat demande est " + calcul + "</div>" ;
}

addition.addEventListener("click",function(){

	var calculResultat = calculManager.addition(parseInt(chiffreVoulu.value));
	afficherResultat(calculResultat);
});

factorielle.addEventListener("click",function(){

	var calculResultat = calculManager.factorielle(parseInt(chiffreVoulu.value));
	afficherResultat(calculResultat);
});