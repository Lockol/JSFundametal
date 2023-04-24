// 1. - Done

    // function createArray(start, end) {
    //     let arr = [];
    //     for (let i = start; i <= end; i++) {
    //         arr.push(i);
    //     }
    //     return arr;
    // }
    // let arr = createArray (2, 9);
    // console.log(arr); 


// 2.- Done

    // function numbers(a, b) {
    //     let value = 1;
    
    //     for (let i = a; i <= b; i++) {
    //     for (let k = 1; k <= value; k++) {
    //         console.log(i);
    //     }
    //     value++;
    //     }
    // }
    
    // numbers(3, 6);


// 3 - Done 

    //(3.1)
    // let randArray = [];
    // for (let i = 1; i < 6; i++) {
    //     randArray.push(Math.floor(Math.random() * 500));
    // }
    // console.log(randArray);

    //(3.2)  
    //     function randArray(k) {
    //     let arr = [];
    //     for (let i = 0; i < k; i++) {
    //       arr.push(Math.floor(Math.random() * 500));
    //     }
    //     return arr;
    //   }
    // let arr = randArray(5);
    // console.log(arr);


// // 4. - Done

    // function compact(arr) {
    //     return [...new Set(arr)];
    // }  
    // const arr = [5, 3, 4, 5,6,7,3, 5,6,3];
    // const arr2 = compact(arr);
    // console.log(arr2) ; // [5,3,4,6,7]


// 5. - Done

    // function funcName(arr) {
    //     const arrOfTypeNumbers = [];
    //     const arrOfTypeStrings = [];
    
    //     for (let i = 0; i < arr.length; i++) {
    //       const current = arr[i];
    
    //       if (typeof current === 'number') {
    //         arrOfTypeNumbers.push(current);
    //       } else if (Array.isArray(current)) {
    //         for (let j = 0; j < current.length; j++) {
    //           const innerCurrent = current[j];
    //           if (typeof innerCurrent === 'number') {
    //             arrOfTypeNumbers.push(innerCurrent);
    //           } else if (typeof innerCurrent === 'string') {
    //             arrOfTypeStrings.push(innerCurrent);
    //           }
    //         }
    //       } else if (typeof current === 'string') {
    //         arrOfTypeStrings.push(current);
    //       }
    //     }
    
    //     return [arrOfTypeNumbers, arrOfTypeStrings];
    //   }
    
    //   const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
    //   const arrNew = funcName(arr);
    //   console.log(arrNew);

    
// 6. - Done

    // function calc(a, b, op) {
    //     let result = null;
    //     if (op == 1) {
    //         result = a - b;
    //     } else if (op == 2) {
    //         result = a * b;
    //     } else if (op == 3) {
    //         result = a / b;
    //     } else {
    //         result = a + b;
    //     }
    //     return result;          

    // }
    // console.log(calc(10, 3, 3));
    
    
// 7  - Done

//    (7.1)
    // function findUnique(arr) {
    //     return new Set(arr).size !== arr.length;
    // }
    // let arr = [1, 2, 3, 5, 3];
    // if (findUnique(arr)) {
    //     console.log('true')
    // } else {
    //     console.log('false')};

    // (7.2)
        // function findUnique(arr) {
        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr.indexOf(arr[i]) !== i) {
        //             return false;
        //         }
        //     }
        // return true;
        // }
        // console.log(findUnique([1, 2, 3, 5, 3]));
    
// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.  (потребує використання closure)
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true 
// tom("pass_for_tom"); //повертає false 


