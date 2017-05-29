
//$(alert("hola_12"));



$('header').append('<div class="btn1 burguer"><span></span><span></span><span></span></div>');

$('.burguer').on('click',function(){
    
		$('.burguer').toggleClass('burguer-click');
		$('.menu').toggleClass('menu-click');
    
    
});

$('.menu a').on('click',function(){
    
		$('.burguer').toggleClass('burguer-click');
		$('.menu').toggleClass('menu-click');
    
});

   




/*  --------------   INICIO DEL CODIGO DEL SLIDER ------------  */

$('#contSlider').prepend('<div id="prev" class="btn"></div>');

$('#contSlider').prepend('<div id="next" class="btn"></div>');

$('#slider figure').eq(0).show().siblings().hide();

var total =$('#slider figure').length;
var i=0;
var cont=1;
$('#contSlider').append('<div id="pager"></div>');

$('#slider figure').each(function(){
	   var pru=$(this).index();
	//  	$('#pager').append('<span class="punto"><img src="img/0'+cont+'_mini.jpg" alt=""></span>');
      $('#pager').append('<span class="punto"></span>');
		cont=cont+1;
});
	
$('#pager .punto').eq(0).addClass('actual');

var timer =setInterval(function(){
	 i=i+1;
		if (i===total) {i=0;}
		{
		$('#slider figure').eq(i).fadeIn(400,'linear').siblings('figure').fadeOut(400, 'linear');
		$('#pager .punto').eq(i).addClass('actual').siblings().removeClass('actual');
		}
	
},4000);

$('#pager .punto').on('click', function(){
	
		 clearInterval(timer);
		 i = $(this).index();
	//	icont =i;
		$('#slider figure').eq(i).fadeIn(400,'linear').siblings('figure').fadeOut(400, 'linear');
		$(this).addClass('actual').siblings().removeClass('actual');
});

$('#next').on('click', function(){
	    clearInterval(timer);
		i=i+1;
		if (i===total) {i=0;}
		{
		$('#slider figure').eq(i).fadeIn(400,'linear').siblings('figure').fadeOut(400, 'linear');
		$('#pager .punto').eq(i).addClass('actual').siblings().removeClass('actual');
		}
		
});	
	
$('#prev').on('click', function(){
		     clearInterval(timer);
			i=i-1;
				if (i===-1) {i=total-1;}
		{
		$('#slider figure').eq(i).fadeIn(400,'linear').siblings('figure').fadeOut(400, 'linear');
		$('#pager .punto').eq(i).addClass('actual').siblings().removeClass('actual');
		}
		
});	
/*  --------------   FIN DEL CODIGO DEL SLIDER ------------  */
/*-------------------------------  FLECHA PARA SUBIR   ---------------------------------*/
$('#flecha').hide();
//var altura = $('header').outerHeight();
var altura = 100;
var des = $(window).scrollTop();
$(window).on('scroll', function(){
    
     des = $(window).scrollTop();
    
    if(des > altura){
        $('#flecha').fadeIn();
    }else{
        $('#flecha').fadeOut();
    }
    
});
$('#flecha').on('click',function(){
    
        var distancia= $('body').offset().top;	
        $('body,html').stop().animate({'scrollTop':distancia-60},2000);
});

//var cambio = false;

$('a[href^="#"]').on('click', function(){	
  
            var primero =$(this).attr('href');
              var distancia =0;
             distancia = $(primero).offset().top; 
    
            $('body, html').animate({'scrollTop':distancia},600);	
            return false;

});

/*  -------------------   HEADER FIXED  ------------------ */

var cambio = false;
 $(window).on('scroll', function(){

              if($(window).scrollTop() > 150){
                 cambio = true;   
               
              }else{
                cambio = false;
                
              } 
              if($(".tramo").css('z-index') == 10 && cambio){
				  $("header").addClass('prueba');
                  
                 
			  }else{
                   $("header").removeClass('prueba');
                  
                  
              }
     
 });      

/*-----------------SLIDER_PRODUCTOS_1-------------*/


var actual1 = 0;											// Lo utilizamos para almacenar el índice de la imagen dentro de la lista de imágenes
var totalSlides1 = $('#sliderSection1 img').length;				// Guarda el total de slides/imágenes que tiene el slider



$('#next1').on('click', function() {
if(actual1 < totalSlides1 - 1) { 						// Comprueba si el número es mayor al total de slides menos uno 
		actual1++;										// Incrementa el valor del índice para hacer referencia a la siguiente imagen

		$('#sliderSection1 img').fadeOut();						// Oculta todos los slides
		$('#sliderSection1 img').eq(actual1).fadeIn();			// Y muestra el que tenga el índice guardado en actual
	}else{ // para hacer bucle de la ultima a la primera
		$('#sliderSection1 img').fadeOut();
		$('#sliderSection1 img').eq(0).fadeIn();
		actual1=0;
	}
});

