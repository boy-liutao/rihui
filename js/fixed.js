$(function() {
    $(".fix-top").click(function() {
    	console.log(1)
        $("body").animate({
            scrollTop:0
        },500)
    })
    $(".fix-phone").mouseenter(function() {
        $(".phoneNumber").css("display","inline-block");
    }).mouseleave(function() {
        $(".phoneNumber").css("display","none");
    })
    $(".fix-email").mouseenter(function() {
        $(".emailNumber").css("display","inline-block");
    }).mouseleave(function() {
        $(".emailNumber").css("display","none");
    })
});