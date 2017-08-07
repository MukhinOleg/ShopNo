

document.querySelector('.nav_menu_container').addEventListener('click', function press(event){
  var target = event.target;
  document.querySelector('.header__menu_hover').classList.toggle('hide');
  document.querySelector('.header__menu').classList.toggle('hide');
  
})