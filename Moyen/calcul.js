var calculManager = {

	addition : function(nombre){

		var total = 0;

		for (var i = 1; i <=nombre; i++) {
			
			total += i;
		}
		return total;
	},
	factorielle : function(nombre){

		var total = 1;

		for (var i = 1; i <= nombre; i++) {
			
			total *= i;

		}
		return total;
	}
}
