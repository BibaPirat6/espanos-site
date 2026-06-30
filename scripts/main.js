var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    mousewheel: true,
    keyboard: true,
    clickable: true,
  },
});
