$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
     items:4,
      margin:30,
      loop:true,
      autoplay:true,
      autoplayTimeout: 1000,
responsive:{
         320: {
           items: 1
         },
    768: {
        items: 2
    },
    992: {
        items: 4
    }
}

    });
});