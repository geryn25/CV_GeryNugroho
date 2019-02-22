$(document).ready(function(){
    $("#openNav").click(function() {
        $("#leftNav").css("transition","1s");
        $("#leftNav").css("display","inline-block");
        $("#leftNav").css("width","200px");
        $("#openNav").css("display","none")
        
    });
    $(".closebtn").click(function() {
        $("#leftNav").css("transition","1s");
        $("#leftNav").css("width","0px");
        $("#openNav").css("display","inline-block")
        
    });
 });
 