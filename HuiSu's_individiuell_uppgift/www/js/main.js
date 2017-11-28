$(document).ready(function () {
  $('.offcanvas').click(function () {
    $('.sidebar-offcanvas').toggleClass(' active');
    $('.show-hide-btn').toggleClass('hide');
  });
  $('.navbar-toggler').on('click', function () {
    $('.sidebar-offcanvas').removeClass('active');
  })
});









