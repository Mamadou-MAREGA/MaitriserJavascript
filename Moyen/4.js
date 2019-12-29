var toto = {
	nom : "toto",
	age : 25,
	poids : 80,
	taille : 180,

	affichage : function(){

		var txt = "Nom : " + this.nom + "\n";
		txt += "age : " + this.age + "\n";
		txt += "poids : " + this.poids + "\n";
		txt += "taille : " + this.taille ;

		console.log(txt);
	},

	getForce : function(){

		return (this.poids * this.taille) / this.age ;

	}
}


var marcel = {
	nom : "marcel",
	age : 32,
	poids : 100,
	taille : 175,

	affichage : function(){

		var txt = "Nom : " + this.nom + "\n";
		txt += "age : " + this.age + "\n";
		txt += "poids : " + this.poids + "\n";
		txt += "taille : " + this.taille ;

		console.log(txt);
	},

	getForce : function(){

		return (this.poids * this.taille) / this.age ;
		
	}
}


if(toto.getForce() > marcel.getForce()){

	console.log("Toto est plus fort que Marcel ! Voici ses informations");
	toto.affichage();
	console.log(`Force : ${toto.getForce()}`);

}else{

	console.log("Marcel est plus fort que Toto ! Voici ses informations");
	marcel.affichage();
	console.log(`Force : ${toto.getForce()}`);
}


