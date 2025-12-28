$(function() {
    $(".hamburger button").click(function() {
        $("#slidebar").css("display", "block");
    });

    $(".overview_container").click(function() {
        $("#slidebar").css("display", "none");
    });

});
