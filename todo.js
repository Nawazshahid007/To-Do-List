function addTask() {
    const inputValue = document.getElementById("inputTask").value

    if(inputValue === "") {
        alert("Please enter a task!")
        return;
    }

    const tasks = document.querySelectorAll("li")
    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].textContent.replace("Delete", "").trim() === inputValue.trim()) {
            alert("Task already exists!")
            return
        }
    }

    const newTask = document.createElement("li")
    const taskList = document.getElementById("inputText")
    taskList.appendChild(newTask)

    newTask.textContent = inputValue
    document.getElementById("inputTask").value = "";
    deleteTask(newTask)
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);

    deleteBtn.onclick = function () {
        newTask.remove()
    }
}