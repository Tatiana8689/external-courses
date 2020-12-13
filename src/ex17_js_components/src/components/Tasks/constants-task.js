const items = JSON.parse(localStorage.getItem("items"));
let idCount = +localStorage.getItem("id-count");

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

export { items, blocks, blockItems, buttons, selectButtons, shevronButton, taskBlocksOrder, taskInput, idCount }
