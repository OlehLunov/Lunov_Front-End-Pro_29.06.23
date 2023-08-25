function productList (element) {
    const categoryName = element.getAttribute('class');

    const allCategoryClose = document.querySelectorAll('.phones, .laptops, .tablets');
    allCategoryClose.forEach(category => {
        category.style.display = 'none';
    });

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