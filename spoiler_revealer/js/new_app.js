/**
 * Created by mitul on 24/11/15.
 */
// select the spoiler
// hide the spoiler

$(".spoiler span").hide();

// Add a button to the spoiler

$(".spoiler").append("<button> Revealer </button>");

// Make a on click function

$("button").click(function(){
    // show the previous content
    $(".spoiler span").show(500);
    // remove the button
    $(this).toggle();
});