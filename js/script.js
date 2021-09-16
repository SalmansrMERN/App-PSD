$(function(){
    

var navoff = $('#menu_part').offset().top;

$(window).scroll(function(){

    var scrolling=$(this).scrollTop();

    if (scrolling > navoff){

        $('#menu_part').addClass('menu_fixed');
    }
    else{
        $('#menu_part').removeClass('menu_fixed');
    }


});
// ===================== Menu fixed =======================







});