$(function ($) {
  $(".nav-bar").on("click", function () {
    $(".main-navbar").slideToggle();
    $(".nav-bar i").toggleClass("fa-xmark fa-xl");
  });

  if ($(window).width() < 992) {
    $("nav ul li a").on("click", function () {
      $(this)
        .parent(".menu-item-has-children")
        .children(".sub-menu")
        .css({ "padding-left": "15px" })
        .stop()
        .slideToggle();

      $(this)
        .parent(".menu-item-has-children")
        .children("a")
        .find(".fa-angle-right")
        .stop()
        .toggleClass("fa-rotate-90");
    });
  }
});