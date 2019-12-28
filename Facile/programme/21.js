var tab = [2,6,10,3,8,7,20];

var som = 0; 

for (var i = 0; i < tab.length; i++) {
	
	if(tab[i] % 2 === 0){
		som += tab[i];
		console.log("Iteration " + i + " = " + som);
	}else{

		console.log("Iteration " + i + " = " + " Non pair");
	}
}
console.log("Le total est  " + som);