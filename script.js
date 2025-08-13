// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  
    // ==========================
    // ELEMENT REFERENCES
    // ==========================
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // ==========================
    // LOAD SAVED TASKS FROM LOCALSTORAGE
    // ==========================
    function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        const tasksArray = JSON.parse(savedTasks);
        tasksArray.forEach(function (taskText) {
            createTaskElement(taskText);
        });
    }
}

    // ==========================
    // FUNCTION: CREATE AND DISPLAY A TASK
    // ==========================
    function createTaskElement(taskText) {
        // Create <li> element for the task
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
         // Create "Remove" button for this task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // When remove button is clicked → delete task from UI + localStorage
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeFromLocalStorage(taskText);
        };

        // Add the button inside the <li>
        listItem.appendChild(removeButton);

        // Add the <li> to the task list
        taskList.appendChild(listItem);
    }
     // ==========================
    // FUNCTION: ADD A NEW TASK
    // ==========================
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create and display the task
        createTaskElement(taskText);

        // Save task to localStorage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Clear input field
        taskInput.value = "";
    }
     // ==========================
    // FUNCTION: REMOVE TASK FROM LOCALSTORAGE
    // ==========================
    function removeFromLocalStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // ==========================
    // EVENT LISTENERS
    // ==========================

    // Click "Add Task" button → add a new task
    addButton.addEventListener("click", addTask);

    // Press "Enter" key inside the input field → add a new task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});