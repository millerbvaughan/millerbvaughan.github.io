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
  //console.log(parseFloat($('.landing-text').css('top')));
  //var landingHeight = $('.landing').height();
  //var textHeight = $('.landing-text').height();


  //$('.landing-text').css('top', 292 - parseFloat($('.landing-text').css('top')) + 0.02*window.scrollY + "px");
})

function setWelcome() {
  var wel = ['w', 'e', 'l'];
  var i = 0;
  setInterval(function() {
    if (i < wel.length) {
      $('#welcome').text($('#welcome').text() + wel[i]);
      ++i;
    }
  }, 700)

  setTimeout(function() {
    var deleteInterval = setInterval(function() {
      if (String($('#welcome').text()).length) {
        $('#welcome').text(String($('#welcome').text()).slice(0, -1));
        console.log('called')
      }
      else {
        clearInterval(deleteInterval)
      }
    }, 200)
  }, 2100)

  var welcome = ['W', 'e', 'l', 'c', 'o', 'm', 'e', '!'];
  var j = 0;
  setTimeout(function() {
    setInterval(function() {
      if (j < welcome.length) {
        $('#welcome').text($('#welcome').text() + welcome[j]);
        ++j;
      }
    }, 500)
  }, 2700)
}

$(document).ready(function() {
  setWelcome();
})