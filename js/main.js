const products = [
    { name: 'IPHONE', category: 'phones', text: '1111', price: '1111' },
    { name: 'SAMSUNG', category: 'phones', text: '2222', price: '22222' },
    { name: 'XIAOMI', category: 'phones', text: '3333', price: '3333' },
    { name: 'MAC', category: 'laptops', text: '1111', price: '1111' },
    { name: 'DELL', category: 'laptops', text: '2222', price: '22222' },
    { name: 'MSI', category: 'laptops', text: '3333', price: '3333' },
    { name: 'IPAD', category: 'tablets', text: '1111', price: '1111' },
    { name: 'LENOVO', category: 'tablets', text: '2222', price: '22222' },
    { name: 'REDMI', category: 'tablets', text: '3333', price: '3333' },
];
const smartsLink = document.querySelector('.smart__link');
const phones = document.querySelector('.phones');
const laptopsLink = document.querySelector('.laptops__link');
const laptops = document.querySelector('.laptops');
const tabletsLink = document.querySelector('.tablets__link');
const tablets = document.querySelector('.tablets');

smartsLink.addEventListener('click', function() {
    phones.style.display = 'block';
    laptops.style.display = "none";
    tablets.style.display = "none";
});
laptopsLink.addEventListener('click', function() {
    laptops.style.display = 'block';
    phones.style.display = "none";
    tablets.style.display = "none";
});
tabletsLink.addEventListener('click', function() {
    tablets.style.display = 'block';
    laptops.style.display = "none";
    phones.style.display = "none";
});

const phonesItem = document.querySelector('.phones');
const laptopsItem = document.querySelector('.laptops');
const tabletsItem = document.querySelector('.tablets');
const productInfo = document.querySelector('.product__info');
const nameInfo = productInfo.querySelector('.name');
const categoryInfo = productInfo.querySelector('.category');
const textInfo = productInfo.querySelector('.text');
const buyButton = productInfo.querySelector('.price');

products.forEach(product => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = product.name;
    link.classList.add(`${product.name.toLowerCase()}-link`);

    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.appendChild(link);

    if (product.category === 'phones') {
        phonesItem.appendChild(listItem);
    } else if (product.category === 'laptops') {
        laptopsItem.appendChild(listItem);
    } else if (product.category === 'tablets') {
        tabletsItem.appendChild(listItem);
    }
    link.addEventListener('click', function(event) {
        event.preventDefault();
        updateInfo(product.name, product.category, product.text, product.price);
    });
});
function updateInfo(name, category, text, buy) {
    nameInfo.textContent = name;
    categoryInfo.textContent = `Категорія: ${category}`;
    textInfo.textContent = text;
    buyButton.textContent = `Купити за ${buy}`;
    productInfo.style.display = 'block';
}

const categoryLinks = document.querySelectorAll('.nav__list-item a');
categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        resetProductInfo();
    });
});
buyButton.addEventListener('click', function() {
    const productName = nameInfo.textContent;
    alert(`Товар ${productName}, додано до кошика!`);
    laptops.style.display = 'none';
    phones.style.display = "none";
    tablets.style.display = "none";
    resetProductInfo();
});

function resetProductInfo() {
    nameInfo.textContent = '';
    categoryInfo.textContent = '';
    textInfo.textContent = '';
    buyButton.textContent = 'Купити';
    productInfo.style.display = 'none';
}
