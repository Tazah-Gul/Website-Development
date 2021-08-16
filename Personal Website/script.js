$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav_links').addClass("sticky");
        }else{
            $('.nav_links').removeClass("sticky");
        }
    });

    // toggle menubar script
    $('.menu-btn').click(function(){
        $('.nav_links .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer", "Crickter"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // var typed = new Typed(".typing1", {
    //     strings: ["Developer", "Designer", "Freelancer", "Crickter"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});