$(document).ready(function() {
    
    $('.js-intro-section').waypoint(function(direction){
        if(direction == "down") {
            $('nav').addClass('sticky'); /* .addClass is a JS intrinic property */
        }
        else{
            $('nav').removeClass('sticky');
     } },
        {
            offset: '-100px;'
          });

/*SCROLL-on buttons:  in words:  designateing the js--scroll-to-products button, when it is clicked, then the html and body are animated 
to scroll towards the js--cbd-products area with an offset, at 1000ms (one second)　　　*/

          $('.js-scroll-to-products').click(function(){
            $('html, body').animate({scrollTop: $('.js--cbd-products').offset().top},1000);
          });

          $('.js-scroll-to-info-columns').click(function(){
            $('html, body').animate({scrollTop: $('.js-info-columns').offset().top},300);
          });   

      $(function() {

            $('a[href*="#"]:not([href="#"])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
                }
              }
            });
          });

/* ======================Animations on Scroll=============================*/ 
  $('.js-wp-1').waypoint(
    (direction) => {
      $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '60%',
    }
);

$('.js-wp-2').waypoint(
    (direction) => {
      $('.js-wp-2').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '60%',
    }
);

$('.js-wp-3').waypoint(
  (direction) => {
    $('.js-wp-3').addClass('animate__animated animate__pulse');
  },
  {
    offset: '45%',
  }
);

$('.js-wp-4').waypoint(function(direction) {
  $('.js-wp-4').addClass('animate__animated animate__jello');
}, {
  offset: '0%',
});

$('.js-wp-5').waypoint(function(direction) {
  $('.js-wp-5').addClass('animate__animated animate__pulse');
}, {
  offset: '30%',
});

/* The below block resets the animations when scrolling back to top.  The header needs to be desingated with a js--header class*/
$('.js-header').waypoint(
  (direction) => {
    if (direction === 'up') {
// remove the animation classes from all waypoints (1 - 3)
      $('.js-wp-1').removeClass('animate__animated animate__fadeIn');
      $('.js-wp-2').removeClass('animate__animated animate__fadeIn');
      $('.js-wp-3').removeClass('animate__animated animate__pulse');
      $('.js-wp-4').removeClass('animate__animated animate__jello');
      $('.js-wp-5').removeClass('animate__animated animate__pulse');
    }
  },
  {
    offset: '-25%',
  });


  /* ================MOBILE NAVIGATION=================
  ====================================================== */

  /* Description of the below, post-lecture (leture 66 in Jonas course ):  
  
  1.  the icon is renamed with JS selector, and then that is designated for a click function.  
  2.  the main nav "a" elements are saved into a variable, and that variable is used in the "slideToggle" JS Native function at a change-rate of 300ms.  
  3.  A variable is named icon and designates the nav-bar icon.  Remember this is still part of the "click function"
  4.  Set "if-else" conditions, and base it on what icon class is showing.  If con class A, then add class B and remove class A.  If else, add class A and remove class B  ==========================================================*/

  $('.js-nav-icon').click(function(){

    var nav = $('.js-main-nav a');
    nav.slideToggle(200);

    var icon = $('.js-nav-icon i')
    if (icon.hasClass('icon-navicon-round')){
      icon.addClass('icon-remove-delete');
      icon.removeClass('icon-navicon-round')
    }
    else {
      icon.addClass('icon-navicon-round');
      icon.removeClass('icon-remove-delete');
    }
  })


});


/* Review of how this thing works:  
- link html file to script.js file.  the script code line must be below any JQuery or other scripts. 
- go to waypoints and download the JQuery script, then paste that script into index.html 
- create .sticky desginator in CSS.  position is fixed w top:0 and left:0, z-index is 10(any high number).  
- code the above JS code, referencing the structure laid out in waypoints site.  
- "offset" is how quickly you want that waypoint action to happen.  
*/



