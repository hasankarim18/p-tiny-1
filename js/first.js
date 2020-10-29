// stick up initiating codes

//initiating jQuery
jQuery(function ($) {
    $(document).ready(function () {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
    });
});



// mix it up starter conde

var mixer = mixitup('.mixer-tiny');
$(function () {
    $('.container').mixItUp();
});

// var mixer = mixitup('.tinyone-feature-card');





// simple counter .js code goes here

var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 7000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});



//progress bar initiation code goes here

$('.html').rProgressbar({
    percentage: 98,
    fillBackgroundColor: '#ed1c24',
    backgroundColor: '#EEEEEE',
    borderRadius: '0px',
    height: '10px',
    width: '100%'
});



//swipper js script for control flow

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


$(document).ready(function () {
    $(".photo-galery").hover(function () {
        $("#y").css("color", "#fcdb00");
    }, function () {
        $("#y").css("color", "black");
    });
});