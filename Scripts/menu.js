// document.querySelector( "#nav-toggle").addEventListener( "click", function() {
//   this.classList.toggle( "active" );
//   console.log("navToggle");
// });
$(function(){
  $("#nav-toggle").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $(".navigation").toggleClass("active");
    console.log("toggle");
  });
});
