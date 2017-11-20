$(document).ready(function(){
  $('.glyphicon-menu-hamburger').click(function(){
    $('.navi').removeClass('hide');
  });
  $('.glyphicon-remove').click(function(){
    $('.navi').addClass('hide');
  });

});
