// Arrays
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift ();
array.sort ();
array.push ("Kiwi");
delete array[0];
array.reverse();


var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log (array2[0][2]);