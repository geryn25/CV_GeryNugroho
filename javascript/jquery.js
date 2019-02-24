
$(document).ready(function(){
    $("#openNav").click(function() {
        $("#leftNav").css("transition","1s");
        $("#leftNav").css("display","inline-block");
        $("#leftNav").css("width","250px");
        $(".main").css("margin-left","250px");
        $("#judul").css("margin-left","40%");
        $(".footer").css("margin-left","250px");
        $(".footer").css("transition","1s");
        
        
        $("body").css("background-color","rgba(0,0,0,0.4)");
        
        
        
    });
    $(".closebtn").click(function() {
        $("#leftNav").css("transition","1s");
        $("#leftNav").css("width","0px");
        $(".main").css("margin-left","0px");
        $("body").css("background-color","white");
        $(".footer").css("margin-left","");
        
    });
    
    
 });


 