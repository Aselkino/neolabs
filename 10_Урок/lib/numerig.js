function pow(num, pow) {
    return num**pow 
}
let result = pow(2, 5);
console.log(result);

let obj = {
    name: 'dsada',
}

obj.pow = function() {

}

exports.pow = function(num, pow) {
    console.log(num**pow);
    return num**pow
}