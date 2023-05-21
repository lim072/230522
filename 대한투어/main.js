
$('.gnb').on("mouseover", function(){
    $('.sub , .gnb_bg').stop().slideDown();
})
$('.gnb').on("mouseout", function(){
    $('.sub , .gnb_bg').stop().slideUp();
});

setInterval(function (){
    $('.frame').animate({'top' : '-300px'}, function (){
        $('.frame>li').eq(0).appendTo('.frame');
        $('.frame').css({'top' : 0})
    })
},3000)

$('.notice>ul>li').eq(0).on('click',function(){
    $('.popup').css('display','block')
})
$('.popup_content>button').on('click',function(){
    $('.popup').css('display','none')
})
