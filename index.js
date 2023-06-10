let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    if(window.scrollY > 250){
        scrollTop.style.display = 'initial';
    }else{
        scrollTop.style.display = 'none';
    }

}

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop:true,
});

let countDate = new Date('june 7, 2023 00:00:00').getTime();

function countDown() {
    let countDate = new Date("2023-11-30").getTime(); // Replace with your desired countdown date
  
    let now = new Date().getTime();
    let gap = countDate - now;
  
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
  
    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);
  
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
  }
  
  countDown(); // Call the function to start the countdown
  


setInterval(function(){
    countDown();
},1000)

$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });