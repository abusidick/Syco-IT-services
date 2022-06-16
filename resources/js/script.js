$(document).ready(function(){
    $(".about-section").waypoint(function(direction){
        if(direction== "down"){
        $("nav").addClass("sticky");
    }
    else{
        $("nav").removeClass("sticky");
    }
    });
});