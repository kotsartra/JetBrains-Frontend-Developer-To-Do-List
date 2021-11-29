
// add delete buttons
const toDoListItems = document.getElementsByTagName('li');
for (let i = 0; i < toDoListItems.length; i++) {
    const delButton = document.createElement('button');
    delButton.className = 'delete-btn';
    toDoListItems[i].appendChild(delButton);
}

// delete click
const deleteButtons = document.getElementsByClassName('delete-btn');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
        return this.parentNode.remove();
    }
}

// add new task
document.getElementById('add-task-button').addEventListener('click', function () {

    const inputValue = document.getElementById('input-task').value;
    const li = document.createElement('li');


    if (inputValue === '') {
        alert('Введите текст!');
    } else {
        document.getElementById('task-list').appendChild(li);
    }

    const span = document.createElement('span');
    span.className = 'task';
    li.appendChild(span);

    const inputContent = document.createTextNode(`${inputValue}`);
    span.appendChild(inputContent);


    document.getElementById('input-task').value = ''; 

    const delButton = document.createElement('button');
    delButton.className = 'delete-btn';
    li.appendChild(delButton);

    const deleteButtons = document.getElementsByClassName('delete-btn');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function () {
            let div = this.parentElement;
            return div.remove();
        }
    }

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';

    const firstChild = document.getElementsByClassName('task');

    li.insertBefore(checkbox, li.firstChild);

});