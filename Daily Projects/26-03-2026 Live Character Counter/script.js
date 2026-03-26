let inputText = document.getElementById("input");
let countText = document.getElementById("count");

inputText.addEventListener('input',function(){
    let length = input.value.length;

    countText.textContent =  "Characters: " + length + "/ 500";

    if (length > 500){
        countText.style.color = "red";
    }else{
        countText.style.color = "black";
    }
});