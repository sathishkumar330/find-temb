var temb=prompt("Enter the temb");

if(temb<0){
	console.log("Freezing whether");
}
else if(temb<=10){
	console.log("very cold whether");
}
else if(temb<=20){
	console.log("cold whether");
}
else if(temb<=30){
	console.log("normal temb");
}
else if(temb<=40){
	console.log("hot temb");
}
else if(temb>40){
	console.log("very hot");
}