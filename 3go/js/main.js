
$(document).ready(function () {

    $(".slideshow").each(function () {

        //변수선언 부분------------------------------------------------------------------
        var $container = $(this),
            $slideGroup = $container.find(".slideshow-slides"),
            $slides = $slideGroup.find(".slide"),
            $nav = $container.find(".slideshow-nav"),
            $indicator = $(".triangle").find(".slideshow-indicator"),
            $textSlide = $(".text-slide-content"),


            slideIndex = 1,
            slideCount = $slides.length,
            indicatorHTML = "",
            currentIndex = 0,
            duration = 500,
            easing = "easeInOutExpo",
            interval = 3300,
            timer;

        //슬라이드 배치 및 인디케이터 생성, 삽입
        $slides.each(function (i) {

            $(this).css({
                left: 100 * i + "%"
            });
            indicatorHTML += "<a href = '#'>" + (i + 1) + "</a>";


        });

        $textSlide.each(function (i) {

            $textSlide.css({
                "display": "none"
            });

            $(this).eq(i).css({
                "display": "block"
            });

        });

        $indicator.html(indicatorHTML);


        //슬라이드 이동 함수
        function goToSlide(index) {

            //슬라이드 그룹을 대상 위치에 맞게 이동
            $slideGroup.animate({
                left: -100 * index + "%"
            }, duration, easing);

            $textSlide.css("display", "none");
            $textSlide.eq(index).css("display", "block");


            //현재 슬라이드의 인덱스값을 저장
            currentIndex = index;
            //네비게이션과 인디케이터 상태를 업데이트
            updateNav();

        }


        //텍스트 페이드인,페이드아웃





        //인디케이터 및 네비게이션을 업데이트 하는 함수
        function updateNav() {

            var $navPrev = $nav.find(".prev"),
                $navNext = $nav.find(".next");

            //첫 번째 슬라이드라면 Prev 네비게이션 삭제
            if (currentIndex === 0) {
                $navPrev.addClass("disabled");
            } else {
                $navPrev.removeClass("disabled");
            }

            //마지막 슬라이드라면 Next 네비게이션 삭제
            if (currentIndex === slideCount - 1) {
                $navNext.addClass("disabled");
            } else {
                $navNext.removeClass("disabled");
            }

            //현재 슬라이드의 인디케이터를 해제
            $indicator.find("a").removeClass("active").eq(currentIndex).addClass("active");

        }

        //타이머를 시작하는 함수
        function startTimer() {

            //변수 interval로 설정한 시간마다 작업을 수행

            timer = setInterval(function () {

                //현재 슬라이드의 인덱스에 따라 다음에 표시할 슬라이드를 결정
                //마지막 슬라이드라면 첫 번째 슬라이드의 인덱스값을 저장
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);


            }, interval);

        }

        //타이머를 중지하는 함수
        function stopTimer() {

            clearInterval(timer);

        }

        //네비게이션 링크를 클릭하면 해당 슬라이드로 이동
        $nav.on("click", "a", function (event) {

            event.preventDefault();
            if ($(this).hasClass("prev")) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }

        });

        $indicator.on("click", "a", function (event) {

            event.preventDefault();
            if (!$(this).hasClass("active")) {
                goToSlide($(this).index());
            }

        });

        //마우스 오버시 슬라이드 멈춤
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        goToSlide(currentIndex);
        startTimer();

    });

});



$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
        $("#img-box1").stop().animate({
            //            "top":"10px",
            "opacity": 1,
            "margin-top": "1.3%",
            "left": "12%"
        }, 600);

    } else if (scroll <= 200) {
        $("#img-box1").stop().animate({
            "opacity": 0,
            "margin-top": "0%",
            "left": "0%"
        }, 200);
    }
    if (scroll > 600) {
        $("#img-box2").stop().animate({
            "opacity": 1,
            "top": "43%",
            "margin-left": "45%"
        }, 600)
    } else if (scroll <= 200) {
        $("#img-box2").stop().animate({
            "opacity": 0,
            "top": "100%",
            "margin-left": "60%"
        })
    }
})









//tab으로 페이지 넘기는 부분.
$(document).ready(function () {
    $(".tabLink").each(function () {
        $(this).click(function () {

            tabId = $(this).attr("id");
            $(".tabLink").removeClass("activeLink");
            $(this).addClass("activeLink");
            $(".tabcontent").addClass("hide");
            $("#" + tabId + "-1").removeClass("hide");
            return false;

        })
    })

    $(".cont-1-1").click();
})

//ready function 겹치는것 생각해보기
//id 값 새로 줄것인지 생각해보기









$(document).ready(function () {


    $("#main-img").stick_in_parent({
        offset_top: 50
    });

});


//케이터링 하단 텍스트 슬라이드.
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1000) {
        $("#bottom-middle-text").stop().animate({
            //            "opacity": 1,
            "left": '400px',
            "z-index": 10
        }, 1000);
    } else if (scroll <= 500) {
        $('#bottom-middle-text').stop().animate({
            //            "opacity":0,
            "left": '5%'
            //            "z-index":-2
        }, 500);
    }
})

$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1100) {
        $("#bottom-img").stop().animate({
            "opacity": 1
        })
    } else if (scroll <= 500) {
        $("#bottom-img").stop().animate({
            "opacity": 0
        })
    }
})
