$('body').ready(() => {
  if (localStorage.getItem('display_mode') === 'night') {
    $('body').addClass('night')
    $('.mode-icon use').attr('xlink:href', '/assets/icons/sprites.svg#day')
    $('.mode-icon .title').html('Day Mode')
    console.log('Website is in Night Mode!')
  } else {
    console.log('Website is in Day Mode!')
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
      $('.mode-icon .title').html('Day Mode')
      localStorage.setItem('display_mode', 'day')
      console.log('Website set to Day Mode!')
    } else {
      $('.mode-icon use').attr('xlink:href', '/assets/icons/sprites.svg#day')
      $('body').addClass('night')
      $('.mode-icon .title').html('Night Mode')
      localStorage.setItem('display_mode', 'night')
      console.log('Website set to Night Mode!')
    }
  })
})
