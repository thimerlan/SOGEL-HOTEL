
var swiper = new Swiper(".myswiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1500,
	parallax: true,
	loop: true,
    effect: "fade",
     navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
		dynamicBullets: true,
    },
	autoplay: {
		delay: 1000,
		stopOnLlastSlide: false,
		disableOnInteraction: false
	}
});
var swiper = new Swiper(".myswiper-2", {
	slidesPerView: 3,
	loop: false,
	speed: 400,
	parallax: true,
	// freeMode: true,
	grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	pagination: {
        el: ".swiper-pagination__says",
        clickable: true,
		// dynamicBullets: true,
    },
	autoplay: {
		delay: 4000,
		stopOnLlastSlide: false,
		disableOnInteraction: false
	}
});