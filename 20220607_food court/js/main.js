//toggle hidden menu
const toggleMenu = (toggleId, navlisteId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navlisteId);
    const toggleIcon = document.getElementsByTagName('i')[0];

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            navList.classList.toggle('show-menu');
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x-circle");

        });
    }
}
toggleMenu('nav-toggle', 'nav-list');
const addNow = (homeCardId) => {
    //html -> js
    const homeCard = document.getElementById(homeCardId);

    //시간 -> index번째 식사가 선택되어야 하는지 결정
    //조식 끝-8:00
    //중식 끝-1:00
    //석식 끝-5:50
    var now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    hour = 4;
    minute = 20;
    console.log(hour, minute); // 14 25
    index = 0;

    //homeCard에서 index번째 card에 now클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');

}
addNow('home-card');