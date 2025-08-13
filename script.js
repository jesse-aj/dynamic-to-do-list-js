document.addEventListener("DOMContentLoaded", function() {
 
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList  =  document.getElementById("task-list");

function addTask () {

 const taskInput = taskInput.ariaValueMax.trim();
 if (taskInput === ""){
    alert("Please enter a task.")
 }
}

const listItem = document.createElement("li");
listItem.textContent = taskInput;

//This will create a remove button and remove <li> from the list and also provide new space for input task

const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.className = "remove-btn";
removeButton.onclick = function() {
    taskList.removeChild(listItem);
};

listItem.appendChild(removeButton);
taskList.appendChild(listItem);
taskInput.value = "";




























});