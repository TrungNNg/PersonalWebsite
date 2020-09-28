const get = id => document.getElementById(id);

const open = get('menu-btn');
const exit = get('exit-btn');
const nav = get('nav')

open.addEventListener('click', function(){
    console.log('open button')
    nav.classList.add('nav-open')
})

exit.addEventListener('click', function(){
    nav.classList.remove('nav-open');
})