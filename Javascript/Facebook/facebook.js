var database = [
    {
        username: "Wishmaster",
        password: "HotStuff",
    },
    {
        username: "Mashire",
        password: "SexyGirl",
    }
];

var newsFeed = [
    {
        username: "Wishmaster",
        timeline: "I'm awesome",
    },
    {
        username: "Mashire",
        timeline: "I'm sexy",
    }
];

function isUserValid(username, password){
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn(username, password) {
    //console.log(isUserValid(username, password));
if (isUserValid(username, password)){
console.log(newsFeed);}
 else {
     alert("Sorry, wrong username and password");
 }
}
    var userNamePrompt = prompt("What's your username?");
    var passwordPrompt = prompt("Type in your password");

    signIn(userNamePrompt, passwordPrompt);