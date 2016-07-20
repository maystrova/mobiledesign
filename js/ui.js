$(document).ready(function() {
    $(".dot1").click(function() {
        $(".slideshow ul li").removeClass("active");
        $(".image1").addClass("active");
        $(".dots i").removeClass("active");
        $(this).addClass("active");
    });
    $(".dot2").click(function() {
        $(".slideshow ul li").removeClass("active");
        $(".image2").addClass("active");
        $(".dots i").removeClass("active");
        $(this).addClass("active");
    });
    $(".dot3").click(function() {
        $(".slideshow ul li").removeClass("active");
        $(".image3").addClass("active");
        $(".dots i").removeClass("active");
        $(this).addClass("active");
    });
});