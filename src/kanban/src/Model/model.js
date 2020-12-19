const TASKS = "items";

const dataMock = [
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
                id: 'task3',
                name: 'Shop page - performance issues'
            },
            {
                id: 'task4',
                name: 'Checkout bugfix'
            },
            {
                id: 'task5',
                name: 'Shop bug 1'
            },
            {
                id: 'task6',
                name: 'Shop bug 2'
            },
            {
                id: 'task7',
                name: 'Shop bug 3'
            },
            {
                id: 'task8',
                name: 'Shop bug 4'
            },
            {
                id: 'task9',
                name: 'Shop bug 5'
            },
            {
                id: 'task10',
                name: 'Shop bug 6'
            }
        ],
    },
    {
        title: 'in Progress',
        issues: [
            {
                id: 'task11',
                name: 'User page - performance issues'
            },
            {
                id: 'task12',
                name: 'Auth bugfix'
            }
        ],
    },
    {
        title: 'Finished',
        issues: [
            {
                id: 'task13',
                name: 'Main page - performance issues'
            },
            {
                id: 'task14',
                name: 'Main page bugfix'
            }
        ],
    },
]

if (!localStorage.getItem(TASKS)) {
    localStorage.setItem(TASKS, JSON.stringify(dataMock));
    localStorage.setItem('id-count', '14');
}

const items = JSON.parse(localStorage.getItem("items"));
let idCount = +localStorage.getItem("id-count");

const setStorage = () => {
    localStorage.setItem("id-count", `${idCount}`);
    localStorage.setItem("items", JSON.stringify(items));
}

export { items, idCount, setStorage }
