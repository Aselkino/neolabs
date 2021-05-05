// try {
//     console.log('1 шаг');
//     console.log('2 шаг');

//     kjnfvfnoidkm;
//     console.log('3 шаг')

// } catch (e) {
//     console.log(e.message)
    
// } finally {
//     console.log('По любому выполнись')
// }
// console.log('4 шаг');



// &&  ||  !
// console.log(!true)
// console.log(!false)




// const user = {
//     isAdmin: false
// };

// function exceptionGeneration() {
//     if(!user.isAdmin) {
//         throw 'Пользователь не является админом';       // создает ошибку
//     }
//     console.log('код дальше работать не будет')
// }
// try {
//     console.log('Идет авторизация...')
//     console.log('Получен пользователь...', user);
//     exceptionGeneration();
//     console.log('Другое действие...')

// } catch (e) {
//     console.log('Поймал исключение', e);
// }

// console.log('код дальше работает')


// function subSubMain() {
//     try {
//         throw new Error('404, Страница не найдена');
//     } catch (e) {
//         console.log('Ошибка в функции subSubMain', e.message);
//         throw e;
//     }
// }

// function subMain() {
//     try {
//         subSubMain();
//     } catch (e) {
//         console.log('Ошибка в функции subMain', e.message);
//         throw e;
//     }
// }

// function main() {
//     try {
//         subMain();
//     } catch (e) {
//         console.log('Ошибка в функции main', e.message);
        
//     }
// }
// console.log('Запуск приложения...')
// main();
// console.log('Приложкения запущено...')



