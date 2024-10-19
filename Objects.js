//reference type

var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

console.log(object1 == object2);

console.log(object1 == object2);

//context vs scope

console.log(this); 

//instantiation

class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log('hey this is '+this.name + ' and my type is '+this.type);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
    
    }

    perform(){
        console.log(this.name +" performs ");
    }
}

var wizard = new Wizard("Rakesh", "Sorceror");

wizard.introduce();
wizard.perform();

