document.getElementById("add-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("complete-btn");
        completeButton.onclick = function() {
            listItem.classList.toggle("completed");
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        
        taskList.appendChild(listItem);
        
        taskInput.value = "";
    }
});
