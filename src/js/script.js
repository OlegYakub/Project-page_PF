
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function(){




/*=================paginator================*/


  
  if($(window).width() < 743){
    
    }else if($(window).width() < 960){
   
    }else if($(window).width() < 1170  &&  $(window).width()>960){
       
    }else{
      $('.technologys__list').pagination({
        items: 35,
        itemsOnPage: 16,

    });
    }


/*================================*/
/*===============technologys==============*/
  
  var listItem = $('.technologys__item');

  var objs = listItem.map(function(){
    return this;
  });
  //console.log(objs.length);

  if(objs.length < 4){
    $('.technologys__body').addClass("technologys__body--center");
  }

/*================================*/
/*==============slider================*/

	$('.slider').slick({
    //adaptiveHeight: true,
    infinite: false,
    speed: 400,
    arrow: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.slider__left',
    nextArrow: '.slider__right',
    appendDots: '.slider__dots',
/*    dotsClass: '.slider__dots'*/
  });

  var width = $(window).width();
	var height = $(window).height();
	var firstscreen = $('.firstscreen');
	var hmain1 = height - 360;
  var himg2 = height - 150;
  //console.log(hmain1);
    if($(window).width() >= 743 ){
      firstscreen.height(height);
      $('.slider__item, .foot').height(height);
      $('.main-1').height(hmain1);
      $('.slider__img').height(himg2);
    }
 
   $(window).resize(function(){
    var width = $(window).width();
    var height = $(window).height();
    var firstscreen = $('.firstscreen');
    var hmain1 = height - 360;
    var himg2 = height - 150;
    //console.log(hmain1);
      if($(window).width() >= 743 ){
        firstscreen.height(height);
        $('.slider__item, .foot, .bx-viewport').height(height);
        $('.main-1').height(hmain1);
        $('.slider__img').height(himg2);
    }
   });


/*==============wheel============*/	






/*var slideScreen = $('.main');
$(slideScreen).bind('DOMMouseScroll', function(e){
    var slide = $('.slider__item')
    var slidesArray = slide.map(function(){
        return this;
    });

    console.log(slidesArray.length);


     if(e.originalEvent.detail > 0) {
         //scroll down
         $('.slider').slick('slickNext');

         if( $('.slider').slick('slickCurrentSlide') == slidesArray.length-1){
          return true;
         }else{
            return false;
         }
        

         console.log('Down');
     }else {
         //scroll up
         //console.log('Up');
         $('.slider').slick('slickPrev');
     }

     //prevent page fom scrolling
 });




$(slideScreen).bind('mousewheel', function(e){
    var slide = $('.slider__item')
    var slidesArray = slide.map(function(){
        return this;
    });

    //console.log(slidesArray.length);

     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
         //console.log('Down');
         console.log($('.slider').slick('slickCurrentSlide'));


         $('.slider').slick('slickNext');
          if( $('.slider').slick('slickCurrentSlide') == slidesArray.length-1){

            return true;
           }else{
              return false;
           }
     }else {
         //scroll up
         //console.log('Up');
         $('.slider').slick('slickPrev');
     }

     //prevent page fom scrolling
    //return false;
 });*/


//$('.slider').slick('slickNext');
  
 var pos = $('.firstscreen').scrollTop();   
 console.log(pos);

/*
================================*/
	

 	var rrr =	width / height;
 	//console.log(rrr);
 	if(width > 760 && rrr >= 1.4){
    $('.slider__img--wrap img').attr('src', 'img/wog_LP_16x9_slide1.jpg');
    console.log('16:9');
  }
 	if(width > 460 && rrr <= 1.4){
      console.log('4:4');
      $('.slider__img--wrap img').attr('src', 'img/wog_LP_1600x1600_slide1.jpg');
 	}else if(width < 760 && rrr <= 0.7){
      console.log('10:16 - modile');
      $('.slider__img--wrap img').attr('src', 'img/wog_LP_mobile_slide1.jpg');
  }else if(width < 760 && rrr >= 1.4 ){
      console.log('16:10 - modileLandscape');
      $('.slider__img--wrap img').attr('src', 'img/wog_LP_16x9_slide1.jpg');
  }

  $(window).resize(function(){
    var width = $(window).width();
    var height = $(window).height();
    var rrr = width / height;

    if(width > 760 && rrr >= 1.4){
      $('.slider__img--wrap img').attr('src', 'img/wog_LP_16x9_slide1.jpg');
      console.log('16:9');
    }
    if(width > 460 && rrr <= 1.4){
        console.log('4:4');
        $('.slider__img--wrap img').attr('src', 'img/wog_LP_1600x1600_slide1.jpg');
    }else if(width < 760 && rrr <= 0.7){
        console.log('10:16 - modile');
        $('.slider__img--wrap img').attr('src', 'img/wog_LP_mobile_slide1.jpg');
    }else if(width < 760 && rrr >= 1.4 ){
        console.log('16:10 - modileLandscape');
        $('.slider__img--wrap img').attr('src', 'img/wog_LP_16x9_slide1.jpg');
    }
  });
	

 	$('.main-2__round').click(function (event) {


 		event.preventDefault();

    if(width < 743){
 		    $('body,html').animate({scrollTop: height*2}, 400);
    }else{
      $('body,html').animate({scrollTop: height}, 400);
    }



 	});

  if(!isMobile.any()){ //====условине для десктопа

    //=============паралакс=============

    $(window).scroll(function(){
      var st = $(this).scrollTop();

      //=============main-1 main-2=============
      $('.main-1__paralax').css({
        "transform" : "translate(0%, -" + st /12 + "%"
      });

      $('.main-1').css({
        "transform" : "translate(0%, " + st /12 + "%"
      });
    });
  }

 });