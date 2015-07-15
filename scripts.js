var spans = document.getElementsByClassName("highlight");
var colorInput = document.getElementById("color").value;
var but = document.getElementById("button");

console.log(spans);
console.log(colorInput);
console.log(button);

but.onClick = function(){
	console.log("Ive been clicked")
}