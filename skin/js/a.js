$(function(){

    $(function () {
        $('.wx').click(function () {
            var isOpen = 0;
            $('.box-mask').fadeIn(500);
            center($('.box'));
            $('.btnCancel').click(function () {
                $('.box-mask').fadeOut(500);
                $('.box').fadeOut(500);
                isOpen = 0;
            });
        });

    })
    function center(obj) {
        var screenWidth = $(window).width(), screenHeigth = $(window).height();
        var scollTop = $(document).scrollTop();
        var objLeft = (screenWidth - obj.width()) / 2;
        var objTop = (screenHeigth - obj.height()) / 2 + scollTop;
        obj.css({
            left: objLeft + "px",
            top: objTop + "px"
        });
        obj.fadeIn(500);
        isOpen = 1;
        $(window).resize(function () {
            if (isOpen == 1) {
                screenWidth = $(window).width();
                screenHeigth = $(window).height();
                var scollTop = $(document).scrollTop();
                objLeft = (screenWidth - obj.width()) / 2;
                var objTop = (screenHeigth - obj.height()) / 2 + scollTop;
                obj.css({
                    left: objLeft + "px",
                    top: objTop + "px"
                });
                obj.fadeIn(500);
            }
        });
        $(window).scroll(function () {
            if (isOpen == 1) {
                screenWidth = $(window).width();
                screenHeigth = $(window).height();
                var scollTop = $(document).scrollTop();
                objLeft = (screenWidth - obj.width()) / 2;
                var objTop = (screenHeigth - obj.height()) / 2 + scollTop;
                obj.css({
                    left: objLeft + "px",
                    top: objTop + "px"
                });
                //obj.fadeIn(500);
            }
        });
    }

});