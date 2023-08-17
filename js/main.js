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
        /*const averageGrade = this.AveragePoints();*/
        let averageAttendance = 0;

        for (let i = 0; i <= this.attendance.length; i++){
            if (this.attendance[i] === true){
                averageAttendance++
            }
        }
        if (this.AveragePoints() > 90 && averageAttendance > 0.9){
            return "Молодець!";
        } else if (this.AveragePoints()> 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const studentGrades = [85, 92, 90, 95, 88];
const student = new Student("Іван", "Петров", 2000, studentGrades);



student.present(0);
student.present(1);
student.present(2);
student.present(3);
student.absent(4);



console.log(`Ім'я: ${student.name} ${student.lastname}`);
console.log(`Вік: ${student.Age()}`);
console.log(`Середній бал: ${student.AveragePoints()}`);
console.log(`Відвідуванність: ${student.attendance}`);
console.log(`Відгук вчителя: ${student.summary()}`);

