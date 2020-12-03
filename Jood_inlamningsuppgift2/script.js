// iPhone carousel

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

  });


// Button to get on top off side
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Trigger animation on Banner
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.slide1'
})
    .setClassToggle('.slide1', 'slide-in1')
    .addTo(controller); 


var scene = new ScrollMagic.Scene({
    triggerElement: '.slide2'
    
})
    .setClassToggle('.slide2', 'slide-in2')
    .addTo(controller); 