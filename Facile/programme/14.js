var nbClic = 0;
const monDiv = document.querySelector("div");
function incrementer(){
 
	nbClic++;
	monDiv.innerHTML = "Vous avez cliqué " + nbClic + " fois";
}