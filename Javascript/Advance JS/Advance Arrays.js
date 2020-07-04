const array = [1, 2, 10, 16];
const double =  []
const newArray = array.forEach((num) => {
	double.push(num * 2);
});
console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map(num => num * 2); //Loop each array and return a new array
	  //map always needs a return 


console.log('map', mapArray);

// Filter
const array = [1, 2, 10, 16];
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// Reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 5);
console.log('reduce'reduceArray);
