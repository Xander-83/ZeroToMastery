// let + const

const player = "Wishmaster";
let experience = 100;
let warriorLevel = false;

if (experience > 90) {
	let warriorLevel = true;
	console.log warriorLevel; // true 
}

console.log warriorLevel; // false

const obj = { // obj can't be resign or change
	player: 'Wishmaster', // properties can be change
	experience: 100,
	warriorLevel: true
}

const { player, experience } = obj;  


//Descructurinf
const obj = {
	player: 'Wishmaster';
	level: 100;
	healer: false;
}
obj.level = 9000; 

/*
const player = obj.player;
const experience = obj.experience;    <--- Slow way. Check below
let healer: = obj.healer;
*/
const { player, experience } = obj; // <-- Select the properties you want from the obj,
let { healer } = obj;

const name = 'Wishmaster Akunin';

const obj = {
	[name]: 'hello',
}

//Object Properties

const name = 'Wishmaster Akunin';

const obj  = {
	[name]: 'hello',
	['ray' + 'smith']: 'hihi',
	[1 + 2]: 'no way'
}

const a = "Simon";
const b = 10;
const c = true;

/*const obj = {
	a = a,
	b = b,				<--- Old way
	c = c,
}*/

const obj = {
	a , b, c 			// <--- New way 
}
//Template Strings
const oldGreeting = "Hello " + name + " you seem to be doing " + greeting + "!";

function greet(name =' ', greeting='awesome');

//const newGreeting = `Hello ${name} you seem to be doing ${greeting};  <-- sublime text doesn't accept $

// Default arguments

 function greet(name='', age=30, pet='cat'){ // Default Arguments
 	return 'Hello ${name}, you must be ${age} years old. Nice ${pet}';

}

//Symbol
let sym1 = Symbol();
let sym2 = Symbol('food');
let sym3 = Symbol('food');

//arrow functions
function add (a,b) {
	return a + b ; 				// <--- Old Way
}

const add = (a, b) => a + b;  // <--- New Way


// ES7

const pets = ['cat', 'dog', 'bird'];
pets.includes[dog];
//statement is true
//Exponation
const square = (x) => x**2;
const cube = (y) => y**3;


// ES8
let obj = {
	username: 'Wish',
	username: 'Mashire',
	username: 'Juvia'
}

Object.entries(obj).map(value=> {
	return value[1] + value[0].replace('username', '');
})


// ES10

const array = [1,[2,3],[4,5]]
array.flat()

//Advance Loops
//Old style
for ( let i = 0; i < basket.length; i++){
	console.log(basket[i]);
}
basket.forEach(item => {
	console.log(item);
})

// For of 
// Iterating - arrays, strings
const basket = ['Apple', 'Banana', 'Orange', ]
for (item of basket) {
	console.log(item);
}
// For In
// Enumerating - objects
const detailedBasket = {apples: 5, oranges: 10, grapes: 1000}
for (item in detailedBasket){
	console.log(item)
}