 $(function() {
     new WOW().init();
     //  Stykey Header  
     $(window).scroll(function() {
         var scrolling = $(this).scrollTop();

         if (scrolling > 200) {
             $('.navbar').addClass('sticky-header');
         } else {
             $('.navbar').removeClass('sticky-header');
         }
     });
     //  Stykey Header

     //slick slider starts
     $('.banner-slick').slick({
         infinite: true,
         slidesToShow: 1,
         arrows: true,
         prevArrow: '<button class="banner_left_arrow"><i class="fas fa-angle-left"></i></button>',
         nextArrow: '<button class="banner_right_arrow"><i class="fas fa-angle-right"></i></button>',
         dots: true,
         autoplay: true,
         slidesToScroll: 1
     });



     $('.services-slick').slick({
         infinite: true,
         slidesToShow: 4,
         arrows: true,
         prevArrow: '<button class="services_left_arrow"><i class="fas fa-angle-left"></i></button>',
         nextArrow: '<button class="services_right_arrow"><i class="fas fa-angle-right"></i></button>',
         autoplay: true,
         dots: false,
         autoplaySpeed: 2000,
         slidesToScroll: 1
     });
     //slick slider ends

     //portfolio mixit up starts
     var containerEl = document.querySelector('.portfolio-mix');

     var mixer = mixitup(containerEl);
     //portfolio mixit up ends



     //video venobox starts
     new VenoBox({
         selector: '.my-video-links',
     });
     //video venobox ends


     //counterup starts
     $('.counter').counterUp({
         delay: 10,
         time: 1000
     });
     //counterup ends

     //blog slick starts
     $('.blog-slick').slick({
         infinite: true,
         slidesToShow: 3,
         arrows: false,
         autoplay: true,
         dots: false,
         autoplaySpeed: 2000,
         slidesToScroll: 1
     });

     //blog slick ends

     //back to top starts
     //==== Back-to-top button
     $(window).on('scroll', function(event) {
         if ($(this).scrollTop() > 600) {
             $('.back-to-top').fadeIn(200)
         } else {
             $('.back-to-top').fadeOut(200)
         }
     });
     //==== Animate the scroll to top
     $('.back-to-top').on('click', function(event) {
         event.preventDefault();

         $('html, body').animate({
             scrollTop: 0,
         }, 1000);
     });

     //back to top starts
 });