import { blockItems, taskBlocksOrder, blocks, buttons, items, idCount } from "./constants-task.js"

export const renderTasks = () => {
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