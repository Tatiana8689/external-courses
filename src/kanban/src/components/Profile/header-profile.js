const userProfile = document.querySelector('.menu-right');
const profileButton = document.querySelector('.profile');

const menuList = document.createElement('ul');
menuList.classList.add('list');

const account = document.createElement('li');
account.innerHTML = 'My account';
menuList.appendChild(account);
account.classList.add('item');

const tasks = document.createElement('li');
tasks.innerHTML = 'My tasks';
menuList.appendChild(tasks);
tasks.classList.add('item');

const exit = document.createElement('li');
exit.innerHTML = 'Log out';
menuList.appendChild(exit);
exit.classList.add('item');


export { userProfile, profileButton, menuList }
