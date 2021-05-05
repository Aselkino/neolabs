// Test


// Вопрос #1
// 1 + “1” - 1 // ?
// Ответ:  10
// ---------------

// Вопрос #2
// Перечисли все типы данных в JS
// Ответ:
// 1. number
// 2. string
// 3. boolean
// 4. underfined
// 5. null
// 6. object
// ------------- 

// Вопрос #3
// Чем отличается стрелочная функция () => {} от обычной function funcName() {} 
// Ответ:
// ничем не отличается
// let sum = (a, b) => a + b;    // это короткая стрелочная функция
// console.log( sum(1, 2) );  

// let sum = function(a, b) {
//     return a + b;
//   };                          // это обычная функция
// console.log( sum(1, 2) ); 
// ------------- 

// Вопрос #4
// Что такое параметры по умолчанию у функций, приведите пример?
// Ответ:
// В JavaScript параметры функции, которым при ее вызове не передаются значения, 
// принимают по умолчанию значение undefined. 
// В некоторых случаях может быть полезно задать иное значение по умолчанию. 
// Для таких случаев предназначены параметры по умолчанию.

// function add(x, y = 10) {
//     return x + y;
//   }
  
//   console.log(add(5, 20));
//   // 25
  
//   console.log(add(50));
//   // 60
// ------------- 

// Вопрос #6
// Что такое this ? какое значение оно принимает у функций function funName() {}
// Ответ:
// this - метод обьекта, значение this определяется тем, каким образом вызвана функция. 

// const test = {
//     group: 'ПИ-2/2',
//     funName: function() {
//       return this.group;
//     },
//   };
  
//   console.log(test.funName());
// ------------- 

// Вопрос #8
// Что такое функция конструктор?
// Ответ:
// Функция, задающая тип объекта.

// function Car() {}
// car1 = new Car();
// car1.color = "black";
// console.log(car1.color); 
// ------------- 

// Вопрос #9
// Что такое prototype ? 
// Ответ: 
//  Прототип - это скрытое свойство, равняется либо null либо ссылается на другой объект

// let samsung = {
//     phone: true
//   };

// let apple = {
//     mackBook: true,
//     __proto__: samsung
//   };
  
//  console.log(apple.phone);
// -------------

// Вопрос #10
// В конструкторе Array в прототипе описать, метод который будет показывать в консоль центральный элемент в массиве
// Ответ:

// function array () {
//     let arr = [1, 2, 3, 4, 55, 6, 7, 8]
//     var ind = 0
//     if(arr.length % 2 == 1) {
//         ind = (arr.length -1)/2
//         }
//     else {
//         ind = arr.length/2
//     }
//     return arr[ind]  ;
// }
// console.log(array());
// ------------- 

// Вопрос #11
// Что такое наследование ?  
// Ответ:
// прототип цепочки объектов позволяет объектам наследовать функции друг от друга

// let islands = {
//     fruits: true,
//     surf() {
//         console.log('I am surf')
//     }
// };

// let bali = {
//     relax: true,
//     ride() {
//         console.log('I rode an elephand')
//     },
//     __proto__: islands
// };

// let okinava = {
//     temperature: 35,
//     __proto__: bali
// };

// let hawaii = {
//     summer: true,
//     __proto__: okinava
// };

// let chedju = {
//     orange: true,
// }

// bali.surf(); 
// console.log(okinava.relax); 
// hawaii.ride();
// ------------- 

// Вопрос #12
// что делает метод call у функций ?  
// Ответ:
// С методом call() можно вызывать любые методы для использования с разными объектами

// let actor = {
//     firstName: "Brad",
//     lastName: "Pitt"
// }
// function fullName() {
//     console.log(this.firstName + " " + this.lastName);
// }
// fullName.call(actor);
// ------------- 

// Вопрос #13
// Написать функцию конструктор, которая будет создавать Калькулятор
// Ответ:
// function Calculator (num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.add = function add() {
//         return this.num1 + this.num2
//     }
//     this.sub = function sub() {
//         return num1 - num2
//     }
//     this.multiply = function multiply() {
//         return num1 * num2
//     }
//     this.devide = function divide() {
//         return num1 / num2
//     }
// }
// const calc = new Calculator(50, 2)
// let a = calc.add();
// console.log(calc.add());
// console.log(calc.sub());
// console.log(calc.multiply());
// console.log(calc.devide());
// ------------- 

// Вопрос #14
// Чем отличается var от let и const 
// Ответ:
// При помощи var или let можно объявлять переменные без их инициализации
// объявляя переменную при помощи const она инициализируются при объявлении
// -------------

// Вопрос #15
// Какие области видимости вы знаете, перечислите их
// Ответ:
// глобальная и локальная
// -------------


// Вопрос #16
// Выполнить следующие задачи. Используя перебирающие методы массивов

// Ответ:
// // Задание 1 - forEach
// let sum = 0
// const  array = [3, 5, 2 , 1];
// array.forEach (function(element) {
//    sum = element ** 2
//     console.log (sum)
// })

// // Задание 2
// let arr = [1,5,6,7,8,9,10,11,12,13,14,15,16,20,44,50,51,69,85];
// for( let i = 0; i < arr.length; i++){
//     if (arr[i] > 10 && arr[i] < 50) {
//         console.log(arr[i])
//     } 
// }
// const arr = [1,5,6,7,8,9,10,11,12,13,14,15,16,20,44,50,51,69,85];
// arr.forEach(function(element){
//     if (element > 10 && element < 50) {
//         console.log(element)
//     }
// })

// // Задание 3
// let sum = 0
// n = 1100
// let arr = [500, 100, 600, 400, 200]
// arr.forEach(function(element){
//     sum = element + n
//     // console.log(sum)
//     console.log('old' + ':' + element, 'new' + ':' + sum)
// });


// -------------

// Вопрос #17
// Что такое метод объекта ? 
// Ответ:
// let Japan = {
//     city: 'Tokyo',
//     welcome: 'irashaimase',
//     people: 132000000,
//     bamboo: 'Arashiyama',
//     railway: 'shinkansen',
//     food: ['sushi', 'ramen'],
//     tree: 'sakura',
//     car: 'Tayota',

//     sayCity() {
//     console.log(this.city)
//     },

//     eatFood() {
//         console.log(this.food);
//     },

//     sayWelcome() {
//         console.log(this.welcome);
//     }
// };

// Japan.sayHi = function() {
//     console.log('Konnichiva')
// }
// Japan.sayHi();
// Japan.sayCity();
// Japan.sayWelcome();
// Japan.eatFood()


// -------------
const global = {
    showThis: function() {
        console.log(this)
    }
}
function showThis() { 
    console.log(this);
}

showThis();

let user = {
    name: 'Asel',
    getName: function() {
        console.log(this.name)
    }
}
// method
user.getName();
// constructor
function Car() {
    this.name = 'Car'
}
const car = new Car();
console.log(car);
// map(callback)
//

