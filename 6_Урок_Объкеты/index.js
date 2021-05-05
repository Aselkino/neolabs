// let arr = [1, 2, 3, 4];
// console.log(arr.length);
// console.log(arr[0]);

// let arr = [1, null, true, 2, 3, 4, 5, 10, false, {name: 'Asel'}]
console.log(arr[arr.length - 2]);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <arr.length; i++) {
//     console.log('Значение: ' + arr[i], 'индекс: ' + i);
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function arrSum(arr){
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
//     }
// console.log(sum);
// }
// arrSum(arr);

// let numbers = [1, 2, 3, 4, 5];
// let users = [{name: 'Ase'}, {name: 'Kurant'}]

// for (let value of numbers) {
//     console.log(value);
// }

// for (let user of users) {
//     console.log(user.name);
// }

// for (let value of users) {
//     console.log(value);
// }

// for (let str of numbers) {
//     console.log(str);
// }



                    // =====Обькеты=====

// let obj = {
//     age: 22
// }   //литеральный способ

// let obj1 = new Object({
//     age: 25
// });   //есть и такой способ СТИЛЬ конструктора

// console.log(obj.age);
// console.log(obj1.age);


let user = {
    age: 18,
    name: 'Asel',
    'phone-number': '+996706407777',
    return: 1,
    adress: {
        city: 'Bishkek',
        mrk: 'Tunguch'
    },
    getAge: function() {
        // console.log('test');
        console.log('Возраст: ' + this.age);                  //this - КОНТЕКСТ
    }

//     //global

//     // setTimeout(function(){
//     //     console.log('Hello');
//     // }, 2000),

//     showThis: function() {
//         console.log(this);
//     }
// }
// // console.log(user['phone-number']);
// // console.log(user.return);
// // console.log(user.adress.city);

// user.getAge();
// user.showThis();


// let user = {
//     age: 18,
//     name: 'Asel',
//     getAge: function() {
//         console.log('Возраст ' + this.age);
//     }
// };
// user.getAge();


// let car = {
//     speed: 500,
//     wheels: 4,
//     color: 'red'
// }

// for (let key in car) {
//     console.log(`Ключ: ${key}, Значение: ${car[key]}`);    // что такое метод обьекта?
// }

// примитивы

// let a = 1;
// let b = a;

// console.log(a);
// console.log(b);
// b = 2;
// console.log(a);
// console.log(b);

// let obj = {a: 1, b: 2};
// let obj2 = obj;

// console.log(obj);
// console.log(obj2);
// b = 2;

// obj2.c = 3;
// console.log(obj);
// console.log(obj2);

