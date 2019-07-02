function toggleNavbar() {
  var navRight = $('#navRight');
  if (navRight.attr('class') === 'navbar-right') {
    navRight.addClass('responsive');
  }
  else {
    navRight.attr('class', 'navbar-right');
  }
}
