$(document).ready(function () {

     $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -110
    }, 800);
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
});

document.addEventListener('DOMContentLoaded', (e) => 
{
let burger  = document.querySelector('.burger');
let nav     = document.querySelector('.list-items');
let links   = document.querySelectorAll('.item');
    burger.addEventListener('click', (e) => {
        closeNav(nav,burger,links)
      
        })
    
    
        document.addEventListener('click', (e) => {
            if(e.target.getAttribute('href')){
    
                closeNav(nav,burger,links)
            
            }
        })
    function closeNav (nav, burger,links) {
        nav.classList.toggle('nav-active');
    
            //Animate links 
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';   
                } else {
                    link.style.animation = `navLinkFade 1s linear forwards ${index / 7 + 0.5}s`;
                }     
            })
            //Toggle close button
            burger.classList.toggle('toggle');
    }

})

 