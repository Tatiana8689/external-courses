import "./styles.css"
import "./components/Tasks/mock.js";
import { renderTasks } from "./components/Tasks/render_tasks.js";
import { blockItems, buttons, selectButtons, shevronButton, taskBlocksOrder, taskInput, idCount } from "./components/Tasks/constants-task.js";
import { userProfile, btn, list } from "./components/Header/header-profile.js";

btn.addEventListener('click', function () {
    userProfile.classList.toggle('open');

    if (userProfile.classList.contains('open')) {
        userProfile.appendChild(list);
    } else {
        list.remove();
    }
});

taskBlocksOrder.forEach(key => {
    if (key === 'backlog') {
        buttons[key].addEventListener('click', () => {
            taskInput.classList.add('visible');
            buttons[key].classList.add('invisible');
            taskInput.focus();

            taskInput.addEventListener('blur', function () {
                if (taskInput.value === "") {
                    taskInput.classList.remove('visible');
                    buttons[key].classList.remove('invisible');
                } else {
                    idCount = idCount + 1;
                    blockItems[key].push({ id: "task" + idCount, name: taskInput.value });
                    taskInput.value = "";
                    taskInput.classList.remove('visible');
                    buttons[key].classList.remove('invisible');
                    renderTasks();
                }
            });

            taskInput.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    if (taskInput.value === "") {
                        taskInput.classList.remove('visible');
                        buttons[key].classList.remove('invisible');
                    } else {
                        idCount = idCount + 1;
                        blockItems[key].push({ id: "task" + idCount, name: taskInput.value });
                        taskInput.value = "";
                        taskInput.classList.remove('visible');
                        buttons[key].classList.remove('invisible');
                        renderTasks();
                    }
                }
            });

        });

        return;
    }

    buttons[key].addEventListener('click', () => {
        buttons[key].classList.add('invisible');
        selectButtons[key].classList.add('visible');
    });

    selectButtons[key].addEventListener('click', () => {
        shevronButton[key].classList.add('open');

        const list = document.createElement('ul');

        list.classList.add('select-list');

        const blockOrder = taskBlocksOrder.findIndex(blockKey => key === blockKey);
        const prevBlock = taskBlocksOrder[blockOrder - 1];

        blockItems[prevBlock].forEach(item => {
            const dropItem = document.createElement('li');

            dropItem.id = item.id;
            dropItem.innerText = item.name;
            dropItem.classList.add('item');
            list.appendChild(dropItem);

            dropItem.addEventListener('click', () => {
                const taskIndex = blockItems[prevBlock].findIndex(({ id }) => {
                    return id === dropItem.id;
                });

                blockItems[key].push(blockItems[prevBlock][taskIndex]);
                blockItems[prevBlock].splice(taskIndex, 1)
                shevronButton[key].classList.remove('open');
                selectButtons[key].classList.remove('visible');
                buttons[key].classList.remove('invisible');
                list.remove();
                renderTasks();
            });
        });

        selectButtons[key].appendChild(list);
    });
});

renderTasks();
