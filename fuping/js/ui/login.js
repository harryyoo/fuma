$(function() {
	//背景随机切换
    var images_id = [["images/pc_login_bg.jpg", "images/pc_login_bg2.jpg"],["images/pc_login_bg3.jpg", "images/pc_login_bg4.jpg"]],
    	x=0,
    	n=0;
    function switch_background(i) {
        n = Math.floor(Math.random()*(2+0)+0);
        $('.bg').eq(i).siblings('.bg').fadeOut('slow');
        $('.bg').eq(i).css('background-image','url(' + images_id[i][n] + ')')
        	.fadeIn('slow');
    }
    window.onload = function() {
    	$('body').addClass('loaded');
        setInterval(function() {
        	x=x==0?1:0;
	        switch_background(x);

        }, 5000);
    }
});
