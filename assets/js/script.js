let menuBtn = document.querySelector('#menu-btn');
let navContainer = document.getElementById('mobile-view-nav');

menuBtn.addEventListener('click',function(){
    // if(menuBtn.classList.contains('fa-bars')){
    //     menuBtn.classList.replace('fa-bars','fa-times');
    // }
    // else menuBtn.classList.replace('fa-times','fa-bars');
    navContainer.classList.toggle('menu-show');
});