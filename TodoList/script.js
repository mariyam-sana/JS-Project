 function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${taskText}</span>
      <span class="new" onclick="toggleComplete(this)">&#9989;</span>
      <span class="delete-btn" onclick="deleteTask(this)">&#10006;</span>
    `;
  
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
  
  function toggleComplete(task) {
    task.parentElement.classList.toggle("completed");
  }
  
  function deleteTask(task) {
    task.parentElement.remove();
  } 
  