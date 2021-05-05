const person = new Object({
    name: 'Asel',
    age: 25,
    greet: function() {
        console.log('Greet!');
    }
})
// console.log(person);

Object.prototype.sayHello = function() {
    console.log('Hello')
}
// person.sayHello();

const Lena = Object.create(person)
Lena.name = 'Elena';
// console.log(Lena.name);

// console.log(Lena.sayHello());

const str = 'I am string'
console.log(str.bold());









