function toggleNavbar() {
  var navRight = $('#navRight');
  if (navRight.attr('class') === 'navbar-right') {
    navRight.addClass('responsive');
  }
  else {
    navRight.attr('class', 'navbar-right');
  }
}

/*
$(document).scroll(function() {
  if ($(window).scrollTop() === 0) {
    $('.navbar').css({"-moz-box-shadow": "0px 0px",
                      "-webkit-box-shadow": "0px 0px",
                      "box-shadow": "0px 0px"});
  }
  if ($(window).scrollTop() > 5) {
    $('.navbar').css({"-moz-box-shadow": "0 8px 6px -6px rgba(0,0,0,0.1)",
                      "-webkit-box-shadow": "0 8px 6px -6px rgba(0,0,0,0.1)",
                      "box-shadow": "0 8px 6px -6px rgba(0,0,0,0.1)"});
  }
  if ($(window).scrollTop() > 10) {
    $('.navbar').css({"-moz-box-shadow": "0 8px 6px -6px rgba(0,0,0,0.2)",
                      "-webkit-box-shadow": "0 8px 6px -6px rgba(0,0,0,0.2)",
                      "box-shadow": "0 8px 6px -6px rgba(0,0,0,0.2)"});
  }

  if ($(window).scrollTop() > 15) {
    $('.navbar').css({"-moz-box-shadow": "0 8px 6px -6px rgba(0,0,0,0.3)",
                      "-webkit-box-shadow": "0 8px 6px -6px rgba(0,0,0,0.3)",
                      "box-shadow": "0 8px 6px -6px rgba(0,0,0,0.3)"});
  }
})

*/
