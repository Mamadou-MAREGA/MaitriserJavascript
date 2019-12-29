var classe = {

	marc : {

		nom : "Marc",
		age : 21,
		note : [12,15,13,10,7]
	},

	eric : {

		nom : "Eric",
		age : 18,
		note : [5,15,3,9,17]
	},

	marie : {

		nom : "Marie",
		age : 22,
		note : [10,10,11,12,11]
	},

	afficherEleve : function(eleve){

		console.log("Nom : " + eleve.nom);
		console.log("Age : " + eleve.age);
		console.log("Notes : ");

		var noteTxt = " ";

		for (var i = 0; i < eleve.note.length; i++) {
			
			noteTxt += " num " + i + " = " + eleve.note[i] + "\n";
		}
		console.log(noteTxt);
	},

	calculMoyenneEleve : function(eleve){
		var moyenne = 0;

		for (var i = 0; i < eleve.note.length; i++) {

			moyenne += eleve.note[i] ;
		}

		return moyenne/eleve.note.length;
	},

	afficherClasse : function(){

		this.afficherEleve(this.marc);
		this.afficherEleve(this.eric);
		this.afficherEleve(this.marie);

	},

	calculMoyenneClasse : function(){

		var moyenneMarc = this.calculMoyenneEleve(this.marc);
		var moyenneEric = this.calculMoyenneEleve(this.eric);
		var moyenneMarie = this.calculMoyenneEleve(this.marie);

		return moyenneMarc + moyenneEric + moyenneMarie / 3 ; 

	},
}
console.log("Voici vos élèves ");
classe.afficherClasse();
console.log("Voic la moyenne de la classe : " + classe.calculMoyenneClasse());