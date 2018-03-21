$(document).ready(function(){
  $('.glyphicon-menu-hamburger').click(function(){
    $('.navi').fadeIn('.navi');
  })
  $('.glyphicon-remove').click(function(){
    $('.navi').css("display", "none");
  })

  var didScroll;
  var lastScrollTop = 0;
  var delta = 200;
  var navbarHeight = $('.navi_wrap').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function(){
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
   }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('.navi').css("display","none");
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('.navi').fadeIn('.navi');
      }
    }
    lastScrollTop = st;
  }









});
