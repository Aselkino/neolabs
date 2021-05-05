// function foo() {
//     let i = 0;
//     return {
//         getI: function() {
//             console.log(i);
//             return i
//         },
//         setI: function(v) {
//             i = v
//         }
//     }
// }

// const iWorker = foo();

// iWorker.getI();
// iWorker.setI(5);

// iWorker.getI();


// let i = 10;
// let arr = [];

// while(i--) {
//     arr.push(function () {return i + i})
// }

// console.log(arr[0]()) //?
// console.log(arr[1]()) //?

var i; 
for ( i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000)
}

for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}