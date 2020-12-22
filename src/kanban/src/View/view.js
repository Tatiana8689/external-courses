import { items, setStorage, idCount } from "../Model/model.js";
import { board } from "../components/Board/boards.js";
import { activeCount, finishedCount, main, createNewBoard } from "../components/Constants/constants.js";
import { userProfile, profileButton, menuList } from "../components/Profile/header-profile.js";

profileButton.addEventListener('click', () => {
  userProfile.classList.toggle('open');

  if (userProfile.classList.contains('open')) {
    userProfile.appendChild(menuList);
  } else {
    menuList.remove();
  }
});

board()

const renderBoard = () => {
  setStorage();
  const sectionBlocks = {}

  items.forEach(key => {
    sectionBlocks[key.title] = document.getElementById(`${key.title}`.split(" ").join(""))
  });

  Object.keys(sectionBlocks).forEach(key => {
    sectionBlocks[key].innerHTML = "";
    const listHeader = document.createElement('div');
    listHeader.className = 'list-header';

    const listName = document.createElement('div');

    listName.className = 'list-name';
    listName.innerHTML = key;

    const dotButton = document.createElement('button');

    dotButton.className = 'dot';
    dotButton.id = `${key}`.split(" ").join("") + "-dot";
    dotButton.innerHTML = '•••';

    const container = document.createElement('ul');

    container.className = "task-list";
    container.id = `${key}`.split(" ").join("") + "-task-list";

    const input = document.createElement('input');

    input.type = "text";
    input.value = "";
    input.className = "task-input";
    input.id = `${key}`.split(" ").join("") + "-task-input";

    const selectButton = document.createElement('button');

    selectButton.type = 'button';
    selectButton.className = 'select'
    selectButton.id = `${key}`.split(" ").join("") + "-select"

    const addTaskButton = document.createElement('button');

    addTaskButton.type = 'button';
    addTaskButton.className = 'add'
    addTaskButton.id = `${key}`.split(" ").join("") + "-add"
    addTaskButton.innerHTML = '+ Add card';

    const shevron = document.createElement('div');

    shevron.className = "shevron";
    shevron.id = `${key}`.split(" ").join("") + "-shevron";

    const img = document.createElement('img');

    img.className = "shevron-icon";
    img.src = "image/arrow-down-black.svg";
    img.alt = "arrow";

    shevron.appendChild(img);
    selectButton.appendChild(shevron);
    listHeader.appendChild(listName);
    listHeader.appendChild(dotButton);
    sectionBlocks[key].appendChild(listHeader);
    sectionBlocks[key].appendChild(container);
    sectionBlocks[key].appendChild(input);
    sectionBlocks[key].appendChild(selectButton);
    sectionBlocks[key].appendChild(addTaskButton);
  })
}

renderBoard();

const blockItems = {};
const blocks = {};
const buttons = {};
const selectButtons = {};
const shevronButton = {};
const deliteButtons = {};
const taskInput = {};
const taskBlocksOrder = [];

const update = () => {
  items.forEach(key => {
    blockItems[key.title] = key.issues;
  });

  items.forEach(key => {
    blocks[key.title] = document.getElementById(`${key.title}`.split(" ").join("") + "-task-list");
  });

  items.forEach(key => {
    buttons[key.title] = document.getElementById(`${key.title}`.split(" ").join("") + "-add");
  });

  items.forEach(key => {
    selectButtons[key.title] = document.getElementById(`${key.title}`.split(" ").join("") + "-select");
  });

  items.forEach(key => {
    shevronButton[key.title] = document.getElementById(`${key.title}`.split(" ").join("") + "-shevron");
  });

  items.forEach(key => {
    deliteButtons[key.title] = document.getElementById(`${key.title}`.split(" ").join("") + "-dot");
  });

  items.forEach(key => {
    taskInput[key.title] = document.getElementById(`${key.title}`.split(" ").join("") + "-task-input");
  });

  taskBlocksOrder.length = 0;
  items.forEach(key => {
    taskBlocksOrder.push(key.title);
  });

}

