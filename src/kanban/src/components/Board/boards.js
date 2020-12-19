import { main } from "../Constants/constants.js";

export const board = (key) => {
  const section = document.createElement('section');
  section.className = 'block';
  section.id = `${key.title}`.split(" ").join("")

  const listHeader = document.createElement('div');
  listHeader.className = 'list-header';

  const listName = document.createElement('div');

  listName.className = 'list-name';
  listName.innerHTML = key.title;

  const dotButton = document.createElement('button');

  dotButton.className = 'dot';
  dotButton.id = `${key.title}`.split(" ").join("") + "-dot";
  dotButton.innerHTML = '•••';

  const container = document.createElement('ul');

  container.className = "task-list";
  container.id = `${key.title}`.split(" ").join("") + "-task-list";

  const input = document.createElement('input');

  input.type = "text";
  input.value = "";
  input.className = "task-input";

  const selectButton = document.createElement('button');

  selectButton.type = 'button';
  selectButton.className = 'select'
  selectButton.id = `${key.title}`.split(" ").join("") + "-select"

  const addTaskButton = document.createElement('button');

  addTaskButton.type = 'button';
  addTaskButton.className = 'add'
  addTaskButton.id = `${key.title}`.split(" ").join("") + "-add"
  addTaskButton.innerHTML = '+ Add card';

  const shevron = document.createElement('div');

  shevron.className = "shevron";
  shevron.id = `${key.title}`.split(" ").join("") + "-shevron";

  const img = document.createElement('img');

  img.className = "shevron-icon";
  img.src = "image/arrow-down-black.svg";
  img.alt = "arrow"

  shevron.appendChild(img);
  selectButton.appendChild(shevron)
  listHeader.appendChild(listName);
  listHeader.appendChild(dotButton);
  section.appendChild(listHeader);
  section.appendChild(container)
  section.appendChild(input);
  section.appendChild(selectButton)
  section.appendChild(addTaskButton);
  main.appendChild(section);
}
