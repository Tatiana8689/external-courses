const selectMenu = document.querySelector('.profile-menu');
const userProfile = document.querySelector('.menu-right');
const btn = document.querySelector('.profile');

const list = document.createElement('ul');
list.classList.add('list');

const account = document.createElement('li');
account.innerHTML = 'My account';
account.classList.add('item');

const tasks = document.createElement('li');
tasks.innerHTML = 'My tasks';
tasks.classList.add('item');

const exit = document.createElement('li');
exit.innerHTML = 'Log out';
exit.classList.add('item');

btn.addEventListener('click', function () {
    userProfile.classList.toggle('open');
    
    if (userProfile.classList.contains('open')) {
        selectMenu.style.transform ='scale(1, -1)';
        userProfile.appendChild(list);
        list.appendChild(account);
        list.appendChild(tasks);
        list.appendChild(exit);
    } else {
        selectMenu.style.transform ='scale(1, 1)';
        list.remove(); 
    }
});
