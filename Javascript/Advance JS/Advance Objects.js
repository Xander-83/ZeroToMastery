
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
}
    introduce() {
        console.log("Hello I am ${this.name}, I'm a ${this.type}");
    }
}

class Warrior extends Player {
    constructor(name, type){
        super (name, type)
        }
        play(){
            console.log("Playing");
        }
}

const Warrior1 = new Warrior ("Wishmaster", "Warrior");
const Warrior2 = new Warrior ("Mashire", "Healer");
 