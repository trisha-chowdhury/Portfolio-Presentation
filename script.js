/*
const menuBar = document.querySelector('.nav_btn');

showMenu = false;

$(".nav_btn").click(function() {
    
    if(showMenu) {
        menuBar.classList.add('close');
    }
    
});


$(".click_action").click(function() {
    var flag = $("#navbar_content").is(":visible");
    if(flag == true){
        $("#myNavbar").css("background","transparent");
    }else{
        $("#myNavbar").css("background-color","black");
    }
});
*/


$(".nav_toggle").click(function() {
    $(".sidebar").toggleClass("sidebar_hide");
    $(".sidebar").toggleClass("sidebar_show");
});

$(".close_btn").click(function() {
    $(".sidebar").toggleClass("sidebar_hide");
    $(".sidebar").toggleClass("sidebar_show");
});


/*$(".bio_div").css("height",$(".photo_div").css("height"));*/





