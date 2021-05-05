// const pageTitleNode = document.querySelector('.title');

// pageTitleNode.style.width = '500px';
// pageTitleNode.style.border = '1px solid black';

// console.log(pageTitleNode.classList)    // свойство
// pageTitleNode.classList.add('transformed-text')

// const parent = document.querySelector('.parent')

const dataFromBackend = {
    code: 200,
    data: {
        name: 'Chika',
        adress: 'BGU',
        site: 'bitcoin.kg'
    }
};

const $root = document.getElementById('root');

function createCardTemplate(name, adress, site){
    return `
    <div>  
        <h1>Name: ${name}</h1>
        <p>Adress: ${adress}</p>
        <br>
        <b>site: ${site}</b>
    </div>
    `;
}

if (dataFromBackend.code === 200){
    const data = dataFromBackend.data;
    const cardTemplate = createCardTemplate(data.name, data.adress, data.site);

    $root.innerHTML = cardTemplate;
}

