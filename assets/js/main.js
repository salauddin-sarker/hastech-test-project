$(function ($) {
    $(".main-top-navbar ul li a").on("click", function () {
      $(this)
        .parent(".menu-item-has-children")
        .children(".sub-menu")
        .stop()
        .slideToggle();
    });
});