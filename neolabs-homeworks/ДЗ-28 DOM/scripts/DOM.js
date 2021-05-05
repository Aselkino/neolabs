/*
// WINDOW
const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth}px`);   //1366


//BOM


//Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}
//Платформа
console.log(navigator.platform);


//=================

//Location

//Получаем URL
console.log(location.href);
//Меняем URL
// location.href = "https://www.freecodecamp.org/";

//=================

//History
history.back();
history.forward();


//=================

//Alert
// alert("Привет!");

//Сonfirm
// const confirmResult = confirm("Хочешь учить JS?");
// console.log(confirmResult);

//Prompt
// const promptResult = prompt("Кто ты по жизни?");
// console.log(promptResult);

//=========================================================

// DOM
// Навигация по документу

// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const headElement = document.head;
// console.log(headElement);

// const bodyElement = document.body;
// console.log(bodyElement);

//------------------------------------------

// Получаем объект body
const bodyElement = document.body;

// Первый и последний дочерние элементы
const firstChildNode = bodyElement.firstChild;
console.log(firstChildNode);

const lastChildNode = bodyElement.lastChild;
console.log(lastChildNode);

//------------------------------------------


const childNodes = bodyElement.childNodes;
console.log(childNodes);

console.log(bodyElement.hasChildNodes());

//Перебор коллекции
for (let node of childNodes) {
	console.log(node); // покажет все узлы из коллекции
}


// "Живые" коллекции

// Соседние и родительский узлы
const previousSiblingNode = bodyElement.previousSibling;
console.log(previousSiblingNode);

const nextSiblingNode = bodyElement.nextSibling;
console.log(nextSiblingNode);

const parentNode = bodyElement.parentNode;

console.log(parentNode);

//------------------------------------------

// Получаем коллекцию всех дочерних элементов
const bodyСhildren = bodyElement.children;
console.log(bodyСhildren);


// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild;
console.log(firstChild);

const lastChild = bodyElement.lastElementChild;
console.log(lastChild);

// Соседние и родительский элементы
const previousSibling = bodyElement.previousElementSibling;
console.log(previousSibling);

const nextSibling = bodyElement.nextElementSibling;
console.log(nextSibling);

const parentElement = bodyElement.parentElement;
console.log(parentElement);
*/

//======================================================
// Поиск произвольного элемента

/*
// Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

// Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

// Поиск по смешанному селектору тега и класса
const elemsThree =
	document.querySelectorAll('li.lesson__item-list');
console.log(elemsThree);

// Поиск по тегу первого уровня вложенности
const elemsFour =
	document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

// Поиск по нескольким классам
const elemsFive =
	document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemsFive);

// Поиск по вложенным классам
const elemsSix =
	document.querySelectorAll('.lesson__list .lesson__text');
console.log(elemsSix);

// Поиск по ID
const elemsSeven =
	document.querySelectorAll('#listItem');
console.log(elemsSeven);

// Поиск по атрибуту
const elemsEight =
	document.querySelectorAll('[data-item]');
console.log(elemsEight);

// Поиск по атрибуту со значением
const elemsNine =
	document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);

//--------------


// querySelectorAll - статичная коллекция

const elems = document.querySelectorAll('li');
console.log(elems[2]);

for (const item of elems) {
	console.log(item);
}
elems.forEach(item => {
	console.log(item);
});

//--------------

const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
//---------

const subList =
	document.querySelectorAll('.lesson__sub-list');
const listItems =
	subList[0].querySelectorAll('.lesson__list .lesson__item-sub-list');
console.log(listItems);


// =======================
//elem.querySelector(CSS);

//const lessonList = document.querySelectorAll('.lesson__list')[0];
const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);

//---------------------

//document.getElementById(ID)

const elem = document.getElementById('listItem');
console.log(elem);

const elems = document.getElementsByTagName('li');
console.log(elems);
//-------


const elems2 = document.getElementsByClassName('lesson__item-list ');
console.log(elems2);

//-------

const elems3 = document.getElementsByName('list');
console.log(elems3);

//---------------------

// Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.lesson__item-list');

// Получаем "живую" коллекцию
const listLive = document.getElementsByClassName('lesson__item-list');

console.log(listStatic);
console.log(listLive);


// Создаем новый HTML-объект.
const lessonList = document.querySelector('.lesson__list');
lessonList.insertAdjacentHTML(
	"beforeend",
	'<li class="lesson__item-list">Новый пункт</li>'
);

//---------------------

//closest

const elem = document.querySelector('.lesson__item-sub-list');
const parentList = elem.closest('.lesson__list');
console.log(parentList);

//---------------------------

// Проверка matches

const elems = document.querySelectorAll('.lesson__item-list');
for (let elem of elems) {
	if (elem.matches('[class$="lesson__item-list_red"]')) {
		console.log('Крассный');
	} else if (elem.matches('[class$="lesson__item-list_blue"]')) {
		console.log('Синий');
	}
}

//---------------------------

const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);

//========================================================
// Изменение документа
// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

// Перезаписываем содержимое объекта
textElement.innerHTML = `Живи, а работай в свободное время!`;

// Дописываем содержимое объекта
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи и работай
	<span class="yellow">удаленно</span> на Бали</p>`;

console.log(textElement.innerHTML);


//====================


// Cодержимое элемента целиком outerHTML

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое объекта "как есть"
// вместе с HTML, а также сам элемент
const textElementContent = textElement.outerHTML;
console.log(textElementContent);


textElement.outerHTML = `<p>Живи и работай на Гаваях
	<span class="yellow">удобное</span> для тебя время!</p>`;

console.log(textElement.outerHTML);

//====================

// Просто текст элемента textContent

// Получаем объект
const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
console.log(textElementContent);

textElement.textContent = `<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`;

console.log(textElement.textContent);
*/
//====================
/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
const getComment = textElement.nextSibling;

