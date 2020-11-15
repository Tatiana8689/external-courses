let dataMock = [
    {
        title: 'Backlog',
        issues: [
            {
                id: 'task1',
                name: 'Login page - performance issues'
            },
            {
                id: 'task2',
                name: 'Sprint bugfix'
            }
        ],
    },
    {
        title: 'Ready',
        issues: [
            {
                id: 'task1',
                name: 'Shop page - performance issues'
            },
            {
                id: 'task2',
                name: 'Checkout bugfix'
            },
            {
                id: 'task3',
                name: 'Shop bug 1'
            },
            {
                id: 'task4',
                name: 'Shop bug 2'
            },
            {
                id: 'task5',
                name: 'Shop bug 3'
            },
            {
                id: 'task6',
                name: 'Shop bug 4'
            },
            {
                id: 'task5',
                name: 'Shop bug 3'
            },
            {
                id: 'task6',
                name: 'Shop bug 4'
            }
        ],
    },
    {
        title: 'in progress',
        issues: [
            {
                id: 'task1',
                name: 'User page - performance issues'
            },
            {
                id: 'task2',
                name: 'Auth bugfix'
            }
        ],
    },
    {
        title: 'Finished',
        issues: [
            {
                id: 'task1',
                name: 'Main page - performance issues'
            },
            {
                id: 'task2',
                name: 'Main page bugfix'
            }
        ],
    },
]

localStorage.setItem('kanban', JSON.stringify(dataMock));
let items = JSON.parse(localStorage.getItem('kanban'));

const backlogTasks = document.getElementById('backlog-tasks');
const readyTasks = document.getElementById('ready-tasks');
const inProgressTasks = document.getElementById('inProgress-tasks');
const finishedTasks = document.getElementById('finished-tasks');

const backlogItem = items[0].issues;
const readyItem = items[1].issues;
const inProgressItem = items[2].issues;
const finishedItem = items[3].issues;

backlogItem.forEach(item => {
    const listItem = document.createElement('li');

    listItem.innerText = item.name;
    listItem.id = item.id;
    backlogTasks.appendChild(listItem);
})


readyItem.forEach(item => {
    const listItem = document.createElement('li');

    listItem.innerText = item.name;
    listItem.id = item.id;
    readyTasks.appendChild(listItem);
})

inProgressItem.forEach(item => {
    const listItem = document.createElement('li');

    listItem.innerText = item.name;
    listItem.id = item.id;
    inProgressTasks.appendChild(listItem);
})

finishedItem.forEach(item => {
    const listItem = document.createElement('li');

    listItem.innerText = item.name;
    listItem.id = item.id;
    finishedTasks.appendChild(listItem);
})

const addTask = document.getElementById('backlog-add');
const taskInput = document.querySelector('.task-input');
const readyAdd = document.getElementById('ready-add');
const inProgressAdd = document.getElementById('inProgress-add');
const finishedAdd = document.getElementById('finished-add');
const readySelect = document.getElementById('ready-select');
const inProgressSelect = document.getElementById('inProgress-select');
const finishedSelect = document.getElementById('finished-select');
const selectBacklogTasks = document.querySelectorAll('#backlog-tasks li');
const readyShevron = document.getElementById('ready-shevron');
const inProgressShevron = document.getElementById('inProgress-shevron')
const finishedShevron = document.getElementById('finished-shevron')
const selectReadyTasks = document.querySelectorAll('#ready-tasks li');
const selectInProgressTasks = document.querySelectorAll('#inProgress-tasks li');

let count = 3;

addTask.addEventListener('click', function () {
    taskInput.classList.add('visible');
    taskInput.focus();
});

taskInput.addEventListener('blur', function () {
    if (taskInput.value === "") {
        taskInput.classList.remove('visible');
    } else {
        const newTask = document.createElement('li');

        newTask.setAttribute('id', 'task' + count);
        newTask.innerText = taskInput.value;
        backlogTasks.appendChild(newTask);

        const newItem = {}

        newItem.id = newTask.getAttribute('id');
        newItem.name = newTask.innerText;
        backlogItem.push(newItem);
        localStorage.setItem('kanban', JSON.stringify(items));
        taskInput.value = "";
        taskInput.classList.remove('visible')
    }
    count++;
})

readyAdd.addEventListener('click', function () {
    readySelect.classList.add('visible');
});

const readyList = document.createElement('ul');

readyList.classList.add('select-list');
backlogItem.forEach(item => {
    const drop = document.createElement('li');

    drop.id = item.id;
    drop.innerText = item.name;
    drop.classList.add('item');
    readyList.appendChild(drop);
    drop.addEventListener('click', function () {
        readyTasks.appendChild(drop);
        readySelect.classList.remove('visible');
    });
});

readyShevron.addEventListener('click', function () {
    readyShevron.classList.toggle('open');
    if (readyShevron.classList.contains('open')) {
        readySelect.appendChild(readyList);
    } else {
        readyList.remove();
        readySelect.classList.remove('visible');
    }
});

inProgressAdd.addEventListener('click', function () {
    inProgressSelect.classList.add('visible');
});

const inProgressList = document.createElement('ul');

inProgressList.classList.add('select-list');
readyItem.forEach(item => {
    const drop = document.createElement('li');

    drop.id = item.id;
    drop.innerText = item.name;
    drop.classList.add('item');
    inProgressList.appendChild(drop);
    drop.addEventListener('click', function () {
        inProgressTasks.appendChild(drop);
        inProgressSelect.classList.remove('visible');
    });
});

inProgressShevron.addEventListener('click', function () {
    inProgressShevron.classList.toggle('open');
    if (inProgressShevron.classList.contains('open')) {
        inProgressSelect.appendChild(inProgressList);
    } else {
        inProgressList.remove();
        inProgressSelect.classList.remove('visible');
    }
});

finishedAdd.addEventListener('click', function () {
    finishedSelect.classList.add('visible');
});

const finishedList = document.createElement('ul');

finishedList.classList.add('select-list');
finishedItem.forEach(item => {
    const drop = document.createElement('li');
    drop.id = item.id;
    drop.innerText = item.name;
    drop.classList.add('item');
    finishedList.appendChild(drop);
    drop.addEventListener('click', function () {
        finishedTasks.appendChild(drop);
        finishedSelect.classList.remove('visible');
    });
});

finishedShevron.addEventListener('click', function () {
    finishedShevron.classList.toggle('open');
    if (finishedShevron.classList.contains('open')) {
        finishedSelect.appendChild(finishedList);
    } else {
        finishedList.remove();
        finishedSelect.classList.remove('visible');
    }
});

if (backlogItem.length === 0) {
    readyAdd.setAttribute('disabled', 'disabled');
    readyAdd.style.opacity = '0.5';
}

if (readyItem.length === 0) {
    inProgressAdd.setAttribute('disabled', 'disabled');
    readyAdd.style.opacity = '0.5';
}

if (inProgressItem.length === 0) {
    finishedAdd.setAttribute('disabled', 'disabled');
    readyAdd.style.opacity = '0.5';
}
