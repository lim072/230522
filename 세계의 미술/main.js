$('.gnb>li').on("mouseover", function(){
    $(this).children('.sub').stop().slideDown();
})
$('.gnb>li').on("mouseout", function(){
    $(this).children('.sub').stop().slideUp();
});

setInterval(function (){
    $('.frame').animate({'top' : '-300px'}, function (){
        $('.frame ul li').eq(0).appendTo('.frame');
        $('.frame').css({'top' : 0})
    })
},3000)

$('.notice>ul>li').eq(0).on('click',function(){
    $('.popup').css('display','block')
})
$('.popupbutton').on('click',function(){
    $('.popup').css('display','none')
})