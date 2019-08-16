$(document).ready(function() { 

    $('#pop').click(function(){
        $('#popup').bPopup();
    });


    
$("h1#dynamic").hide();
$("h1#curious").hide();
$("h1#driven").hide();
    
$("h1#dynamic").fadeIn(3000, function() { 
    $("h1#curious").fadeIn(2000, function() {   
        $("h1#driven").fadeIn(1000, function() {    
    });//inner- driven
    });//inner- curious
});//outer- dynamic
  



 
});//end of ready


