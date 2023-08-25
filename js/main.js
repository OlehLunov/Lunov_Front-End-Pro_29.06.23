function productList (element) {
    const categoryName = element.getAttribute('class');

    if (categoryName === 'cat__link') {
        document.querySelector('.phones').style.display = 'block';
    } else if (categoryName === 'cat__link1'){
        document.querySelector('.laptops').style.display = 'block';
    } else if (categoryName === 'cat__link2'){
        document.querySelector('.tablets').style.display = 'block';
    }
}
document.querySelectorAll('.cat__link, .cat__link1, .cat__link2').forEach(link => {
    link.addEventListener('click', function() {
        productList(link);
    });
});


function phonesItem (phones) {
    const phoneName = phones.getAttribute('class');

    if (phoneName === 'iphone-link') {
        document.querySelector('.iphone__info').style.display = 'block';
    } else if (phoneName === 'samsung-link'){
        document.querySelector('.samsung__info').style.display = 'block';
    } else if (phoneName === 'xiaomi-link'){
        document.querySelector('.xiaomi__info').style.display = 'block';
    }
}
document.querySelectorAll('.iphone-link, .samsung-link, .xiaomi-link').forEach(phonesLink => {
    phonesLink.addEventListener('click', function() {
        phonesItem(phonesLink);
    });
});

function laptopsItem (laptops) {
    const laptopsItem = laptops.getAttribute('class');

    if (laptopsItem === 'mac-link') {
        document.querySelector('.mac__info').style.display = 'block';
    } else if (laptopsItem === 'dell-link'){
        document.querySelector('.dell__info').style.display = 'block';
    } else if (laptopsItem === 'msi-link'){
        document.querySelector('.msi__info').style.display = 'block';
    }
}
document.querySelectorAll('.mac-link, .dell-link, .msi-link').forEach(laptopsLink => {
    laptopsLink.addEventListener('click', function() {
        laptopsItem(laptopsLink);
    });
});


function tabletsItem (tablets) {
    const tabletsItem = tablets.getAttribute('class');

    if (tabletsItem === 'ipad-link') {
        document.querySelector('.ipad__info').style.display = 'block';
    } else if (tabletsItem === 'lenovo-link'){
        document.querySelector('.lenovo__info').style.display = 'block';
    } else if (tabletsItem === 'redmi-link'){
        document.querySelector('.redmi__info').style.display = 'block';
    }
}
document.querySelectorAll('.ipad-link, .lenovo-link, .redmi-link').forEach(tabletsLink => {
    tabletsLink.addEventListener('click', function() {
        tabletsItem(tabletsLink);
    });
});

function hideInfo () {
    const infoHide = document.querySelectorAll('.iphone__info, .samsung__info, .xiaomi__info, .mac__info, .dell__info, .msi__info, .ipad__info, .lenovo__info, .redmi__info')
    const productsHide = document.querySelectorAll('.phones__list, .laptops__list, .tablets__list')
}

