// 1. ----------------------------------------- DONE --------------------------------------------------------------

//  function getPromise(message, delay) {
//         return new Promise(function(resolve, reject) {
//             setTimeout(() => {
//                     resolve(message);

//             }, delay);
//         });
//  }

//  getPromise("test promise", 2000).then(function(data) {
//         console.log(data);
//     });

// Результат: через 2 сек в консолі виводиться "test promise"

// 2.----------------------------------------- DONE --------------------------------------------------------------

// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//       let result = 1;
//       for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//           result *= arr[i];
//         } else {
//           reject("Error! Incorrect array!");
//         }
//       }
//       resolve(result);
//     });
//   }
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result)); // чи треба було змінювати цю строку з використанням catch замість then ??? ".catch(error => console.log(error))""Error! Incorrect array!"



// 3.----------------------------------------- DONE --------------------------------------------------------------


// new Promise(function (resolve, reject) {
//   let number = prompt("Write some number"); 
//   if (isNaN(number)){
//     reject();
//   } else {
//     resolve(number); 
//   }
// }).catch(function (error) {
//     return new Promise(function (resolve, reject) {
//       let number;
//       function ifNumber() {
//         number = prompt("Write some number");
//         if (isNaN(number)) {
//           ifNumber();
//         } else {
//           resolve(number);
//         }
//       }
//       ifNumber();
      
//     });
//   })
//   .then(function (result) {
//     console.log(result); 
//   });

// 4.
// Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд). Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, то одиниця повинна дочекатися виведення  нуля і тільки потім почати свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, який резолвиться поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.



const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  
  
  for (let i = 0; i < 10; i++) {
    const arr = [0, 1000, 2000, 3000];
    let time = arr[Math.floor(Math.random() * arr.length)];
    const waiting = await delay(i, time);
    console.log(waiting); // начебто зробив те що було у завданні.
  }
}

showNumbers();

// Результат:
// з різним рендомним інтервалом (наприклад від 0 до 3 сек) в консоль послідовно  виводяться числа 0,1,2,3,4,5,6,7,8,9 Задачу потрібно реалізувати без застосування промісів. Переписати функцію showNumbers, використовуючи конструкцію async/await.
