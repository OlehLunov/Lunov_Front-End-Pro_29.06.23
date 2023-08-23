const categoryAdd = document.getElementsByClassName("nav__link");
const productList = document.getElementsByClassName("products")[0];
const info = document.getElementsByClassName("info")[0];
const clear = document.getElementsByClassName("info_btn")[0];


for (let i = 0; i < categoryAdd.length; i++) {
    categoryAdd[i].addEventListener("click", function () {
        productList.style.display = "block";
    });
}
productList.addEventListener("click", function () {
    info.style.display = "block";
});

clear.addEventListener("click", function () {
    alert("Товар добавлен в корзину");
    info.style.display = "none";
    productList.style.display = "none";
})
