function compterMot(mot){

	if(mot.length<8){
		console.log("Le mot contient " + " fait " + mot.length + "caractères");
	}else{
		console.log("Le mot fait plus de 8 caractères");
	}
}

var mot = "Manger";
var mot1 = "Anticonstitutionnellement";

compterMot(mot);
compterMot(mot1);