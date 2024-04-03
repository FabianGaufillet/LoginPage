($ => {
    $('.message a').on("click",function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, 600);
    });
})(jQuery)