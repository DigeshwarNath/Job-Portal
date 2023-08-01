$(".card").on("click", function(){
    $(".details").addClass("active");
});

$(".close-detail").on("click", function(){
    $(".details").removeClass("active");
});

$(".menu-bar").on("click", function(){
    $(".sidebar").addClass("active");
});

$(".logo").on("click", function(){
    $(".sidebar").removeClass("active");
});