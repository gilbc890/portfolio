$(document).ready(function () {
    $(document).scroll(function () {
        var scroll = $(document).scrollTop();
        if (scroll > 800) {
          $("#white_logo").addClass("hidden");
          $("#gray_logo").removeClass("hidden")
          $(".navbar-right").css("color", "#9d9d9d");
          $("#home_button").removeClass("active");
        } else {
          $("#white_logo").removeClass("hidden");
          $("#gray_logo").addClass("hidden");
          $(".navbar-right").css("color", "#fff");
          $("#home_button").addClass("active");

        }
        if (scroll > 820){
          $("#text_effect").css({"visibility" : "visible", "opacity" : "1"});
        };

    });

    // Nav Button
    $("#home_button").click(function(){
      $("#home_button").addClass("active");
      $('.navbar-right>li').not(this).removeClass('active');
    })
    $("#about_button").click(function(){
      $("#about_button").addClass("active");
      $('.navbar-right>li').not(this).removeClass('active');
    });
    $("#menu_button").click(function(){
      $("#menu_button").addClass("active");
      $('.navbar-right>li').not(this).removeClass('active');
    });
    $("#catering_button").click(function(){
      $("#catering_button").addClass("active");
      $('.navbar-right>li').not(this).removeClass('active');
    });
    $("#festival_button").click(function(){
      $("#festival_button").addClass("active");
      $('.navbar-right>li').not(this).removeClass('active');
    });

    // Menu view
    $("#menu_view_button").click(function(){
      $(".cafe-menu-detail").fadeToggle();
    });
    // Posters View
    $("#poster_button").click(function(){
      $(".poster").fadeToggle();
    });

    // Hover Effect
    $(".first_photo>img, #first_photo_hover").hover(function(){
      $("#first_photo_hover").show();
    }, function(){
        $("#first_photo_hover").hide();
    });
    $(".second_photo>img, #second_photo_hover").hover(function(){
      $("#second_photo_hover").show();
    }, function(){
        $("#second_photo_hover").hide();
    });
    $(".third_photo>img, #third_photo_hover").hover(function(){
      $("#third_photo_hover").show();
    }, function(){
        $("#third_photo_hover").hide();
    });
    $(".fourth_photo>img, #fourth_photo_hover").hover(function(){
      $("#fourth_photo_hover").show();
    }, function(){
        $("#fourth_photo_hover").hide();
    });
    $(".fifth_photo>img, #fifth_photo_hover").hover(function(){
      $("#fifth_photo_hover").show();
    }, function(){
        $("#fifth_photo_hover").hide();
    });
    $(".sixth_photo>img, #sixth_photo_hover").hover(function(){
      $("#sixth_photo_hover").show();
    }, function(){
        $("#sixth_photo_hover").hide();
    });

    // Mobile Version Menu Effect
    $(".first_photo>img, #first_photo_hover").click(function(){
      $("#first_photo_hover").show();
    }, function(){
        $("#first_photo_hover").hide();
    });
    $(".second_photo>img, #second_photo_hover").click(function(){
      $("#second_photo_hover").show();
    }, function(){
        $("#second_photo_hover").hide();
    });
    $(".third_photo>img, #third_photo_hover").click(function(){
      $("#third_photo_hover").show();
    }, function(){
        $("#third_photo_hover").hide();
    });
    $(".fourth_photo>img, #fourth_photo_hover").click(function(){
      $("#fourth_photo_hover").show();
    }, function(){
        $("#fourth_photo_hover").hide();
    });
    $(".fifth_photo>img, #fifth_photo_hover").click(function(){
      $("#fifth_photo_hover").show();
    }, function(){
        $("#fifth_photo_hover").hide();
    });
    $(".sixth_photo>img, #sixth_photo_hover").click(function(){
      $("#sixth_photo_hover").show();
    }, function(){
        $("#sixth_photo_hover").hide();
    });



});
