//Ternary Statements

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You May Enter" : "Access Denied";

function condition() {
	if (isUserValid(true)) {
		return "You May Enter";
	} else {
		return "Access Denied";
	}
}

var answer2 = condition();