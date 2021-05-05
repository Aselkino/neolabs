// let i = 0;

// while (i < 100 ) {
//     i++;
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('ping pong');
//     } else if (i % 3 === 0){
//         console.log('ping');
//     } else if (i % 5 === 0){
//         console.log('pong');
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 0; i < 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('ping pong');
//     } else if(i % 3 === 0){
//         console.log('ping');
//     } else if(i % 5 === 0){
//         console.log('pong');
//     } else {
//         console.log(i);
//     }
// }


// let i = 0;

// do {
//     i++;

//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('ping pong');
//     } else if (i % 3 === 0){
//         console.log('ping');
//     } else if (i % 5 === 0){
//         console.log('pong');
//     } else {
//         console.log(i);
//     }
// }

// while (i < 100);



// let counter = 0;

// do {
//     counter++;
    
//     if (counter % 3 === 0 && counter % 5 === 0){
//         console.log('ping pong');
//     } else if (counter % 3 === 0){
//         console.log('ping');
//     } else if (counter % 5 === 0){
//         console.log('pong');
//     } else {
//         console.log(counter);
//     }
// }

// while (counter < 100);


// function loadFiles(callback) {
//     let error = true;
//     for (let i = 0; i < 500; i++){}
//     callback(error, {
//         mb: 500,
//         message: 'Файлы загружены'
//     });
// };

// function takeScreenshots(callback) {
//     callback(true);
// }

// function displayResult(err, result) {
//     if (err) {
//         console.log('при загрузке файлов произошла ошибка');
//     } else {
//         console.log('Сообщение: ${result.message: ${result.mb}');
//     }
// }

// loadFiles(displayResult);
// takeScreenshots(displayResult);

// function displayResult(num) {
//     return num * 2;
// }
// function loadFiles(fn){
//     let result = fn(5);
//     console.log(result);
// }

// loadFiles(displayResult);

// функция обратного вызова   callback



// function sum (num1, num2) {
//     return num1 + num2;
// }

// let result = sum(5,15);
// console.log(result);

// function isAdult(age) {    //фунция проверка
//     if I(age >= 18) {
//         returm true;
//     } 
//     return false;
// }
// if(isAdult(18)){
//     console.log('Welcome')
// } else {
//     console,log('Buy')
// }

// function getMaxNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     return num2;
// }
// let max = getMaxNumber(5, 2);
// console.log(max)


// function CarFactory(name, speed, color) {
//     this.name = name;
//     this.speed = speed;
//     this.color = color;

//     this.getSpeed = function() {
//         console.log(this.speed);
//     }
        // this.setSpeed = function    //========================================================= 
// }
// const ferari = new CarFactory('l240', 400, 'red');
// ferari.getSpeed();
// console.log(ferari);


// function FruitsMarket(name, cost, country) {
//     this.name = name;
//     this.cost = cost;
//     this.country = country;

//     this.getCost = function() {     // GETRS
//         console.log(this.cost);
//     }
//     this.setCost = function(newCost) {  //SETS
//         this.cost = newCost;
//     }

// }
// const apple = new FruitsMarket('greenApple', 80, 'Tashkent');
// apple.getCost();
// console.log(apple)

// apple.setCost(120);
// console.log(apple);


let user = {
    name: 'Adylbek',
    age: 17,
    country: 'Кыргызстан',
    game:  'GTA5' ,

    sayHello(){ 
        console.log(` ${this.name} Привет!`)
        console.log('Здорово')
    },

    sayAge() {
        console.log(`${this.name} сколько тебе лет?`)
        console.log(`мен ${this.age} лет`)   
    },
    sayNational(){
        console.log(`${this.name} ты откуда?`)
        console.log(`Я из ${this.country}`)
    },
     playGame(){ 
      console.log(`${this.name} Вышла 9 версия GTA сыграем!`)
        console.log(`ОК`)
        
    },
  }
user.sayHello();
user.sayAge();
user.sayNational();
user.playGame();
