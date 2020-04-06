$(document).ready(function () {
    $(document).on("scroll", $.debounce(onScroll, 100));

    $('.navigation a[href^="#"]').on('click', function (e) {
        
        e.preventDefault();
        var marginTop = 150;
        if($(document).width() < 1320){
            marginTop = ($(window).height() - 400) / 2;
        }
        console.log($(this.hash));
        $('html, body').stop().animate({
            'scrollTop': $(this.hash).offset().top - marginTop
        });

        onScroll();
        // $(document).off("scroll");

        // $('.navigation a').each(function () {
        //     $(this).removeClass('active');
        // })
        // $(this).addClass('active');
        // if(this.hash != '')
        // var target = this.hash;
        // $target = $(target);
        // console.log($target);
        // var marginTop = 150;
        // console.log($(document).width());
        // if($(document).width() < 1320){
        //     marginTop = ($(window).height() - 400) / 2;
        // }
        // console.log($target);
        // $('html, body').stop().animate({
        //     'scrollTop': $target.offset().top - marginTop
        // }, 500, 'swing', function () {
        //     window.location.hash = target;
        // });
        // $(document).on("scroll", $.debounce(onScroll, 100));
    });
});

function onScroll(event) {
    var firstFound = false;
    $('.navigation a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (!firstFound && isElementInViewport(refElement)) {
            currentLink.addClass("active");
            firstFound = true;
        }
        else {
            currentLink.removeClass("active");
        }
    });
}

function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= -100 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight + 100 || document.documentElement.clientHeight + 100) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
