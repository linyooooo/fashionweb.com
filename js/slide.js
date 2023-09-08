// JavaScript Document
 $(function(){
        //3d
        $('#slide3d').slideCarsousel({slideType:'3d',indicatorEvent:'mouseover'});
        //2d
        var  sliderDescArr=[],i=0,len=10;//圖片張數
        for(;i<len;i++){
            sliderDescArr.push(new Array(10).join(''+i));//圖片張數
        }
        $('#sliderDesc').text(sliderDescArr[0]);
        $('#slide2d').slideCarsousel({callbackFunc:function(index){
            $('#sliderDesc1').text(sliderDescArr[index]);
        }});
    });