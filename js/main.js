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
    laptops.style.display = "none"
    tablets.style.display = "none"
});

laptopsLink.addEventListener('click', function() {
    laptops.style.display = 'block';
    phones.style.display = "none"
    tablets.style.display = "none"
});

tabletsLink.addEventListener('click', function() {
    tablets.style.display = 'block';
    laptops.style.display = "none"
    phones.style.display = "none"
});

const productInfo = document.querySelector('.product__info');
const nameInfo = productInfo.querySelector('.name');
const categoryInfo = productInfo.querySelector('.category');
const textInfo = productInfo.querySelector('.text');
const priceButton = productInfo.querySelector('.price');

function updateProduct(name, category, text, price) {
    nameInfo.textContent = name;
    categoryInfo.textContent = category;
    textInfo.textContent = text;
    priceButton.textContent = `Купити за ${price}`;
    priceButton.addEventListener('click', () => {
        alert(`Товар ${name} додано до кошика!`);
    });
    productInfo.style.display = 'block';
}

function resetProduct() {
    nameInfo.textContent = '';
    categoryInfo.textContent = '';
    textInfo.textContent = '';
    priceButton.textContent = 'Купити';
    priceButton.removeEventListener('click', () => {});
    productInfo.style.display = 'none';
}

const phoneLinks = document.querySelectorAll('.phones__list a');
const laptopLinks = document.querySelectorAll('.laptops__list a');
const tabletLinks = document.querySelectorAll('.tablets__list a');

phoneLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const productName = this.textContent;
        const product = products.find(p => p.name === productName);
        updateProduct(product.name, product.category, product.text, product.price);
    });
});

laptopLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const productName = this.textContent;
        const product = products.find(p => p.name === productName);
        updateProduct(product.name, product.category, product.text, product.price);
    });
});

tabletLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const productName = this.textContent;
        const product = products.find(p => p.name === productName);
        updateProduct(product.name, product.category, product.text, product.price);
    });
});

const categoryLinks = document.querySelectorAll('.nav__list-item a');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        productInfo.style.display = 'none';
    });
});

function hideAllProductBlocks() {
    phones.style.display = 'none';
    laptops.style.display = 'none';
    tablets.style.display = 'none';
}

priceButton.addEventListener('click', () => {
    resetProduct();
    hideAllProductBlocks();
});
