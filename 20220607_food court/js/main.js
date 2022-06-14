//toggle hidden menu
const toggleMenu =  (toggleId, navlisteId)=>{
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navlisteId);

    if(toggle && navList){
        toggle.addEventListener('click', ()=> navList.classList.toggle('show-menu'))        ;
    }
}
toggleMenu('nav-toggle','nav-list');