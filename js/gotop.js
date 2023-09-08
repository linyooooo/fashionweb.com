$(function(){
    $("#gotop").click(function(){ //按下gotop之後
        $("html, body").animate({scrollTop:0}, "slow"); //返回最上面
        return false;
    });

    $(window).scroll(function(){ //偵測畫面是否捲動超出400
        if($(this).scrollTop()>400){
            $("#gotop").fadeIn();
        }else{
            $("#gotop").fadeOut();
        }
    });
});