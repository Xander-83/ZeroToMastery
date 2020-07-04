var todos = ["code","eat","sleep","stocks"];
for (var i=0; i < todos.length; i++){
    todos[i] = todos[i] + "!";
}

 todos.forEach(function(todo, i) {
     console.log(todo, i);
 })



/*
var counterOne = 0;
while (counterOne < 10) { 
    console.log(counterOne);
    counterOne++
}


var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);
*/