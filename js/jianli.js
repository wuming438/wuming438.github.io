$(function () {
    var flag = true;
    var swiper = new Swiper('#main>.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionEnd: function(){

        },
    }
    });

    var swiper2 = new Swiper('.three>.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });


    $(".top>.left").click(function(){

        // $(".mysilde").css("display", "block").animate({
        //     left: 0,
        // }, 200,function(){
        //     $(".flag").addClass("ying");
        // })      
        $("#main").removeClass("fanmove").addClass("mainmove")
        $(".flag").addClass("ying")
        $(".mysilde").removeClass("fansidlemove").addClass("sidlemove")
 
    })

    $(".flag").click(function(){

        // $(".mysilde").css("display", "block").animate({
        //     left: 0,
        // }, 200,function(){
        //     $(".flag").addClass("ying");
        // })
        $("#main").removeClass("mainmove").addClass("fanmove")
        $(".flag").removeClass("ying")
        $(".mysilde").removeClass("sidlemove").addClass("fansidlemove")
 
    })

    $(".right").click(function(){
        console.log("我");
        
        getCamera()
    })


    //先生成camera对象，然后进行拍照，拍照完把图片生成图片路径打印出来
    function getCamera(){
        var cam = plus.camera.getCamera();
        //字符串数组,摄像头支持的拍照分辨率
        var Resolutions = cam.supportedImageResolutions[0];
        //字符串数组,摄像头支持的拍照文件格式
        var Formats = cam.supportedImageFormats[0];
        //调用拍照方法
        //capturedFile,拍照完成后，照片的存放地址
        cam.captureImage(function(capturedfile){
            //拍照成功
            alert(capturedfile);//打印一下
        },function(){
            //拍照失败
        },{
            //拍照参数
            format : Formats,
            index : 1//1表示主摄像头，2表示辅摄像头
        });
        
        var Resolutions = cam.supportedImageResolutions[0];
        //字符串数组，摄像头支持的拍照文件格式
        var Formats = cam.supportedImageFormats[0];
        //调用拍照方法
        //capturedFile,拍照完成后，照片的存放地址
        cam.captureImage(function(capturedFile){
            //拍照成功
            alert(capturedFile);//打印一下
            //调用系统方法,根据照片地址获取照片
            plus.io.resolvLocalFileSystemURL(capturedFile,
                //成功的回调函数
                //entry文件的相关信息
                function(entry){
                    var img = document.createElement("img");
                    img.src = entry.toLocalURL();
                    document.documentElement.appendChild(img);
                },function(){
                    //失败的回调函数
                });
        });
    }







})
