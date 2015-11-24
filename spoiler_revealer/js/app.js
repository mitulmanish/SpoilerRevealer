//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();

//2, Add a button
$(".spoiler").append("<button><h1>Reveal!</h1></button>");


//3, When button pressed




$("button").click(function(){
  $(this).prev().show(300);
  $(this).remove();
});



