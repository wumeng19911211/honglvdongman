$(function() {
    // 初始化swiper
    var swiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        pagination: '.swiper-pagination',
    })


    $('.mainContent .tab-title li').on('click',function(){
    	$(this).addClass('active').siblings().removeClass('active');
    	console.log($(this).index());
    })

})
