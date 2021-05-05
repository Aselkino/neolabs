// let message = ('привет как дела?');

// console.log(message);

// console.log(null + false);

// let user ={
//     name: 'Asel',
//     course: 'neobis JS',
//     adress: 'Тыныстанова 98',
//     floor: 4
// }
// console.log(user);

var s=prompt("Введите строку");// переменная для ввода строки
function vowelsRed (s) {
   var sa=s.toLowerCase().split(''); // превращает строку в массив из символов
   var vs="аеёиоуыэюя";// строка с гласными

   var r = sa.reduce( (sum, val) => {
      if (vs.indexOf (val) !==-1) { 
         sum++; // добавляем в кол-во найденных гласных +1
      }
      return sum; // Возвращаем новую сумму (или старую, если гласных нет).
   }, 0); // Запускаем reduce с нулевой суммой
   return r;
}
var rezault=vowelsRed(s) ;// присваивание переменной значения функции
alert ("Количество гласных: "+rezault);
