
$(window).load(function() {

    // General animations
    setTimeout(function() {

        $(".loading-part").addClass("index-999");

        $(".ms-left").addClass("fadeInLeft");

        $(".social-icons").addClass("fadeIn").removeClass("opacity-0");

    }, 1000);


    // FadeInUp for the text
    setTimeout(function() {
        $(".text-news").addClass("fadeInUp").removeClass("opacity-0");
    }, 3000);

    // FadeInUp for the newsletter form
    setTimeout(function() {
        $("#subscribe").addClass("fadeInUp").removeClass("opacity-0");
    }, 3400);

    // Display none for the loading
    setTimeout(function() {
        $(".loading-part").addClass("display-none");
    }, 2200);

    // Remove all the animations to prevent when the screen is resized, for playing them again, if you remove the next lines, the entrance animations will be played each time
    setTimeout(function() {
        $(".digit").removeClass("fadeInDown animated-middle").addClass("");
        $(".text-right").removeClass("fadeInRight animated-middle").addClass("");
        $(".text-news").removeClass("fadeInRight animated-middle").addClass("");
        $("#subscribe").removeClass("fadeInRight animated-middle").addClass("");
        $('#multiscroll-nav li a').removeClass('active-opening');
    }, 2650);

});

$(document).ready(function(){
    /* ------------------------------------- */
    /* 2. MultiScroll ...................... */
    /* ------------------------------------- */

    var onMobile = false;

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }

    if( ( onMobile === false ) ) {

        $('#multi-div').multiscroll({
            // anchors: ['Home', 'About', 'Designers', 'Contact'],
            loopTop: true,
            loopBottom: true,
            navigation: true,
            navigationTooltips: ['Home', 'About', 'Contact'],
        });
        
    } else {

        $('#multi-div').multiscroll({
            // anchors: ['Home', 'About', 'Services', 'Contact'],
            loopTop: true,
            loopBottom: true,
            navigation: true,
            navigationTooltips: ['Home', 'About', 'Contact'],
        });

        $('#multi-div').multiscroll.destroy();
    }

    /* ------------------------------------- */
    /* 3. Carousels ........................ */
    /* ------------------------------------- */

    $('#carousel-pictures').carousel({
      interval: 5000 // False if you want to remove auto slide
    });

    $('#carousel-services').carousel({
      interval: 5000 // False if you want to remove auto slide
    });


    $('.swipebox').swipebox();

    /* Video */
    $('.swipebox-video').swipebox();

    /* ------------------------------------- */
    /* 7. Tooltips ......................... */
    /* ------------------------------------- */

    if (window.matchMedia("(min-width: 1025px)").matches) {

        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }

    /***
      Data dump for Emails
    **/

    $('#customer').submit(function(e){
      e.preventDefault();
      var customerEmail = $('#email-customer').val().trim();
      var myFirebaseRef = new Firebase("https://nivisheafrica.firebaseio.com/signups/customers");
      myFirebaseRef.push({email: customerEmail });
      $(".message").removeClass("bad-email").addClass("success-full");
      $(".message").html('<p class="notify-valid"><i class="icon ion-checkmark-round"></i> Congrats! We will inform you as soon as we finish.</p>').fadeIn();
      $('#email-customer').val('');
    });



});
