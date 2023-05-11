// 8. REGULAR EXPRESSIONS. MEMORY MANAGEMENT

// 1. - Done ---------------------------------------------------------------------


// function upperCase(str) {

// let text = /^[A-Z]/

//     if  (text.test(str))
//         alert("String's starts with uppercase character")
//     else 
//         alert("String's not starts with uppercase character'");

// }
// console.log(upperCase('regexp')); 
// console.log(upperCase('RegExp')); 



// 2. - Done ------------------------------------------------------------------------------------------------
 
// let textForCheck = prompt('Please enter your email address');
// function checkEmail() {
//     let email = /[\w\.\-]{4,10}@\w{2,}\.\w{2,}/
//     let promptValue = textForCheck;
//     if (email.test(promptValue)) 
//         console.log(email.test(promptValue));
//     else
//         console.log(email.test(promptValue));
// }
 
// checkEmail();



// // 3. - Done ------------------------------------------------------------------------------------------------


// let text = "Java Script";
// let replace = text.replace(/(\w+)\s(\w+)/, "$2, $1");

// console.log(replace); 



// 4. - Done ------------------------------------------------------------------------------------------------


// let textForCard = prompt('Please enter your card number in the format ****-****-****-****');
// function checkCardNumber() {
//     let regNumber = /\d{4}-\d{4}-\d{4}-\d{4}/
//     let promptText = textForCard;
//     if (regNumber.test(promptText)) 
//         console.log(regNumber.test(promptText));
//     else
//         console.log(regNumber.test(promptText));
// }
// checkCardNumber();



// 5. - Done ------------------------------------------------------------------------------------------------


// function checkEmail(str) {

// let text = /^\w[\w_]{2,}\-?[\w_]{2,}@\w{2,}\.\w{2,}/

//     if  (text.test(str))
//         console.log("Email is correct!");
//     else 
//         console.log("Email is not correct!");

// }
// console.log(checkEmail('my_mail@gmail.com')); 
// console.log(checkEmail('#my_mail@gmail.com')); 
// console.log(checkEmail('my_ma--il@gmail.com'));




// 6. - Done
function checkLogin(str) {
    const regex = /(\d+\.\d+)|(\d+)/g;
    const numbers = str.match(regex);
  
    if (str.length < 2 || str.length > 10) {
      return false;
    }
  
    if (/\d/.test(str[0])) {
      return false;
    }
  
    if (numbers) {
      const numericValues = numbers.map((n) => parseFloat(n));
      return {
        isValid: true,
        numbers: numericValues,
      };
    } else {
      return {
        isValid: true,
        numbers: [],
      };
    }
  }
  
  console.log(checkLogin('ee1.1ret3'));
  console.log(checkLogin('ee1*1ret3'));
