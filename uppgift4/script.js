// var swiper = new Swiper('.swiper-container', {
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//     },
//     loop: true,
//     grabCursor: true,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });


var swiper = new Swiper('.swiper1', { 
	autoplay:true, 
    pagination: {
        el: '.swp1',
    },    
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});   

var swiper2 = new Swiper('.swiper2', {  
    autoplay:true, 
    pagination: {
        el: '.swp2',
    },    
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
        },

        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        }
    }

}); 


