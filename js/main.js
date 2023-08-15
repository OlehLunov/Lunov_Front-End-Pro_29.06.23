class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Car {
    constructor(brand, model, manufacture, color, owner) {
        this.brand = brand;
        this.model = model;
        this.manufacture = manufacture;
        this.color = color;
        this.owner = owner;

        if (this.owner.age < 18){
            console.log(`${this.owner.name} треба трошки потерпіти! 
            Автомобіль: ${this.brand}, ${this.model}, ${this.manufacture}, ${this.color} поки що постоІть у гаражі!`);
        } else {
            console.log(`Автомобіль: ${this.brand}, ${this.model}, ${this.manufacture}, ${this.color}. 
            Властник: ${this.owner.name}, ${this.owner.age} - років.`);
        }
    }
}

let owner1 = new Human("Олег", 31);
let owner2 = new Human("Артем", 16);
let owner3 = new Human("Владислав", 30);
let owner4 = new Human("Алла", 27);

let car1 = new Car("Mercedes", "gt-63", 2023, "black", owner1);
let car2 = new Car("Peugeot", "307", 2005, "red", owner2);
let car3 = new Car("Audi", "RS6", 2018, "yellow", owner3);
let car4 = new Car("Toyota", "Rav4", 2019, "blue", owner4);

