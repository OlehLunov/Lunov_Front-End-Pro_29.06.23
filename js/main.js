class Student {
    constructor(name, lastname, birth,grades) {
        this.name = name;
        this.lastname = lastname;
        this.birth = birth;
        this.grades = grades;
    }
    Age(){
        const year = new Date().getFullYear();
        return year - this.birth;
    }
    AveregePoints(){
        const sum = studentPoints.reduce((total, currentValue) => total + currentValue, 0);
        return sum / this.grades.length;
    }
}


let studentPoints = [];