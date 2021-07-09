const swiper = new Swiper('.swiper-container', {
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.8,
        spaceBetween: 8
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 17
      },
      1368: {
        slidesPerView: 4.3,
        spaceBetween: 17
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
