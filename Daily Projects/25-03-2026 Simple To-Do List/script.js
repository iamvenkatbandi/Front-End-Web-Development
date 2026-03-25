let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", function(){
    let task = input.value;

    if(task == ""){
        alert("Please enter a Task.");
        return;
    }

    let li = document.createElement("li");

    li.textContent = task;

    /*let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener("click",function(){
        li.remove();
    });

    li.appendChild(deleteBtn);*/

    list.appendChild(li);

    input.value = "";
});