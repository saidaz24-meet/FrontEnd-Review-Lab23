function  changeBackgroundColor(color){
	document.body.style.backgroundColor = color; 
}

function randombg(){
	const colors = ["red","green","brown","white","black","orange","yellow","purple"];
	document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
