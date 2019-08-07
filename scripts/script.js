function toggleNavbar() {
  var navRight = $('#navRight');
  if (navRight.attr('class') === 'navbar-right') {
    navRight.addClass('responsive');
  }
  else {
    navRight.attr('class', 'navbar-right');
  }
}

$(document).scroll(function() {
  if ($(window).scrollTop() === 0) {
    $('.navbar').css({"-moz-box-shadow": "0px 0px",
                      "-webkit-box-shadow": "0px 0px",
                      "box-shadow": "0px 0px"});
    console.log("top!");
  }
  if ($(window).scrollTop() !== 0) {
    $('.navbar').css({"-moz-box-shadow": "0 8px 6px -6px",
                      "-webkit-box-shadow": "0 8px 6px -6px",
                      "box-shadow": "0 8px 6px -6px"});
    console.log("not top!");
  }
})
