let button = document.getElementById("btn");

let colorText = document.getElementById("colortext");

function getRandomColor(){
    let letters = "0123456789ABCDEF";

    let color = "#";

    for(let i=0;i<6;i++){
        let randomIndex = Math.floor(Math.random()*16);

        color = color + letters[randomIndex];
    }

    return color;
}

button.addEventListener("click",function(){
    let newColor = getRandomColor();

    document.body.style.backgroundColor = newColor;

    colorText.textContent = newColor;
});