$(document).ready(function(){
    $("#alramIcon").click(function(){
        $("#alram").toggle();
    });
    
    $("article").click(function(){
        $("#alram").css('display','none');
    });
});