$('#prev1').on('click', function() {
	if(actual1 > 0) {
		actual1--;

		$('#sliderSection1 img').fadeOut();
		$('#sliderSection1 img').eq(actual1).fadeIn();
	}else{ //para hacer bucle de la primera a la ultima
		$('#sliderSection1 img').fadeOut();
		$('#sliderSection1 img').eq(totalSlides1-1).fadeIn();
		actual1=totalSlides1-1;
	}
});

/*-----------------SLIDER_PRODUCTOS_2-------------*/


var actual2 = 0;											// Lo utilizamos para almacenar el índice de la imagen dentro de la lista de imágenes
var totalSlides2 = $('#sliderSection2 img').length;				// Guarda el total de slides/imágenes que tiene el slider



$('#next2').on('click', function() {
if(actual2 < totalSlides2 - 1) { 						// Comprueba si el número es mayor al total de slides menos uno 
		actual2++;										// Incrementa el valor del índice para hacer referencia a la siguiente imagen

		$('#sliderSection2 img').fadeOut();						// Oculta todos los slides
		$('#sliderSection2 img').eq(actual2).fadeIn();			// Y muestra el que tenga el índice guardado en actual
	}else{ // para hacer bucle de la ultima a la primera
		$('#sliderSection2 img').fadeOut();
		$('#sliderSection2 img').eq(0).fadeIn();
		actual2=0;
	}
});

$('#prev2').on('click', function() {
	if(actual2 > 0) {
		actual2--;

		$('#sliderSection2 img').fadeOut();
		$('#sliderSection2 img').eq(actual2).fadeIn();
	}else{ //para hacer bucle de la primera a la ultima
		$('#sliderSection2 img').fadeOut();
		$('#sliderSection2 img').eq(totalSlides2-1).fadeIn();
		actual2=totalSlides2-1;
	}
});


/*-----------------SLIDER_PRODUCTOS_3-------------*/


var actual3 = 0;											// Lo utilizamos para almacenar el índice de la imagen dentro de la lista de imágenes
var totalSlides3 = $('#sliderSection3 img').length;				// Guarda el total de slides/imágenes que tiene el slider



$('#next3').on('click', function() {
if(actual3 < totalSlides3 - 1) { 						// Comprueba si el número es mayor al total de slides menos uno 
		actual3++;										// Incrementa el valor del índice para hacer referencia a la siguiente imagen

		$('#sliderSection3 img').fadeOut();						// Oculta todos los slides
		$('#sliderSection3 img').eq(actual3).fadeIn();			// Y muestra el que tenga el índice guardado en actual
	}else{ // para hacer bucle de la ultima a la primera
		$('#sliderSection3 img').fadeOut();
		$('#sliderSection3 img').eq(0).fadeIn();
		actual3=0;
	}
});

$('#prev3').on('click', function() {
	if(actual3 > 0) {
		actual3--;

		$('#sliderSection3 img').fadeOut();
		$('#sliderSection3 img').eq(actual3).fadeIn();
	}else{ //para hacer bucle de la primera a la ultima
		$('#sliderSection3 img').fadeOut();
		$('#sliderSection3 img').eq(totalSlides3-1).fadeIn();
		actual3=totalSlides3-1;
	}
});

/*-----------------SLIDER_PRODUCTOS_4-------------*/


var actual4 = 0;											// Lo utilizamos para almacenar el índice de la imagen dentro de la lista de imágenes
var totalSlides4 = $('#sliderSection4 img').length;				// Guarda el total de slides/imágenes que tiene el slider



$('#next4').on('click', function() {
if(actual4 < totalSlides4 - 1) { 						// Comprueba si el número es mayor al total de slides menos uno 
		actual4++;										// Incrementa el valor del índice para hacer referencia a la siguiente imagen

		$('#sliderSection4 img').fadeOut();						// Oculta todos los slides
		$('#sliderSection4 img').eq(actual4).fadeIn();			// Y muestra el que tenga el índice guardado en actual
	}else{ // para hacer bucle de la ultima a la primera
		$('#sliderSection4 img').fadeOut();
		$('#sliderSection4 img').eq(0).fadeIn();
		actual4=0;
	}
});

$('#prev4').on('click', function() {
	if(actual4 > 0) {
		actual4--;

		$('#sliderSection4 img').fadeOut();
		$('#sliderSection4 img').eq(actual4).fadeIn();
	}else{ //para hacer bucle de la primera a la ultima
		$('#sliderSection4 img').fadeOut();
		$('#sliderSection4 img').eq(totalSlides4-1).fadeIn();
		actual4=totalSlides4-1;
	}
});