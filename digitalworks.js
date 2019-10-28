"use strict";
    $(document).ready(function(){
    $(window).resize();
});
$(window).resize(function{
    // your code
    var windowWidth=$(window).width();
    var mainContainerWidth=windowWidth-100; // For example
    $("#yourMainContainer").css({"width":mainContainerWidth+"px"});
});
