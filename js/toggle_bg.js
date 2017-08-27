document.querySelector('.header__glass').addEventListener('click', function changeBg(event){
  var target = event.target;

  document.querySelector('.header__glass').classList.toggle('header__glass__toggle');
  document.querySelector('h1 .square').classList.toggle('square_bg');
  document.querySelector('p .square').classList.toggle('square_bg');
  document.querySelector('.logo_letter').classList.toggle('logo_letter_color');
  
})