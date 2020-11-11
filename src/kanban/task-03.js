const selectMenu = document.querySelector('.shevron-icon');
const userProfile = document.querySelector('.menu-right');
const btn = document.querySelector('.profile');

const list = document.createElement('ul');
list.classList.add('list');

const account = document.createElement('li');
account.innerHTML = 'My account';
list.appendChild(account);
account.classList.add('item');

const tasks = document.createElement('li');
tasks.innerHTML = 'My tasks';
list.appendChild(tasks);
tasks.classList.add('item');

const exit = document.createElement('li');
exit.innerHTML = 'Log out';
list.appendChild(exit);
exit.classList.add('item');

btn.addEventListener('click', function () {
    userProfile.classList.toggle('open');
    
    if (userProfile.classList.contains('open')) {
        userProfile.appendChild(list);
    } else {
        list.remove(); 
    }
});