var database =[{
	username: "Wishmaster",
	password: "HotStuff",
},
{
	username: "Mashire",
	password: "SexyGirl",
}];

var newsfeed = [{
	username: "Wishmaster",
	timeline: "Yooooooo",
},
{
	username: "Mashire",
	timeline: "Hello ^^",
}];

function checkValidAccount(username, password)
{
	for (var i = 0; i < database.length; i++)
	{
		if(database[i].username === username && database[i].password === password)
		{
		return true;
	}
}
return false;
}

function login(username,password)
{
	if(checkValidAccount(username, password))
	{
		console.log(newsfeed);
		}
		else 
		{
			console.log("Sorry incorrect Username and Password");
		}
}
var usernamePrompt = prompt("Enter Username");
var passwordPrompt = prompt("Enter Password");

login(usernamePrompt, passwordPrompt);