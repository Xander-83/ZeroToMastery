
/*
function first() {
	var greet = 'Hi';
	fuction second() {
	alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc(); 
*/

const first = () => {
	const greet = 'Hi';	// Parent does not have access to the child, therefore won't know const name = 'Wish'

		const second = () => {
			const name = 'Wish'
			alert(greet);		// Child will have access to the Parent. Ex greet will remember const greet = 'Hi'
}
				return second;
}

const newFunch = first();
newFunc();

//Closurers = a function ran. the function executed. It's never going to run again but it'll remember the references to those variables.
//So the child scope always has access to the parent scope.

//Currying

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10); // Will multiple by 5 in curriedMultiply
50

// Compose to combine two function to make a third
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

