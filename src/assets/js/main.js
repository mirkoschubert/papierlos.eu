function setCookie (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return undefined
}

$('body').ready(() => {
  if (getCookie('display_mode') === 'night') {
    $('body').addClass('night')
    $('.mode-icon use').attr('xlink:href', '/assets/icons/sprites.svg#day')
  }
})

$(document).ready(() => {
  // Header Color Change
  if ($(window).scrollTop() > 80) $('.header').addClass('scrolled')

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > 80) {
      $('.header').addClass('scrolled')
    } else {
      $('.header').removeClass('scrolled')
    }
  })

  // Burger Menu
  $('.burger-icon').click(() => {
    $('.main-nav').toggleClass('active')
  })

  // Night Mode
  $('.mode-icon').click(() => {
    if ($('body').hasClass('night')) {
      $('.mode-icon use').attr('xlink:href', '/assets/icons/sprites.svg#night')
      $('body').removeClass('night')
      setCookie('display_mode', 'day', 60)
    } else {
      console.log($('.mode-icon svg use').attr('xlink:href'))
      $('.mode-icon use').attr('xlink:href', '/assets/icons/sprites.svg#day')
      $('body').addClass('night')
      setCookie('display_mode', 'night', 60)
    }
  })
})
