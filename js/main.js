const allCategoryClose = document.querySelectorAll('.phones, .laptops, .tablets');
allCategoryClose.forEach(category => {
    category.style.display = 'none';
});

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
    } else if (phoneName === 'xiomi__info'){
        document.querySelector('.xiomi__info').style.display = 'block';
    }
}
document.querySelectorAll('.iphone-link, .samsung-link, .xiomi-link').forEach(phonesLink => {
    phonesLink.addEventListener('click', function() {
        phonesItem(phonesLink);
    });
});

