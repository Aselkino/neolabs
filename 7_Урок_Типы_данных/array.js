// let stack = [];

// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);
// stack.push(3);
// console.log(stack);

// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);
// stack.pop();
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());
// console.log(arr);

// console.log(arr.join('-'));
// console.log(arr);



// полиндром Н: КАБАК

function palindrom(text) {
    let arrayOfLetters = text.split('');
    // текст разбираем на массив по буквам

    let reversed = arrayOfLetters.reverse();
    // массты из букв переварачиваем 

    let result = reversed.join('');

    if(text === result) {
        return true;
    } else {
        return false;
    }
    return text === result;
  
}

let isPalindrom = palindrom('КАБАК');
console.log('Palindrom: ', isPalindrom); 

function palindrom(text) {
    return text === text.split('').reverse().join('');
}
let isPalidrom = palidrom('КАБАК');
console.log(isPalidrom);

// let arr = [1, 2, 3];
// arr.unshift(0);
// console.log(arr);

// let salaries = [1000, 500, 200, 300];


// salaries.forEach(function(value) {
//     console.log(value + 200);
// })
// // const = (obj)

// let updatedSalaries = salaries.map(function(value) {
//     // return value + 100;
//     return {
//         oldSalaty: value,
//         newSalary: value + 100
//     }
// })
// // console.log('старые зарплаты: ' + salaries);
// // console.log('новые зарплаты ' + updatedSalaries);

// console.log('старые зарплаты: ' + salaries);
// console.log('новые зарплаты: ' + print(updatedSalaries));

// let salaries = [5000, 1000, 3000]

// let totalSum = 0;
// salaries.forEach(function(salary) {
//     totalSum += salary;
// })
// console.log(totalSum);


// let upDatesSalaries = salaries.map(function(salary) {    //map() берет данные и трансформарует
//     // return salary - 500;
//     return {
//         oldSalary: salary,
//         newSalary: salary - 500
//     }
// });
// console.log(upDatesSalaries);

// const markets = [
//     {
//         name: 'Sela',
//         sale: 10,
//     },
//     {
//         name: 'BrandMix',
//         sale: 50,
//     }, 
//     {
//         name: 'GU',
//         sale: 20,
//     },
//     {
//         name: 'UNIQLO',
//         sale: 30,
//     }
// ];
// let bestMarkets = markets.filter(function(market) {
//     return market.sale > 10;
// })
// console.log(bestMarkets);

