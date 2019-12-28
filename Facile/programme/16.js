// const monBtn = document.querySelector("button");
// const monDiv = document.querySelector("div");

// var fin = true;
// monBtn.addEventListener("click",function(){

// 	monDiv.innerHTML = pileOuFace();	

// });
$('button').on("click",function(){

	$('div').html(pileOuFace());
});

function pileOuFace(){

	var random = Math.floor(Math.random() * 2);

	// if (random >=1 )return "face";
	// else return "pile";

	return (random >=1 ) ? "face" : "pile";
}