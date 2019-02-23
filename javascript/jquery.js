
$(document).ready(function(){
    $("#openNav").click(function() {
        $("#leftNav").css("transition","1s");
        $("#leftNav").css("display","inline-block");
        $("#leftNav").css("width","200px");
        $(".main").css("margin-left","200px");
        $("#judul").css("margin-left","40%");
        
        
        $("body").css("background-color","rgba(0,0,0,0.4)");
        
        
    });
    $(".closebtn").click(function() {
        $("#leftNav").css("transition","1s");
        $("#leftNav").css("width","0px");
        $(".main").css("margin-left","0px");
        $("body").css("background-color","white");
        
    });
    
    
 });


 