update();

const renderTasks = () => {
  setStorage();
  Object.keys(blockItems).forEach(key => {
    blocks[key].innerHTML = "";
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

  //Counter

  const arr = [];
  const length = items.length - 1;

  for (let i = 1; i < length; i++) {
    arr.push(items[i].issues.length)
  }
  if (arr.length) {
    const activeTaskCount = arr.reduce((sum, el) => sum + el);

    activeCount.innerHTML = `Active tasks: ${activeTaskCount}`
  } else {
    activeCount.innerHTML = `Active tasks: 0`
  }

  const lengthEndBoard = items.length - 1;

  if (items.length && items.length !== 1) {
    const finishedTaskCounter = items[lengthEndBoard].issues.length;

    finishedCount.innerHTML = `Finished tasks: ${finishedTaskCounter}`
  } else {
    finishedCount.innerHTML = `Finished tasks: 0`
  }
}

taskBlocksOrder.forEach(key => {
  if (key === taskBlocksOrder[0]) {
    buttons[key].addEventListener('click', () => {
      taskInput[key].classList.add('visible');
      buttons[key].classList.add('invisible');
      taskInput[key].focus();

      taskInput[key].addEventListener('blur', () => {
        if (taskInput[key].value === "") {
          taskInput[key].classList.remove('visible');
          buttons[key].classList.remove('invisible');
        } else {
          idCount + 1; //eslint-disable-line
          blockItems[key].push({ id: "task" + idCount, name: taskInput[key].value });
          taskInput[key].value = "";
          taskInput[key].classList.remove('visible');
          buttons[key].classList.remove('invisible');
          renderTasks();
        }
      });

      taskInput[key].addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
          if (taskInput[key].value === "") {
            taskInput[key].classList.remove('visible');
            buttons[key].classList.remove('invisible');
          } else {
            idCount + 1; //eslint-disable-line
            blockItems[key].push({ id: "task" + idCount, name: taskInput[key].value });
            taskInput[key].value = "";
            taskInput[key].classList.remove('visible');
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
        blockItems[prevBlock].splice(taskIndex, 1);
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


//Delite Board

taskBlocksOrder.forEach(key => {
  deliteButtons[key].addEventListener("click", () => {
    const deliteMenu = document.createElement('div');

    deliteMenu.className = "delite-board";
    deliteMenu.id = `${key}`;
    deliteMenu.innerHTML = "Удалить";
    deliteButtons[key].appendChild(deliteMenu);

    deliteMenu.addEventListener("click", () => {
      const index = items.findIndex(el => {
        return el.title === key
      });
      items.splice(index, 1);
      board();
      renderBoard();
      update();
      renderTasks();
    });
  });
});

createNewBoard.addEventListener('click', () => {

  const section = document.createElement('section');

  section.className = 'block';
  main.prepend(section);

  const inputNameBoard = document.createElement('input');

  inputNameBoard.className = 'task-input';
  inputNameBoard.type = "text";
  inputNameBoard.placeholder = "Input board's name";
  inputNameBoard.value = "";
  inputNameBoard.style.display = 'block';

  section.appendChild(inputNameBoard);
  inputNameBoard.focus();

  inputNameBoard.addEventListener('blur', () => {
    if (inputNameBoard.value === "") {
      section.remove();
    } else {
      const newItem = {
        title: inputNameBoard.value,
        issues: [],
      }

      items.unshift(newItem);
      board();
      renderBoard();
      update();
      renderTasks();
    }
  });
});

if (items.length === 0) {
  const message = document.createElement("h1");
  const messageBlock = document.createElement("div");

  messageBlock.className = "message";
  message.innerHTML = "Create new list";
  messageBlock.appendChild(message);
  main.appendChild(messageBlock);
}

renderTasks();
