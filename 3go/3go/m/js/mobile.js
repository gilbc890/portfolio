$(document).ready(function(){
/***** Drawer Menu *****/

    $('.menu').click(function(e){
    $('.drawer').toggleClass('active');
    $('.submenu').slideUp().parent().removeClass('open')
      e.stopPropagation();
    });
    
/***** Drawer Menu Closed *****/
    $(window).click(function (e) {   
    var $target = $(event.target);
        if($target.parents('.drawer').length == 0){
            $('.drawer').removeClass('active');
            $('.submenu').slideUp().parent().removeClass('open')
            e.stopPropagation();
        }
    });
    
/***** Scroll Top Button *****/
    
    // hide #back-top first
	$("#scroll-top").hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('#scroll-top').fadeIn();
			} else {
				$('#scroll-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#scroll-top button').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
		});
	});

/***** Text Effect - Brand Box *****/
    
    $(function () {       
        $(window).scroll(function (event) {
            if ($(this).scrollTop() > 330) { 
                $('.brand-box').fadeIn();
            } else {
                $('.brand-box').fadeOut();
            }
            event.stopPropagation()
        });   
    });

/***** tab *****/
      $(".tabLink").each(function(){
        $(this).click(function(){
            
            tabId=$(this).attr("id");
            $(".tabLink").removeClass("activeLink");
            $(this).addClass("activeLink");
            $(".family-box").addClass("hide");
            $("#" + tabId + "-1").removeClass("hide");
            $('body,html').animate({
				scrollTop: 0
			}, 600);
            return false;

        })
    })
    
    $("#cont-1-1").click();

});


/***** Accordion Menu *****/
$(function(){
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		// Variables
		var link = this.el.find('.link');
		// Eventos
		link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		// Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
		$next.slideToggle();
		// Agregar clase open a elemento padre del elemento con clase link = li
		$this.parent().toggleClass('open');
		
		//Parametro inicial que permite ver 1 solo submenu abierto 
        
        //disapear submenu
		if(!e.data.multiple){
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
	}
	// Elegir submenus multiples (true) submenus uno a la vez (false)
	var accordion = new Accordion($('#accordion'), false);
});

/***** Footer Accordion *****/
$(function(){
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		// Variables
		var link = this.el.find('.footer-link');
		// Eventos
		link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		// Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
		$next.slideToggle();
		// Agregar clase open a elemento padre del elemento con clase link = li
		$this.parent().toggleClass('open');
		//Parametro inicial que permite ver 1 solo submenu abierto 
        $('body,html').animate({
            scrollTop: 2000
			});
//disapear        
		if(!e.data.multiple){
            $el.find('.footer-submenu').not($next).slideUp().parent().removeClass('open');
		}
	}
	// Elegir submenus multiples (true) submenus uno a la vez (false)
	var accordion = new Accordion($('#footer-accordion'), false);
});