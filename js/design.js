$(document).ready(function(){
    $('.drop-list').mouseover(function(){
        $('.drop').toggle()
    })

  $('.ans2,.ans3,.ans4,.ans5').slideUp()

  $('.que1').click(function(){
    $('.ans1').slideToggle()
    
  })
  $('.que2').click(function(){
    $('.ans2').slideToggle()
  })
  $('.que3').click(function(){
    $('.ans3').slideToggle()
  })
  $('.que4').click(function(){
    $('.ans4').slideToggle()
  })
  $('.que5').click(function(){
    $('.ans5').slideToggle()
  })
  $('.login-btn').click(function(){
    $('.log-in').hide()
    $('.sign-up').show()

  })

  $('.sign-up-btn').click(function(){
    $('.sign-up').hide()
    $('.log-in').show()

  })

  $('.glass').click(function(){
    $('.drop-nav').slideToggle()
  })
})