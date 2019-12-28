const monDiv = document.querySelector("div");
const monBtn = document.querySelector("button");

monBtn.addEventListener("click",function(){

	var txt = " ";

	for (var i = 1; i <=10; i++) {
		
		txt += " 3 * " + i + " = " + (3*i) + "<br/>";
	}

	monDiv.innerHTML = txt;
});