let count = 0;

let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click",function()
{
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click",function()
{
    count--;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function()
{
    count = 0;
    countDisplay.textContent = count;
});