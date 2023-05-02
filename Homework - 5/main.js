// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES

// 1. - Done

// class Circle {
//     constructor (x, y, radius){
//         this.x = x;
//         this.y = y;
//         this.radius = radius;

//     }

//     getLength() {
//         return 2 * Math.PI * this.radius;
//     }

//     static getLengthRadius(radius) {
//         return 2 * Math.PI * this.radius;
//     }

//     getCopy() {
//         return new Circle(this.x, this.y, this.radius);
//     }

//     static getConstruct(x, y, radius){
//         return new Circle(x, y, radius)
//     }

//     isPointInside(x, y) {
//         const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
//         return distance <= this.radius;
//     }

//     toString() {
//         return `Circle at (${this.x}, ${this.y}) with radius ${this.radius}`;
//     }

// }

// 2. - Done-------------------------------------------------------------------------------------

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// }
// let mentor = {
//                 course: "JS fundamental",
//                 duration: 3,
//                 direction: "web-development"
//             };
// console.log(propsCount(mentor));

// 3. - Done-------------------------------------------------------------------------------------

// class Person{
//     constructor (name, surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName(){
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// class Student extends Person{

//     constructor(name, surname, year) {
//         super (name, surname);
//         this.year = year;
//     }

//     showFullName(midleName){
//         console.log(`${this.name} ${this.surname} ${midleName}`);
//     }

//     showCourse(){
//         let currentDate = new Date;
//         let currentYear = currentDate.getFullYear();
//         let course = currentYear - this.year + 1;
//         if (course < 1) {
//             course = 1;
//             } else if (course > 6) {
//             course = 6;
//             }
//             return course;
//         }

// }

// const stud1 = new Student("Petro", "Petrenko", 2019);
// stud1.showFullName("Petrovych");
// console.log("Current course: " + stud1.showCourse());

// 4. Done-------------------------------------------------------------------------------------


// class marker {
//     constructor(color, inkLevel) {
//       this.color = color;
//       this.inkLevel = inkLevel;
//     }

//     printText(text) {
//       for (let i = 0; i < text.length; i++) {
//         const symbol = text[i];
//         if (symbol !== " " && this.inkLevel > 0) {
//           process.stdout.write(symbol);
//           this.inkLevel -= 0.5;
//         } else if (this.inkLevel <= 0) {
//           console.log("Out of ink!");
//           break;
//         } else {
//           process.stdout.write(symbol);
//         }
//       }
//       console.log();
//     }
//   }

//   class RefillableMarker extends marker {
//     refill() {
//       this.inkLevel = 100;
//     }
//   }

  
// const marker = new marker("green", 75);

// marker.printText("Hello World!");

// const refillableMarker = new RefillableMarker("blue", 25);

// refillableMarker.printText("JavaScript is awesome!");

// refillableMarker.refill();

// refillableMarker.printText("JavaScript is still awesome!");




// 5. - Done-------------------------------------------------------------------------------------


// class Worker {
//   _experience = 1.2;
//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//     this._experience = 1.2;
//   }

//   showSalary() {
//     let salary = this.dayRate * this.workingDays;
//     console.log(`${this.fullName} salary: ${salary}`);
//     return salary;
//   }

//   showSalaryWithExperience() {
//     let salaryExp = this.dayRate * this.workingDays * this._experience;
//     console.log(`${this.fullName} salary with new expirience : ${salaryExp}`);
//     return salaryExp;
//   }

//   get experience() {
//     return this._experience;
//   }

//   set experience(value) {
//     this._experience = value;
//   }
// }

//     let worker1 = new Worker("John Johnson", 20, 23);
//     console.log(worker1.fullName);
//     worker1.showSalary();
//     console.log("New experience: " + worker1._experience);
//     worker1.showSalaryWithExperience();
//     worker1._experience = 1.5;
//     console.log("New experience: " + worker1._experience);
//     worker1.showSalaryWithExperience();

//     let worker2 = new Worker("Tom Tomson", 48, 22);
//     let worker3 = new Worker("Andy Ander", 29, 23);

//     let workers = [worker1, worker2, worker3];

//     workers.sort((a, b) => {
//     return (
//         a.showSalaryWithExperience() - b.showSalaryWithExperience()
//     );
//     });

//     console.log("Sorted salary:");
//     workers.forEach((worker) => {
//     worker.showSalaryWithExperience();
//     });

