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


    $(".top>.left>i").click(function(){

        $(".mysilde").css("display", "block").animate({
            left: 0,
        }, 200,function(){
            $(".flag").addClass("ying");
        })
        

    })


    $("#main").click(function(e){

        if(e.target !== $(".top>.left>i")[0] && e.target !==  $(".mysilde")[0] && e.target !== $(".top>.left>i")[1]
       && e.target !== $(".top>.left>i")[2] && e.target !== $(".top>.left>i")[3] && e.target !== $(".top>.left>i")[4]){
            $(".mysilde").animate({
                left: "-100%",
            }, 200,function(){
                $(".mysilde").css("display", "none");
                $(".flag").removeClass("ying");
            })
            
        }

    })








})