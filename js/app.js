'use strict';

const rootEl = document.getElementById('root');
/*rootEl.innerHTML = `
<h1>WhishList</h1>
<form >
    <div>
        <label for="name-input">Название</label>
        <input id="name-input">
    </div>
    <div>
        <label for="price-input"></label>
        <input id="price-input" type="number">
    </div>
    <div>
        <label for="discription-input"></label>              ----------> S pomoshyu InnerHTML )
        <textarea  id="description"  rows="15"></textarea>
    </div>
    <button>Добавить</button>
</form>
`


const headingEl = document.createElement('h1');
headingEl.textContent = 'Whishlist';
rootEl.appendChild(headingEl);
/*rootEl.innerHTML = `
 <h1>WhisjList</h1>// moshete i tak s pomoshyu InnerHTML)
`;*/ 
const formEl = document.createElement('form');
rootEl.appendChild(formEl);

const nameContainerEl = document.createElement('div');
formEl.appendChild(nameContainerEl);

const nameLabelEl = document.createElement('label');
nameContainerEl.textContent ='Название';

nameLabelEl.htmlFor = 'name-input';
nameContainerEl.appendChild(nameLabelEl);

const nameEl = document.createElement('input');
nameEl.id = 'name-input';
nameContainerEl.appendChild(nameEl);

const priceContainerEl = document.createElement('div');
formEl.appendChild(priceContainerEl);

const pricelabelEl = document.createElement('label');
pricelabelEl.textContent = 'Цена';
pricelabelEl.htmlFor = 'price-input';
priceContainerEl.appendChild(pricelabelEl);

const priceEl = document.createElement('input');
priceEl.id = 'price-input';
priceEl.type = 'number';
priceContainerEl.appendChild(priceEl);

const descriptionContainerEl = document.createElement('div');
formEl.appendChild(descriptionContainerEl);

const descriptionlabelEl = document.createElement('label');
descriptionlabelEl.textContent = 'Описание';
descriptionlabelEl.htmlFor = 'description-input';
descriptionContainerEl.appendChild(descriptionlabelEl);

const descriptionEl = document.createElement('textarea');
descriptionEl.id = 'description-input';
descriptionEl.rows = 5;
descriptionContainerEl.appendChild(descriptionEl);

const addEl = document.createElement('button');
addEl.textContent = 'Добавить';
formEl.appendChild(addEl);

const totalEl = document.createElement('div');
rootEl.appendChild(totalEl);

const errorEl = document.createElement('div');
formEl.insertBefore(errorEl,formEl.firstElementChild);

const listEL = document.createElement('ul');
rootEl.appendChild(listEL);


const wishes = [];
formEl.onsubmit = evt =>{
    evt.preventDefault();

    errorEl.textContent = '';
    let error = null;
    const name = nameEl.value.trim();
    if(name === ''){
        error = 'Заполните поле Название';
        errorEl.textContent = error;

        nameEl.focus();
        return;
    }

    const price = Number(priceEl.value);
    if (Number.isNaN(price)) {
        error = 'Неверно введена цена';
        errorEl.textContent = error;

        priceEl.focus();
        return;

    }
    if(price < 0 ){
        error = ' цена не может быть отрицательной';
        errorEl.textContent = error;

        priceEl.focus();
        return;
    
        
    }
    const description = descriptionEl.value;
    if (description === '') {
        error = 'Заполните поле Описание'
        errorEl.textContent=error;
        descriptionEl.focus();
        return;
        
        
    }
    
    const wish = {

        name,
        price,
        description,
    };
    const rowEl = document.createElement('li');
    rowEl.textContent = `Название: ${wish.name}, стоимость: ${wish.price} с.`;
    listEL.insertBefore(rowEl, listEL.firstElementChild);

    const removeEl = document.createElement('button');
    removeEl.textContent = 'Удалить';
    removeEl.onclick = () => {
        listEL.removeChild(rowEl);
        wishes = wishes.filter(o => o !== wish);

        const sum = wishes.reduce((prev, curr) => prev + curr.price, 0);      
        totalEl.textContent = `Необходимо ${sum} c.`;




        /*const index = wishes.indexOf(wish);
        wishes.splice(index, 1);
                                                                                /
        //ne zabivaem pereschitivat summu                                      /-----> Metod Splice
        const sum = wishes.reduce((prev, curr) => prev + curr.price, 0);      /
        totalEl.textContent = `Необходимо ${sum} c.`;*/

    } ;
    rowEl.appendChild(removeEl);
   
    wishes.unshift(wish);
    formEl.reset();
    const sum = wishes.reduce((prev, curr) => prev + curr.price, 0);
    totalEl.textContent = `Необходимо ${sum}c. `;

};
function createWish(name, price, description){
    const object = {};
    object.name = name;
    object.price = price;
    object.description = description;
    return object;

}



