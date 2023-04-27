// DEBUGGING. HANDLING EXCEPTIONS


// 1.- Done

// function sumSliceArray(arr, first, second) {
//     if (typeof first !== 'number' || typeof second !== 'number') {
//       throw new Error('Not a number');
//     }
//     if (first >= arr.length || second >= arr.length) {
//       throw new Error('out of range');
//     }
//     return arr[first] + arr[second];
//   }
  
//   const arr = [1, 2, 3, 4, 5];
//   try {
//     console.log(sumSliceArray(arr, 2, 3)); 
//   } catch (err) {
//     console.error(err);
//   }
  
//   try {
//     console.log(sumSliceArray(arr, "1", 3)); 
//   } catch (err) {
//     console.error(err);
//   }



// 2. - Done

    // function checkAge() {
    //     let yourName = prompt('Your name is ');
    //     let yourAge = prompt('Your age is ');
    //     let yourStatus = prompt('Your status is (адмін, модератор, користувач)');

    //     try {
    //         if (!yourName) {
    //             throw new Error('The field is empty! Please enter your name');
    //           }
    //         if (!yourAge) {
    //           throw new Error('The field is empty! Please enter your age');
    //         }
    //         if (!yourStatus) {
    //           throw new Error('The field is empty! Please enter your status');
    //         }
    //         if (isNaN(yourAge)){
    //             throw new TypeError('The Age must be a number');
    //         }
    //         if (yourAge < 18 || yourAge > 70){
    //             throw new RangeError('Вік повинен бути між 18 і 70');
    //         } 
    //         if (yourStatus !== 'адмін' && yourStatus !== 'модератор' && yourStatus !== 'користувач') { 
    //             throw new EvalError('Status is not correct');
    //         } 
    //         {
    //             alert('You can watch film');
    //         }
    //     }   
    //     catch (error) {
    //         alert('Помилка: ' + error.name + '\n' + error.message);
    //       }
    // }
        
    // checkAge();



    
// 3. - Done

    // function calcRectangleArea(width, height) {
    //     if (typeof width !== 'number' || typeof height !== 'number') {
    //        throw new Error('Не числа');
    //     }
    //     return area
    //     let area = width*height;
    // }

    // try {
    //     const area = calcRectangleArea(10,'12');
    //     console.log(area);
    //   } catch (error) {
    //     console.log('Не числа ' + error.message);
    //   }



// 4. - Done

// class MonthException extends Error{

//     constructor (message) {
//         super(message)    
//         this.name = "MonthException";
//     }
// }   
    
// function showMonthName(month) {
//         const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//         if (month < 1 || month > 12) { 
//             throw new MonthException('Invalid month');
//         }
//         return months[month-1];
//     }

// try {
//     console.log(showMonthName(4));
//     console.log(showMonthName(14));
// } catch (error){
//     if (error instanceof MonthException){
//         console.log(`${error.name} ${error.message}`);
//     } else {
//         throw error;
//     }

// }



//5 - Done

// class UserException extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'UserException';
//     }
//   }
  
//   function showUser(id) {
//     if (id < 0) {
//       throw new UserException('ID must not be negative: ' + id);
//     }
//     return { id };
//   }
  
//   function showUsers(ids) {
//     const users = [];
//     for (let i = 0; i < ids.length; i++) {
//       try {
//         const user = showUser(ids[i]);
//         users.push(user);
//       } catch (e) {
//         if (e instanceof UserException) {
//           console.error(e.message);
//         } else {
//           throw e;
//         }
//       }
//     }
//     return users;
//   }
  
//   console.log(showUsers([7, -12, 44, 22]));