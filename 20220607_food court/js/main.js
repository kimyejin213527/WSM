//toggle hidden menu
const toggleMenu = function (toggleId, navlisteId){
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navlisteId);

    const clickHandler = function (){
        navList.classList.toggle('show-menu');
    }

    if(toggle && navList){
        toggle.addEventListener('click', clickHandler);
    }
}
toggleMenu('nav-toggle','nav-list');