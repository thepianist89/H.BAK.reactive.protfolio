let serviceCard1 = document.querySelector('.service_1');
let serviceCard2 = document.querySelector('.service_2');
let serviceCard3 = document.querySelector('.service_3');

let serviceLink1 = document.querySelector('.service_link1');
let serviceLink2 = document.querySelector('.service_link2');
let serviceLink3 = document.querySelector('.service_link3');

serviceLink1.addEventListener('click', () => {
  serviceCard1.style.display = 'flex';
  serviceCard2.style.display = 'none';
  serviceCard3.style.display = 'none';
});

serviceLink2.addEventListener('click', () => {
  serviceCard1.style.display = 'none';
  serviceCard2.style.display = 'flex';
  serviceCard3.style.display = 'none';
});

serviceLink3.addEventListener('click', () => {
  serviceCard1.style.display = 'none';
  serviceCard2.style.display = 'none';
  serviceCard3.style.display = 'flex';
});

let swiper = new Swiper('.RecentWorkSwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
