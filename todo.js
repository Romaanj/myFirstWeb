const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let lists = [];

function storeList() {
    localStorage.setItem("to-do", JSON.stringify(lists));
}

function buttonClicked(event) {
    const clickedList = event.target.parentElement;
    clickedList.remove();
    lists = lists.filter((item) => {return item.id !== parseInt(clickedList.id)});
    storeList();

}

function showToDoList(activity) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = activity.text;
    button.innerText = "❌"
    li.id = activity.id;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click",buttonClicked)

}

function handleToDoList(event) {
    event.preventDefault();
    const activity = { "text" : toDoInput.value, "id" : Date.now()};
    toDoInput.value = "";
    showToDoList(activity);
    lists.push(activity);
    storeList();
}

toDoForm.addEventListener("submit",handleToDoList);

const savedToDos = localStorage.getItem("to-do");

if ( savedToDos !== null ) {
    const arrayToDo = JSON.parse(savedToDos);
    lists = arrayToDo;
    arrayToDo.forEach(showToDoList);
}

