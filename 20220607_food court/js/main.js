//toggle hidden menu
function toggleMenu(toggleId, navlisteId){
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navlisteId);

    function clickHandler(){
        navList.classList.toggle('show-menu');
    }

    if(toggle && navList){
        toggle.addEventListener('click', clickHandler);
    }
}
toggleMenu('nav-toggle','nav-list');