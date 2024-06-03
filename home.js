document.addEventListener('DOMContentLoaded', () => {

    var menu = document.getElementById('menu');

    menu.addEventListener('click', (event) => {
        event.preventDefault();

        var navbar = document.querySelector('.navbar');
        var navitem = document.querySelector('.navitem');


        if (!navitem.classList.contains('active')) {
            navitem.style.display = 'block';
            navitem.classList.add('active');
            navbar.style.height = '18rem';
        } else {
            navitem.classList.remove('active');
            navbar.style.height = '60px';
        }
    });

    var navitem = document.querySelector('.navitem');


    window.addEventListener('resize', () => {
        if (window.innerWidth <= 950) {
            navitem.style.display = 'block';
        } else {
            navitem.style.display = 'block';
        }
    });


    var nature=document.querySelector('.nature');
    var iconvideo=document.querySelector('#iconvideo');
    var naturevideo=document.querySelector('.naturevideo');
    var bgvideo=document.getElementById('background-video');
    var welcome=document.querySelector('.welcome1');
    var nature1=document.querySelector('.nature1');

    naturevideo.addEventListener('click',(event)=>{
        event.preventDefault();

        if(!iconvideo.classList.contains('fa-pause')){
            iconvideo.classList.add('fa-pause')
            iconvideo.classList.remove('fa-play')
            nature.style.background='none';
            welcome.style.visibility='hidden';
            bgvideo.play();
        }
        else {
            bgvideo.pause();
            iconvideo.classList.remove('fa-pause')
            iconvideo.classList.add('fa-play')
            welcome.style.visibility='visible'
            nature.style.background='linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(images/naturebg.jpg)';
            nature.style.backgroundAttachment='fixed';
            nature.style.backgroundSize='cover';
            nature.style.backgroundPosition='center';

        }
    });


    var dark=document.getElementById('dark');
    var famoon=document.querySelector('.fa-moon');
    var body=document.querySelector('body');
    var navbar = document.querySelector('.navbar');
    var atags=document.querySelectorAll('.navbar a')
    var aboutservices=document.querySelector('.About-services')
    var about2=document.querySelector('.About-2')
    var about3=document.querySelector('.About-3')
    var about4=document.querySelector('.About-4')
    var about1=document.querySelector('.About-1')


    dark.addEventListener('click',event=>{
        event.preventDefault();

    if(!famoon.classList.contains('fa-regular')){
       famoon.classList.remove('fa-solid');
       famoon.classList.add('fa-regular');
       body.style.backgroundColor='black';
       body.style.color='white';
       navbar.style.backgroundColor='black';
       atags.forEach(atag=>{
        atag.style.color='white';    
       })
       navbar.style.boxShadow = "0 0 10px 3px #141212";
       aboutservices.style.boxShadow='none'
       about2.style.boxShadow='none'
       about3.style.boxShadow='none'
       about4.style.boxShadow='none'
    }
    else{
        famoon.classList.remove('fa-regular');
        famoon.classList.add('fa-solid');
        body.style.backgroundColor='white';
        body.style.color='black';
        navbar.style.backgroundColor='white';
        atags.forEach(atag=>{
            atag.style.color='black';
        })
         navbar.style.boxShadow = "0 0 10px 2px #969393";   
        aboutservices.style.boxShadow='5px 5px 13px rgba(66, 61, 61, 0.959)'
        about2.style.boxShadow='5px 5px 13px rgba(66, 61, 61, 0.959)'
        about3.style.boxShadow='5px 5px 13px rgba(66, 61, 61, 0.959)'
        about4.style.boxShadow='5px 5px 13px rgba(66, 61, 61, 0.959)'
   
        }

    });

    function addHoverEffect(aboutElement, overElements) {
        aboutElement.addEventListener('mouseover', () => {
            overElements.forEach(element => {
                element.classList.add('show');
            });
        });
    
        aboutElement.addEventListener('mouseout', () => {
            overElements.forEach(element => {
                element.classList.remove('show');
            });
        });
    }
    
    var over1 = document.querySelectorAll('.services-over-1');
    var over2 = document.querySelectorAll('.services-over-2');
    var over3 = document.querySelectorAll('.services-over-3');
    var over4 = document.querySelectorAll('.services-over-4');
    
    addHoverEffect(about1, over1);
    addHoverEffect(about2, over2);
    addHoverEffect(about3, over3);
    addHoverEffect(about4, over4);
    

    var scrollContainer = document.querySelector(".tourplaces");
    var leftBtn = document.querySelector('.tour-leftwrap');
    var rightBtn = document.querySelector('.tour-rightwrap');
    
    scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
        scrollContainer.style.scrollBehavior = 'auto';
    });
    
    leftBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        if (window.innerWidth <= 768) {
            scrollContainer.scrollLeft -= 100; // Smaller scroll amount for small screens
        } else {
            scrollContainer.scrollLeft -= 1300;
        }
    });
    
    rightBtn.addEventListener('click', () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        if (window.innerWidth <= 768) {
            scrollContainer.scrollLeft += 100; // Smaller scroll amount for small screens
        } else {
            scrollContainer.scrollLeft += 1300;
        }
    });
    
});
