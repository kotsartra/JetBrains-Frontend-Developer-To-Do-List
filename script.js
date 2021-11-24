document.querySelector(`.add-task-button`).addEventListener(`click`, function () {
    let li = document.createElement(`li`);
    let inputValue = document.querySelector(`.input-task`).value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert(`Введите текст!`);
    } else {
        // document.querySelector(".task-list").appendChild(li);

        let li = `<li>
                    <label>
                        <input type="checkbox" class="checkbox" />
                        <span class="task">${inputValue}</span>
                    </label>
                    <button class="delete-btn"></button>
                  </li>`;

        let list = document.querySelector(".task-list");

        list.innerHTML += li;
    }
    document.querySelector(`.input-task`).value = ``;
});