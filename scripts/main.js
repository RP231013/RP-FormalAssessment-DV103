// When doc loads:
$(document).ready(function(){

    console.log("hello")
    // ---------------------------------------------
    // Home Page

    // When doc loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});


    // ---------------------------------------------
    // Browse Page

    //hide description text of plant
    $("#descriptionText").hide();

});


//When plant card is clicked
$(".card").click(function(){

    //toggle price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // resize image to fit additional content 
    $(".card-img-top").toggleClass("small");
});

// when 'X' is clicked, remove plant
$(".removePlant").click(function(){
    $(this).closest("tr").remove();
});

