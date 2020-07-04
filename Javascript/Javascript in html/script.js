function sayHello() {
    console.log("Hello");
}

sayHello();


var sayBye = function() {
    console.log("Bye"); 
}
sayBye();

function sing() {
	console.log("Ahhh");
	console.log("Nooo");    
}
sing();


function sing(song) {
	console.log(song);
}

sing("da");
sing("ga");
sing("fa");

function multiply(a, b) {
	if (a > 10 || b > 10){
		return "that's too hard";
	}else {
	return a * b;
}
}

multiply(5,1);

function multiply(a, b) {
	if (a > 10 || b > 10){
		return "that's too hard";
	}else {
	return a * b;
}
}

multiply(5,1);

function multiply(a, b) {	
	return a * b;
}

alert(multiply(5,1));

function multiply(a, b) {	
	return a * b;
}
var total = multiply(5,3);
alert(total);