//Что такое DOM и для чего он нужен ?

// DOM- Document Object Model (Обектная модель документа) 
// это интерфейс, показывает HTML документы который читает браузер
// Браузер читает HTML документ, а затем представляет данные как дерева и определяет структуру доступа к этому дереву.

// какие функции для поиска дом узлов вы знаете ? 

//
//
//

//какие методы есть у classList ? 

//classList. add("class") – добавляет элементу указанные классы
//classList. remove("class") – удаляет у элемента указанные классы
//classList. toggle(string [boolean ( true, false )]) – если класс у элемента отсутствует - добавляет, иначе - убирает


// Каким образом можно взаимодействовать со стилями/изменять внешний вид dom элемента через js ?



// Как получить/изменить содержимое html у дом узла ? 
// innerHTML, outerHTML, textContent, innerText, outerText

// textContent – позволяет получить текстовое содержимое и его потомков



// Что такое объект event ?

event.target

// что делает функция addEventListener() ?



// Перечислите все события, которые вы знаете 
// click, keydown


// Как получиться соседний/дочерний/родительский элемент у дом узла ?

// === дочерние элекменты
//const childNodes = bodyElement.childNodes;
//console.log(childNodes);

// ===
// дочнерний первый и последний элемент
// const firstChild = bodyElement.firstElementChild;
// console.log(firstChild);
// const lastChild = bodyElement.lastElementChild;
// console.log(lastChild);


// Что такое localStorage, какие функции у него есть

localStorage.setItem('name', 'Asel') //3 function

// Перечислите способы взаимодействия с “бекендами” , какие функции за это отвечают ? приведите пример

// fetch()
// xmlHTTPRequest

//Что такое делегирование событий ?



function getB() {
    const b = 1;
  
    return new Promise((resolve) => {
        resolve(b);
    });
 }
  
 async function test() {
    console.log('Started test...'); // ?
  
    setTimeout(() => {
        console.log('Set timeout callback #1'); // ?
    }, 2000);
  
    getB().then((b) => console.log('Getting b from then ..., b: ', b)); // ?
  
    console.log('Some code ...'); // ?
  
    const b = await getB();
  
    console.log('from await, b: ', b); // ?
  
    setTimeout(() => {
        console.log('Set timeout callback #2') // ?
    });
  
    return 200;
 }
  
 console.log('Main Thread'); // ?
  
 test().then((code) => {
    console.log('Test is ended, code: ', code) // ?
 });
 console.log('Other Sync code in Main Thread'); // ?
  
 setTimeout(() => {
    console.log('Outer set timeout #1') // ?
 }, 0);
 