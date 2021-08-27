function openMenu() {
  $(".header__nav").addClass("visible").removeClass("hidden");
  $("body").addClass("overflow");
}

function closeMenu() {
  $(".header__nav").removeClass("visible").addClass("hidden");
  $("body").removeClass("overflow");
}

$(".header__open").click(function () {
  openMenu();
});

$(".header__close").click(function () {
  closeMenu();
});

$(".level__btn").click(function () {
  $(this).addClass("active");
  let open = $(this).attr("data-for");
  let close = $(this).attr("data-close");
  let name = $(this).attr("data-name");
  $(`.${name}__title`).addClass("active");
  $(`.${name}__content`).addClass("active");
  $(`.level__btn[data-for="${close}"]`).removeClass("active");
  $(`.${open}`).addClass("visivle").removeClass("hidden");
  $(`.${close}`).removeClass("visivle").addClass("hidden");
});

$(".level__btns").click(function () {
  $(this).addClass("active");
  let open = $(this).attr("data-for");
  let close1 = $(this).attr("data-close-1");
  let close2 = $(this).attr("data-close-2");
  let name = $(this).attr("data-name");
  $(`.${name}__title`).addClass("active");
  $(`.${name}__content`).addClass("active");
  $(`.${open}`).addClass("visivle").removeClass("hidden");
  $(`.${close1}`).removeClass("visivle").addClass("hidden");
  $(`.${close2}`).removeClass("visivle").addClass("hidden");
  $(`.level__btns[data-for="${close1}"]`).removeClass("active");
  $(`.level__btns[data-for="${close2}"]`).removeClass("active");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
});
