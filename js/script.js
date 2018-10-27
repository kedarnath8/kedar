$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu_mob" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu_mob" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu_mob" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
