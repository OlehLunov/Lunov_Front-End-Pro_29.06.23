class Student {
    constructor(name, lastname, birth, grades) {
        this.name = name;
        this.lastname = lastname;
        this.birth = birth;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    Age() {
        const year = new Date().getFullYear();
        return year - this.birth;
    }

    AveragePoints() {
        const sum = this.grades.reduce((total, currentValue) => total + currentValue, 0);
        return sum / this.grades.length;
    }

    present(i) {
        if (i >= 0 && i < this.attendance.length){
            this.attendance[i] = true;
        }
    }
    absent(i) {
        if (i >= 0 && i < this.attendance.length){
            this.attendance[i] = false;
        }
    }

    summary(){

        let attendanceCount = 0;

        for (let i = 0; i < this.attendance.length; i++){
            if (this.attendance[i] === true){
                attendanceCount++
            }
        }

        const attendanceRating = attendanceCount / this.attendance.length;

        if (this.AveragePoints() > 90 && attendanceRating > 0.9){
            return "Молодець!";
        } else if (this.AveragePoints() >= 90 || attendanceRating >= 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Олег", "Луньов", 2000,);
student1.present(0);
student1.present(1);
student1.present(2);
student1.present(3);
student1.present(5);
student1.present(6);
student1.present(7);
student1.present(8);
student1.present(9);
student1.present(10);
student1.present(11);
student1.present(12);
student1.present(13);
student1.present(14);
student1.present(15);
student1.present(16);
student1.present(17);
student1.present(18);
student1.present(19);
student1.present(20);
student1.present(21);
student1.present(22);
student1.present(23);
student1.present(24);


const student2 = new Student("Олег", "Луньов", 2000,);
student2.present(0);
student2.absent(1);

const student3 = new Student("Олег", "Луньов", 2000,);
student3.present(0);
student3.absent(1);

student1.grades = [90, 90, 95];
student2.grades = [92, 88, 91];
student3.grades = [78, 80, 82];

console.log(`Ім'я: ${student1.name} ${student1.lastname}`);
console.log(`Вік: ${student1.Age()}`);
console.log(`Середній бал: ${student1.AveragePoints()}`);
console.log(`Відвідуванність: ${student1.attendance}`);
console.log(`Відгук вчителя: ${student1.summary()}`);

console.log(`Ім'я: ${student2.name} ${student2.lastname}`);
console.log(`Вік: ${student2.Age()}`);
console.log(`Середній бал: ${student2.AveragePoints()}`);
console.log(`Відвідуванність: ${student2.attendance}`);
console.log(`Відгук вчителя: ${student2.summary()}`);

console.log(`Ім'я: ${student3.name} ${student3.lastname}`);
console.log(`Вік: ${student3.Age()}`);
console.log(`Середній бал: ${student3.AveragePoints()}`);
console.log(`Відвідуванність: ${student3.attendance}`);
console.log(`Відгук вчителя: ${student3.summary()}`);

