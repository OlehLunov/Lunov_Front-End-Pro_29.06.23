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

        if (this.owner.age >= 18){
            console.log(`Автомобіль: ${this.brand}, ${this.model}, ${this.manufacture}, ${this.color}.`);
            console.log(`Властник: ${this.owner.name}, ${this.owner.age} - років`);
            console.log(`Автомобіль: ${this.brand}, ${this.model}, ${this.manufacture}, ${this.color}.`);
        } else {
            console.log(`${this.owner.name} треба потерпіти ще один рік!`);
        }
    }
}

const owner1 = new Human("Іван", 25);
const owner2 = new Human("Марія", 17);
const owner3 = new Human("Петро", 30);

const car1 = new Car("Toyota", "Camry", 2020, "ВС1234АВ", owner1);
const car2 = new Car("Ford", "Mustang", 2018, "ВН5678ЕЕ", owner2);
const car3 = new Car("Chevrolet", "Cruze", 2015, "ВІ9012КК", owner3);