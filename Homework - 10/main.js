// 10. ECMASCRIPT 2015 (ES6)





// 1.  ---------------------------------------------- Done ----------------------------------------------


// Напишіть код в /* Ваш код /, щоб він працював
// ```js
// let names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob",
// };

// let {first :f, second :x, fifth = 'Name №5'} = names;

// console.log(f); // "Tom"
// console.log(x); // "Ray"
// console.log(fifth); // "Name №5"



// 2.---------------------------------------------- Done ----------------------------------------------


// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// let {names, ages} = data;

// let [,name2,, name4] = names;
// let [,age2,, age4] = ages;

// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26



// 3.---------------------------------------------- Done ----------------------------------------------


// function mul(...params) {
//     let result = 1;
//     let notNumbres = false;

//     for (let i = 0; i < params.length; i++) {
//         if (typeof params[i] === "number") {
//             result *= params[i];
//             notNumbres = true;
//     }
//     }
//     return notNumbres ? result : 0;
// } 
      
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0





// 4.----------------------------------------------- Done ----------------------------------------------



// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);

// function mapBuilder(keysArray, valuesArrays) {
//     let map = new Map();
//     for (let i = 0; i < keysArray.length; i++) {
//     map.set(keysArray[i], valuesArrays[i])}
//     return map;
// }

// console.log(map.size); // 4
// console.log(map.get(2)); // "span"





// 5.---------------------------------------------- Done ----------------------------------------------

// За допомгою коду у нижче створюється масив, використовуючи цикл, до масиву записуються три функції. Логіка функцій проста, в консоль виводиться значення лічильника на момент створення функції.
// На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
// Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику). 
// js
// let arr = [];

// for (let i = 0; i <= 2; i++) {
//    arr[i] = function () {
//       console.log(i);
//    };
// }

// arr[0](); // 0
// arr[arr.length - 1](); // 2
// ```