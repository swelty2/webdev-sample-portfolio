$(document).ready(function() {
    //icons for accordian
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };//end of var icons
    //js call for accordian to organize and display info about me
    $( "#accordion" ).accordion({
      icons: icons
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }//end of elses
    });//end of toggle on click
    
    // Slider call   
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        slideMargin: 10,
        captions: true,
        pause: 2000,
        adaptiveHeight: true,
        
      });

   

      } );//end of ready


       