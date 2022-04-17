var proj = $('.c-projects');

proj.owlCarousel({
    margin:10,
    loop:false,
    autoWidth:true,
    dots:false,
    nav:false,
    items:4,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots:true,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1,
            autoWidth:false,
            loop:true,
        },
        // breakpoint from 480 up
        480 : {
            items:1,
            autoWidth:false,
            loop:true,
        },
        // breakpoint from 768 up
        768 : {
            items:1,
            autoWidth:false,
            loop:true,
        },
        // breakpoint from 768 up
        1000 : {
            items:2,
        }
    }
})

$('.proj #next').click(function() {
    proj.trigger('next.owl.carousel');
})
// Go to the previous item
$('.proj #prev').click(function() {
    proj.trigger('prev.owl.carousel', [300]);
})

//Testi
$('.testi').owlCarousel({
    margin:30,
    loop:true,
    items:4,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots:false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1,
        },
        // breakpoint from 480 up
        480 : {
            items:1,
        },
        // breakpoint from 768 up
        768 : {
            items:2,
        },
        // breakpoint from 768 up
        1000 : {
            items:3,
        }
    }
})

//Post
$('.post').owlCarousel({
    margin:20,
    loop:true,
    items:4,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots:false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:2,
        },
        // breakpoint from 480 up
        480 : {
            items:2,
        },
        // breakpoint from 768 up
        768 : {
            items:2,
        },
        // breakpoint from 768 up
        1000 : {
            items:4,
        }
    }
})

$('.img-hero').owlCarousel({
    center: true,
    items:2,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots:false,
    margin:20,
    responsive:{
        320:{
            items:1,
            dots:true,
        },
        600:{
            items:2
        }
    }
})