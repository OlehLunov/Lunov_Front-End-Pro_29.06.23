const textField = document.getElementById("input");
const someDiv = document.getElementById("some__div");

/*textField.addEventListener("focus", function () {
   someDiv.style.display = "block";
});

textField.addEventListener( "blur", function (){
    someDiv.style.display = "none";
});*/

textField.addEventListener("mouseover", function () {
   someDiv.style.display = "block";
});

textField.addEventListener( "mouseout", function (){
    someDiv.style.display = "none";
});


