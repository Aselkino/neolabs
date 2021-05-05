let arr = [1, 2, 3, 4, 5] 

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
function forEachCb(value) {
 console.log(value);
}





exports.forEach = function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}










// forEach(arr, forEachCb);

// exports.arrayModule = {
//     forEach: forEach
// }

exports.sum = function(a, b) {
    console.log(a + b);
    return a + b;
}

exports.MAX_SIZE = 100500;