console.log(getComment);
console.log(getComment.data);


// Изменение текстового узла/комментария
getComment.data = 'Приветствую';
console.log(getComment.data);
*/

//=====================
/*
// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;
console.log(newElement);

// Создание нового текстового узла
const newText = document.createTextNode('Приветствую!');
console.log(newText);
*/
//===================
/*
// Методы вставки

const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи и получай удовольствия от 
	<span class="yellow">любимой</span> работы!`;


// Вставляем элементы...

textElement.before(newElement, "Ohaio");
console.log(textElement)

textElement.after(newElement, "Hello everyone");
console.log(textElement)

textElement.prepend(newElement, "Salut");
console.log(textElement)

textElement.append(newElement, "Konnichiva");
console.log(textElement)

textElement.append(newElement, "Приветствую");
console.log(textElement)

// Можно вставлять строку
textElement.append(`Живи, а работай в
	<span class="yellow">свободное</span> время!`);


//-------------------

// insertAdjacentHTML/Text/Element

// Получаем объект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст, HTML, элемент
textElement.insertAdjacentHTML(
	'afterend',
	`<p>Живи, а работай в
	<span class="yellow">свободное</span> время!</p>`
);

/*
"beforebegin" – вставить html непосредственно перед textElement,
"afterbegin" – вставить html в начало textElement,
"beforeend" – вставить html в конец textElement,
"afterend" – вставить html непосредственно после textElement.
*/

//--------------
/* insertAdjacentText и insertAdjacentElement */


/*
// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Вставляем текст
textElement.insertAdjacentText(
	'beforeend',
	`Живи, а работай в
	<span class="yellow">свободное</span> время!`
)
// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в
	<span class="yellow">свободное</span> время!`;

// Вставляем элемент
textElement.insertAdjacentElement(
	'beforeend',
	newElement
);


// Перенос элемента


// Получаем объект
const lessonBlock = document.querySelector('.lesson');
// Получаем объект
const title = document.querySelector('h3');

// Переносим title в конец блока lessonBlock
lessonBlock.append(title);


//=========================================

// Клонирование узлов cloneNode

// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Клонирование без дочерних элементов
//const cloneTextElement = textElement.cloneNode();

// Глубокое клонирование вместе с содержимым
const cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);

//=========================================

// Удаление узлов

// Получаем объект
const textElement = document.querySelector('.lesson__text');
// Удаляем объект
textElement.remove();
*/

//========================================================================================================================================================
/*
// Стили и классы

// Управление классами
// Свойства className и classList

// Свойство className

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Получаем имена классов
const elementClassNames = element.className;
console.log(elementClassNames);

// Перезаписываем имя класса
element.className = "red";
*/

//-----------------------------
/*
// Свойство classList

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.classList.contains('active');

// Добавляем класс
element.classList.add('active');
// Проверяем наличие класса
if (element.classList.contains('active')) {
	console.log(`У element есть класс active!`);
}

//classList является перебираемым, поэтому можно 
//перечислить все классы при помощи for..of

for (let className of element.classList) {
	console.log(className);
}
*/
//---------------------------------------------------

// style.cssText
/*
const element = document.querySelector('.lesson__item-list_red');

element.style.cssText = `
	margin-bottom: 30px;
	color:red;
`;

// -----


// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);

// Чтобы получить конкретное значение
// Следует писать точное (полное) свойство

// Получаем точное значение
console.log(elementStyle.paddingLeft);
// Получаем не предсказуемую запись
console.log(elementStyle.padding); // В FF <empty string>
*/

// Лайвхаки
/*
// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.paddingLeft);

//Получаем число
const paddingLeft = parseInt(elementStyle.paddingLeft);
console.log(paddingLeft);
*/


//==========================================================
// Атрибуты и свойства 
/*
const link = document.querySelector('.lesson__link');
const input = document.querySelector('.lesson__input');

console.log(link.href);
console.log(input.href);

console.log(input.value);
console.log(link.value);

//Получить список доступных свойств
console.dir(link);
//---------------------------

// Произвольные атрибуты

//Получаем элемент
const lessonText = document.querySelector('.lesson__text');

// Устанавливаем значение атрибута
lessonText.setAttribute('some-attribute', 'some-value');
//Проверяем наличие атрибута
if (lessonText.hasAttribute('some-attribute')) {
	console.log('some-attribute существует!');
}
*/
//------------------------------
/*
//Получаем элемент
const input = document.querySelector('.lesson__input');

input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));


// НО

input.setAttribute('value', 'Привет!');
console.log(input.value);

input.value = "Как дела?";
console.log(input.getAttribute('value'));
*/

//------------------------------

// Нестандартные атрибуты, dataset

//Получаем элемент
const lessonText = document.querySelector('.lesson__text');

//Получаем data-атрибут
console.log(lessonText.dataset.size);

//Перезаписываем data-атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

// data-size-value
console.log(lessonText.dataset.sizeValue);


//------------------------------

const link = document.querySelector('.lesson__link');

//Получаем тег элемента
console.log(link.tagName);

//Скрыть/показать элемент
link.hidden = true;
console.log(link.hidden);


//=====================================================
//=====================================================