// accordion menu

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

        
//메뉴 사라짐        
		if(!e.data.multiple){
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
    
	}
	// Elegir submenus multiples (true) submenus uno a la vez (false)
	var accordion = new Accordion($('#accordion'), false);
    

});



//drawer menu

$(document).ready(function(){
  
    $('.menu').click(function(e){
        
      $('.drawer').toggleClass('active');
    $('.submenu').slideUp().parent().removeClass('open')
      e.stopPropagation();
      
    });

    $(document).click(function (e) {
        
    var $trigger = $(".accordion");
        if($trigger !== e.target && !$trigger.has(e.target).length){
        
        $('.drawer').removeClass('active');
        $('.submenu').slideUp().parent().removeClass('open')
      e.stopPropagation();
        }
    });
    
    


});

    


    
    
    
    
    
    
    
    
    
    
    


//sticky slide 
$(document).ready(function(){
    
   
$(".main-box").stick_in_parent({
    offset_top:100
});    
    
    
});



//tab
$(document).ready(function(){
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
})









//footer accordion
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
        
        $('body,html').animate({
				scrollTop: 1200
			}, 400);
		
		//Parametro inicial que permite ver 1 solo submenu abierto 

        
//메뉴 사라짐        
		if(!e.data.multiple){
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
        
        
    
	}
	// Elegir submenus multiples (true) submenus uno a la vez (false)
	var accordion = new Accordion($('#footer-accordion'), false);
    

});


