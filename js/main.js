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

const categoryNav = document.querySelector(".nav");
const smartsLink = document.querySelector('.smart__link');
const phones = document.querySelector('.phones');
const laptopsLink = document.querySelector('.laptops__link');
const laptops = document.querySelector('.laptops');
const tabletsLink = document.querySelector('.tablets__link');
const tablets = document.querySelector('.tablets');
const phonesItem = document.querySelector('.phones');
const laptopsItem = document.querySelector('.laptops');
const tabletsItem = document.querySelector('.tablets');
const productInfo = document.querySelector('.product__info');
const nameInfo = productInfo.querySelector('.name');
const categoryInfo = productInfo.querySelector('.category');
const textInfo = productInfo.querySelector('.text');
const buyButton = productInfo.querySelector('.price');
const ordersBtn = document.querySelector(".orders__btn");
const ordersDiv = document.querySelector(".orders");
const ordersList = document.querySelector(".orders__list");

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

function updateInfo(name, category, text, price) {
    nameInfo.textContent = name;
    categoryInfo.textContent = `Категорія: ${category}`;
    textInfo.textContent = text;
    buyButton.textContent = `Ціна: ${price} грн`; 
    productInfo.style.display = 'block';
}


const categoryLinks = document.querySelectorAll('.nav__list-item a');
categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        resetProduct();
    });
});

buyButton.addEventListener('click', function() {
    const productName = nameInfo.textContent;
    const product = products.find(p => p.name === productName);

    if (product) {
        const order = {
            date: new Date().toLocaleString(),
            price: product.price,
            name: product.name,
            category: product.category, 
            text: product.text 
        };
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        savedOrders.push(order);
        localStorage.setItem('orders', JSON.stringify(savedOrders));
        laptops.style.display = 'none';
        phones.style.display = "none";
        tablets.style.display = "none";
        resetProduct();
        alert(`Товар ${productName} додано до кошика!`);
    }
});
function resetProduct() {
    nameInfo.textContent = '';
    categoryInfo.textContent = '';
    textInfo.textContent = '';
    buyButton.textContent = 'Купити';
    productInfo.style.display = 'none';
}
ordersBtn.addEventListener('click', function() {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

    if (savedOrders.length === 0) {
        categoryNav.style.display = 'block';
    } else {
        categoryNav.style.display = 'none';
    }

    showOrders();
});
function showOrders() {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    ordersDiv.innerHTML = '';

    savedOrders.forEach((order, index) => {
        const product = products.find(product => product.name === order.name);
    
        const orderElement = document.createElement('div');
        orderElement.classList.add('order');
        orderElement.innerHTML = `
            <div class="order-header">
                <span class="order-date">Замовлення #${index + 1} - ${order.date}</span>
                <button class="delete-order-btn" data-index="${index}">Видалити</button>
                <button class= "toMain__btn">На головну</button>
            </div>
            <div class="order-details" style="display: none;">
                <p>Ціна: ${order.price} грн</p>
                <div class="order-info">
                    <p>Name: ${order.name}</p>
                    <p>Category: ${order.category}</p>
                    <p>Text: ${order.text}</p>
                </div>
            </div>
        `;
        orderElement.querySelector('.order-header').addEventListener('click', function() {
            const details = orderElement.querySelector('.order-details');
            if (details.style.display === 'none') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });

        orderElement.querySelector('.toMain__btn').addEventListener('click', function(){
            orderElement.style.display = 'none';
            ordersBtn.style.display = 'block';
            categoryNav.style.display = 'block';
        })
        orderElement.querySelector('.delete-order-btn').addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            savedOrders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(savedOrders));
            showOrders();
        });
        ordersDiv.appendChild(orderElement);
    });
}