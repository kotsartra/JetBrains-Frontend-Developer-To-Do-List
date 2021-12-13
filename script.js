const ulList = document.getElementById('task-list');
const inputTask = document.getElementById('input-task');
const addTaskButton = document.getElementById('add-task-button');

let taskStorage = [];

// get from localStorage
function restoreTaskList(task, checked=false) {
    taskStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    taskStorage.forEach((value) => {
        createLi(value.task, value.checked);
    });
}
restoreTaskList();

// delete task
ulList.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove();
        saveTaskList();
    }
});

// mark task as checked
// for now, crossing out through css, then fix it
ulList.addEventListener('click', (e) => {

    if (e.target.classList.contains('checkbox')){
        // let span = e.target.parentElement.querySelector('span');
        // span.classList.toggle('checked');
        saveTaskList();
    }
});

// create new task
function createLi (task, checked=false) {

    const li = document.createElement('li');
    const span = document.createElement('span');
    const inputContent = document.createTextNode(task);
    const delButton = document.createElement('button');
    const checkbox = document.createElement('input');
    const firstChild = document.getElementsByClassName('task');

    document.getElementById('task-list').appendChild(li);

    span.className = 'task';
    // span.appendChild(document.createTextNode(task));
    li.appendChild(span);

    span.appendChild(inputContent);

    delButton.className = 'delete-btn';
    li.appendChild(delButton);

    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = checked;

    li.insertBefore(checkbox, li.firstChild);



    document.getElementById('input-task').value = '';
}

// check input
function checkInputValue (input) {
    const isInputBlank = input.value === '';
    if (isInputBlank) alert('Введите текст!')
    return !isInputBlank;
}

// add new task click
addTaskButton.addEventListener('click',  function (e) {

    if (!checkInputValue(inputTask)) return
    createLi(inputTask.value);
    saveTaskList();

});

// add new task keydown enter
inputTask.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addTaskButton.click();
        e.preventDefault();
    }
});

// save to localStore
function saveTaskList() {
    let tasks = ulList.querySelectorAll('li');
    taskStorage = [];
    tasks.forEach((t) => {
        taskStorage.push({
            'task': t.querySelector('.task').textContent,
            'checked': t.querySelector(".checkbox").checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(taskStorage));
}