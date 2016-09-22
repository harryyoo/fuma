(function ($) {

    //提示插件
    $.fn.toast =function(msg){
        var $toast=$('<div class="toast-tip">'+msg+'</div>');
        $(this).append($toast).find('.toast-tip').fadeIn();
        setTimeout(function(){
            $toast.fadeOut(function(){
                $(this).remove()
            });
        },2000);
    }
})(jQuery);

$(function() {
	//背景随机切换
    var images_id = [["images/pc_login_bg.png", "images/pc_login_bg2.png"],["images/pc_login_bg3.png", "images/pc_login_bg4.png"]],
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
    //登录验证
    var submit=$('.J_submit').on('click',function(){
        var uiForm=document.form,
            userName=uiForm.username.value,
            password=uiForm.password.value,
            code=uiForm.code.value;
        
        if(userName==""||password==""){
            $('body').toast('用户名或密码不能为空！');
            return false;
        }
    });
    $('.J_form').on('submit',function(){
        return submit;
    })

});


