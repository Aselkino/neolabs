// function sayHello() {
//     let name = 'Asel'
//     console.log('hello' + ' ' + name );
// }

// sayHello();    
//=====синтаксис =====

// function showMessage(name, surname, age) {
//     console.log(`Hello ${name} ${surname} age is: 18`);
// }

// showMessage('Асел', 'Кулбачаева')


// function showMessage(name = 'User') {
//     console.log(`Hello: ${name}`);
// }

// showMessage();



// function letsCut (fruit, vegetable) {
//     console.log(`start ${fruit}`);
// }
// letsCut();




// function sum (a, b) {
//     return a + b;
// }
// let result = sum(1, 3)
// console.log(result);


// function calculate(num1, num2, operator) {
//     if (operator === '+'){
//         return num1 + num2;
//     } else if (operator === '-'){
//         return num1 - num2
//     } else if (operator === '*'){
//         return (num1 * num2)
//     } else if (operator === '/'){
//         return num1 / num2
//     } else {
//         return "любые"
//     }
// }

// let result = calculate()
// console.log(result);


// function doSomething() {
//     // return
// }
// console.log(doSomething());



// ===== 'Локальная область видимости' =====


// ===== 'Глобальная область видимости' =====




// for (var i = 10; i < 20; i++) {
//     // console.log(i);
// }
// console.log(i);

// function makeSandwich() {
//     let widthOil = true;

//     if (widthOil) {
//         const b = 1;
//         console.log(b, 'Здесь дрступно');
//     }
// }
// makeSandwich();


// fn1() 
//     function fn1() {
//         console.log(1);
//     }




// function creatMessage() {

// }


// user{
//  name: '',
// grantLvl: 10
// isAdmin: true
// }

// canAccess(user) =>true : false

// const employe = {
//     grantLvl: 0,
//     isAdmin: false
// };
// const operator = {
//     isAdmin: true,
//     grantLvl: 5
// };
// const admin = {
//     isAdmin: true,
//     grantLvl: 10
// };

// deleteDocs, updateDocs, moveDocs



// function canAccess(user) {
//     if (user.isAdmin && user.grantLvl > 7) {
//         return true;
//     } return false;
// } 


// function deleteDocs() {
//     if (canAccess(admin)) {
//     console.log('успешно удалено');
//     } else {
//         console.log('отказано в доступе');
//     }
// }
// deleteDocs();

// function updateDocs() {
//     if (canAccess(admin)) {
//         console.log('успешно добавлено');
//     } else {
//         console.log('отказано в добавлении');
//     }
// }
// updateDocs();

// function moveDocs() {
//     if (canAccess(admin)) {
//         console.log('успешно изменено');
//     } else {
//         console.log('отказано в изменении');
//     }
// }
// moveDocs();

// function showMessage(text,repeat){
//     let i = 0;

//     while(i < repeat){
//      i++
//  console.log(text)
//     }
// }
// let result = showMessage("Привет",5);
// console.log(result);
function isEven(num){
    if (num % 2 === 0) {
        return true
    }
    else {
        return false
    } 
}
let result1 = isEven(2);//Это функция которая считает четное число или нет
console.log(result1)