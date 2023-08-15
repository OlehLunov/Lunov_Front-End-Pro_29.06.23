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
