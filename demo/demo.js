{
    var a = 5;
}
console.log(a);
class Pet {
    constructor(props) {
        this.props = props;
    }
    getName() { //method for the pet class that subclasses will inherit
        return this.props.name;
    }
    getSpecies() { //method for the pet class that subclasses will inherit
        return this.props.species;
    }
    getSpeech() { //method for the pet class that subclasses will inherit
        return "I make this sound: ";
    }
    getIdentity = () => { // shows property of class {name: gis, species: ghgui}
        console.log(this);
    }
    getSum = (a,b) => {
     return a + b
}
}

class Cat extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "cat";
    }
    getSpeech() {
        return super.getSpeech() + "Meow!"; // call super method for subclass method
    }

}

class Dog extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "dog";
    }
    getSpeech() {
        return super.getSpeech() + "Ruff Ruff!"; // call super method for subclass method
    }

}
    function sayName(pet) {
        console.log(`My name is ${pet.getName()}, and I am a ${pet.getSpecies()}`);
        console.log(`${pet.getSpeech()}`);
    }
var myPet = new Cat({name:"Luna"});
sayName(myPet);
myPet.getIdentity();
//Assign the method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity;
// call the new function using the myIdentity
var myDog = new Dog({name:"Fido"});
sayName(myDog);
myDog.getIdentity(); 
console.log(myDog.getSum(10,20));