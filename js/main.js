const categoryAdd = document.getElementsByClassName("nav__link");
const productList = document.getElementsByClassName("products")[0];

for (let i = 0; i < categoryAdd.length; i++) {
    categoryAdd[i].addEventListener("click", function () {
        productList.style.display = "block";
    });
}