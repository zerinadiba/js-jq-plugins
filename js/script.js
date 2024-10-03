$( function() {


var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });



     var circle = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * -t + 0.5 * Math.PI),
            y: 500.0 + 300.0 * Math.sin(2.0 * Math.PI * -t + 0.5 * Math.PI)
        };
    };

    $('#text2').curvedText({
        curve:    circle,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 1000.0 }
    });




var bezier = function (t)
    {
        var px = [100.0, 350.0, 500.0, 900.0],
            py = [400.0,  50.0, 500.0, 200.0],
            ax = [px[0], 3.0 * (px[1] - px[0]), 3.0 * (px[2] - 2.0 * px[1] + px[0]), px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0]],
            ay = [py[0], 3.0 * (py[1] - py[0]), 3.0 * (py[2] - 2.0 * py[1] + py[0]), py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0]],
            cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
            cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

        return {
            x: cx,
            y: cy
        };
    };

    $('#text3').curvedText({
        curve:    bezier,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 }
    });


























$('.wrapper').slick();


});

$('.wrapped').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2
});

$('.wrap1').slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
});
        
$('.rewrap').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});



$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.counter1').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    beginAt: 100,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
});
$('.counter2').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    beginAt: 100,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
});
$('.counter3').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    beginAt: 100,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
});

var mixer = mixitup('#hello', {
    animation: {
        duration: 300
    }
});

var mixer = mixitup('#hehe', {
    animation: {
        duration: 300
    }
});

var mixer = mixitup('#hi', {
    animation: {
        duration: 300
    }






});

/////////////////////js////////////////////////
  wow = new WOW(
         {
         boxClass:'wow',      
         animateClass: 'animated', 
         offset:       10,        
         mobile:       true,     
         live:         true      
          })
        wow.init();




