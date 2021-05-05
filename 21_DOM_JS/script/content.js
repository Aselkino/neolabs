// Working with content

const $section1 = document.getElementById('section-1');

// $section1.textContent = 'Another text'

// alert($section1.textContent);


const $section2 = document.getElementById('section-2');

// $section2.innerHTML = ``;

function getAge(event) {
    const $target = event.target;
    // console.log($target.dataset)
    const { age, phone} = $target.dataset;

    console.log('Phone: ', phone);
    console.log('Age: ', age);  
}
// $section2.addEventListener('click', getAge);

// alert($section2.innerHTML);




const $section3 = document.getElementById('section-3');

function getName(event) {
    const $target = event.target;
    const { name, ball, phone, email, id} = $target.dataset;

    console.log('Name: ', name);
    console.log('Ball: ', ball);
    console.log('Phone: ', phone);
    console.log('Email: ', email);
    console.log('ID: ', id);
    // console.log('Age: ', age); 
}
$section3.addEventListener('click', getName);

$section3.innerHTML = `
    <p> Name: </p> ${};
`;
alert($section3.innerHTML);































// const $userDetails = document.getElementById('user')