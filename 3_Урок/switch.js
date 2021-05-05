// let age = 9; 

// switch(age) {
// 	case 20:
//         console.log('студент');
//         break;
//     case 15:
//         console.log('школьник');
    // default:
    //     console.log("Извините, не распознан " +  age);
}

// const COLOR = 'red';

// switch(COLOR) {
//     case 'red':
//         console.log('Покрасил в красный');
//         break;
//     case 'green':
//         console.log('');
//         break;
//     default:
//         console.log('Цвет не разпознан')
// }

// const fruits = 'Uruk'

// switch (fruits) {
//   case "Oranges":
//     console.log("Апельсины стоит 200 сом");
//     break;
//   case "Apples":
//     console.log("Яблоко стоит 80 сом");
//     break;
//   case "Bananas":
//     console.log("Бананы стоит 120 сом");
//     break;
//   case "Cherries":
//     console.log("Вишня стоит 500 сом");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Манго и папая стоит 350 сом");
//     break;
//   default:
//     console.log("Извините, у нас не продается " + fruits + ".");
// }

// console.log("Хотите еще чего-нибудь?");

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }

// https://html5css.ru/js/js_switch.php?    
// https://wm-school.ru/js/js_switch.php


var num = +prompt('Введите число от 1 до 4', '');

switch (num) {
  case 0:
    result = 'весна';
    break;

  case 1:
    result = 'лето';
    break;

  case 2:
    result = 'осень';
    break;
  case 3:
    result = 'зима';
    break;
}
  alert( result );