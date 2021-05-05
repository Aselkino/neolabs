// const arrayModule = require('./lib/array');

// // arrayModule.sum(5, 2);
// // console.log(arrayModule.MAX_SIZE);

// arrayModule.forEach([1, 2], function(value){
//     console.log(value);
// })

// const calculator = require('./lib/calculator');  //дисруктуризация

// const sum = calculator.sum(1, 5);
// console.log(sum);

// const { sum } = require('./lib/calculator');
// let result = sum(5, 5);
// console.log(result);

// console.log('index.js');

const uuid = require('uuid');

const hash = uuid.v4();
console.log(hash);