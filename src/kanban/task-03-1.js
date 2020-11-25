const items = JSON.parse(localStorage.getItem("items"));
let idCount = localStorage.getItem("id-count");

const blocks = {
    backlog: document.getElementById('backlog-tasks'),
    ready: document.getElementById('ready-tasks'),
    inProgress: document.getElementById('inProgress-tasks'),
    finished: document.getElementById('finished-tasks'),
}

const blockItems = {
    backlog: items[0].issues,
    ready: items[1].issues,
    inProgress: items[2].issues,
    finished: items[3].issues,
}

const buttons = {
    backlog: document.getElementById('backlog-add'),
    ready: document.getElementById('ready-add'),
    inProgress: document.getElementById('inProgress-add'),
    finished: document.getElementById('finished-add'),
}

const selectButtons = {
    ready: document.getElementById('ready-select'),
    inProgress: document.getElementById('inProgress-select'),
    finished: document.getElementById('finished-select'),
}

const shevronButton = {
    ready: document.getElementById('ready-shevron'),
    inProgress: document.getElementById('inProgress-shevron'),
    finished: document.getElementById('finished-shevron'),
}

const taskBlocksOrder = ['backlog', 'ready', 'inProgress', 'finished'];
const taskInput = document.querySelector('.task-input');

const renderTasks = () => {
    localStorage.setItem("id-count", `${idCount}`);
    localStorage.setItem("items", JSON.stringify(items));

    Object.keys(blockItems).forEach(key => {
        blocks[key].innerHTML = '';
        blockItems[key].forEach(item => {
            const taskItem = document.createElement('li');

            taskItem.innerText = item.name;
            taskItem.id = item.id;
            blocks[key].appendChild(taskItem);
        });
    });

    taskBlocksOrder.forEach((key, i) => {
        const nextKey = taskBlocksOrder[i + 1];

        if (!nextKey) {
            return;
        }

        if (blockItems[key].length === 0) {
            buttons[nextKey].setAttribute('disabled', 'disabled');
            buttons[nextKey].style.opacity = '0.5';
        } else {
            buttons[nextKey].removeAttribute('disabled', 'disabled');
            buttons[nextKey].style.opacity = '1';
        }
    });
}

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
                    idCount++
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
                        idCount++
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

                blockItems[key] = [...blockItems[key], ...blockItems[prevBlock].splice(taskIndex, 1)];
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
