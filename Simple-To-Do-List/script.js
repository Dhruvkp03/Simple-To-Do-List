function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <input type="checkbox" onchange="completeTask(this)">
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = '';
}

function completeTask(checkbox) {
    const taskText = checkbox.previousElementSibling;
    taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

function deleteTask(button) {
    const li = button.parentNode;
    li.parentNode.removeChild(li);
}
