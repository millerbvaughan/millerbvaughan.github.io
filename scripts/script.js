function toggleNavbar() {
  var navRight = $('#navRight');
  if (navRight.attr('class') === 'navbar-right') {
    navRight.addClass('responsive');
  }
  else {
    navRight.attr('class', 'navbar-right');
  }
}

function setWelcome() {
  var wel = ['w', 'e', 'l'];
  var i = 0;
  setInterval(function() {
    if (i < wel.length) {
      $('#welcome').text($('#welcome').text() + wel[i]);
      ++i;
    }
  }, 400)

  setTimeout(function() {
    var deleteInterval = setInterval(function() {
      if (String($('#welcome').text()).length) {
        $('#welcome').text(String($('#welcome').text()).slice(0, -1));
        console.log('called')
      }
      else {
        clearInterval(deleteInterval)
      }
    }, 150)
  }, 1200)

  var welcome = ['W', 'e', 'l', 'c', 'o', 'm', 'e', '!'];
  var j = 0;
  setTimeout(function() {
    setInterval(function() {
      if (j < welcome.length) {
        $('#welcome').text($('#welcome').text() + welcome[j]);
        ++j;
      }
    }, 300)
  }, 1650)
}

$(document).ready(function() {
  setWelcome();
})