$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() > 2000) {
  $('#topBut').fadeIn();
  } else {
  $('#topBut').fadeOut();
  }
  });
  $('#topBut').click(function() {
  $('body,html').animate({scrollTop:0},800);
  });
  });