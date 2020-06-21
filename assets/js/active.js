(function(){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items : 1,
            autoplay: true,
            loop:true,
            dots : true,
        });
        //testimonial_owl_carousel
        $(".owl-carousel").owlCarousel({
            items : 1,
            autoplay: true,
            loop:true,
            dots : true,
        });
        
        //Mignigfic Popup
        $('.portfolio_popup').magnificPopup({
            type:'image',
            gallery: {
              enabled: true
            },
        });
        
     //Slick Nav 
       $('#navigation').slicknav({
            label: '',
                prependTo:'.responsive_slicknav_menu',
        });
        
        //StikyNav
         $(window).on('scroll',function(){
            if ($(this).scrollTop()>300){
                $('.header_area').addClass('header_area_bg');
            }else{
                $('.header_area').removeClass('header_area_bg');
            }
        });
        
   
});
       $(window).on('load',function(){
          $('.preloader').fadeOut(2000);
        }); 
        
})(jQuery);