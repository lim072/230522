$(document).ready(function(){
   
    $('.mainmenu>li').hover(function(){
        $(this).children(".submenu").stop().slideDown() 
    },function(){
        $(this).children(".submenu").stop().slideUp() 
    })

    $('#slide .frame li').eq(0).siblings().hide();
    var slideIndex = 0;
    setInterval(function () {
        if (slideIndex < 2){
            slideIndex++;
        } else {
            slideIndex = 0;
        } 
        $('#slide .frame li').eq(slideIndex).siblings().fadeOut(1000);
        $('#slide .frame li').eq(slideIndex).fadeIn(1000);
    }, 3000)

    $('.tab>li').on('click',function(){
        $('.tab').find('li').removeClass('on');
        $('.NGinner').find('div').removeClass('on');
        $(this).addClass('on');

        var conID = $(this).children('a').attr("href");
        $(conID).addClass('on');
    })

    $('#notice>ul>li').eq(0).on('click',function(){
        $('.popup').css('display','block')
    })
    $('.popup>button').on('click',function(){
        $('.popup').css('display','none')
    })
})