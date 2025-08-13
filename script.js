document.addEventListener("DOMContentLoaded", function() {
 
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList  =  document.getElementById("task-list");

 // Loading tasks from localStorage part
const savedTasks = localStorage.getItem("tasks");

if(savedTasks) {
    const tasksArray = JSON.parse(savedTasks);

    tasksArray.forEach(function (tasksText){
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
    });
}

function addTask () {

 const taskText = taskInput.value.trim();

 if (taskText === ""){
    alert("Please enter a task.");
    return;
 }


//Created a new element <li> to store and display tasks on the page, it was stored in the taskInput container
const listItem = document.createElement("li");
listItem.textContent = taskText;

//This also creates a new remove button and give it a name and a style
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.classList.add = "remove-btn";

//A function : This shows when a the remove button is clicked it should remove <li> from the list
removeButton.onclick = function() {
    taskList.removeChild(listItem);
};

// Appent the remove button to the <li> : this adds a remove button to the list after a task has been added
 listItem.appendChild(removeButton);

 //This adds the whole <li> : which now includes the button into the <ul> called taskList.

taskList.appendChild(listItem);

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.push(taskText);
localStorage.setItem("tasks", JSON.stringify(tasks));


//This clear the input feild for the next task
taskInput.value = "";
}



//This adds an event listener to the Add task button
addButton.addEventListener("click", addTask);

//
taskInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        addTask();
    }
})



});