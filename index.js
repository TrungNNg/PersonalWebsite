// Toggle nav
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

/* 
--body-bg: #303A52;
--panel-bg: #39445F;
--nav-bg: #2C354A;
--text-primary: #ffffff;
--text-secondary: #A5B2D3;
--text-bg: #FC85AE;
--svg-fill: #ffffff;

//light
--body-bg: #ffffff;
--panel-bg: #6baec5;
--nav-bg: #ffffff;
--text-primary: #000000;
--text-secondary: #ffffff;
--text-bg: #07436e;
--svg-fill: #000000;
*/

//Change theme
const toggle = document.getElementById('toggle-theme');
const root = document.documentElement;

let isDarkMode = true;

toggle.addEventListener('click', () => {
    if(isDarkMode){
        toggle.innerText = 'Dark Theme';
        root.style.setProperty('--body-bg', '#ffffff');
        root.style.setProperty('--panel-bg', '#4a73db');
        root.style.setProperty('--nav-bg', '#f5f5f5');
        root.style.setProperty('--text-primary', '#000000');
        root.style.setProperty('--text-secondary', '#ffffff');
        root.style.setProperty('--text-bg', '#07436e');
        root.style.setProperty('--svg-fill', '#000000');
        isDarkMode = false;
    }else{
        toggle.innerText = 'Light Theme';
        root.style.setProperty('--body-bg', '#303A52');
        root.style.setProperty('--panel-bg', '#39445F');
        root.style.setProperty('--nav-bg', '#2C354A');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#A5B2D3');
        root.style.setProperty('--text-bg', '#56b3ca');
        root.style.setProperty('--svg-fill', '#ffffff');
        isDarkMode = true;
    }
})