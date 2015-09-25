$(function () {
    if (window.location.href !== "#/movies/popular" ||
        window.location.href !== "#/movies/now_playing" ||
        window.location.href !== "#/movies/upcoming" ||
        window.location.href !== "#/movies/top_rated") {
        $("mdl-tabs__tab-bar").each(function () {
            $(this).removeClass('is-active-tab');
        });
    }
    $('.mdl-tabs__tab-bar > a').each(function () {
        $(this).click(function () {
            $('#home > span').removeClass('is-active-tab');
            $('#about > span').removeClass('is-active-tab')
        });
    });
    //$('.mdl-tabs__tab-bar > a')
    $('#home').click(function () {
        $('.mdl-tabs__tab-bar > a').each(function () { $(this).removeClass('is-active-tab') });
        $('#home > span').addClass('is-active-tab');
        $('#about > span').removeClass('is-active-tab');
    });
    $('#about').click(function () {
        $('.mdl-tabs__tab-bar > a').each(function () { $(this).removeClass('is-active-tab') });
        $('#about > span').addClass('is-active-tab');
        $('#home > span').removeClass('is-active-tab');
    });
    $('#tab1').click(function () {
        $('#tab1').addClass("is-active-tab");
        $('#tab2').removeClass("is-active-tab");
        $('#tab3').removeClass("is-active-tab");
        $('#tab4').removeClass("is-active-tab");
        window.location.href = "#/movies/popular";
    });
    $('#tab2').click(function () {
        $('#tab2').addClass("is-active-tab");
        $('#tab1').removeClass("is-active-tab");
        $('#tab3').removeClass("is-active-tab");
        $('#tab4').removeClass("is-active-tab");
        window.location.href = "#/movies/now_playing";
    });
    $('#tab3').click(function () {
        $('#tab3').addClass("is-active-tab");
        $('#tab1').removeClass("is-active-tab");
        $('#tab2').removeClass("is-active-tab");
        $('#tab4').removeClass("is-active-tab");
        window.location.href = "#/movies/upcoming";
    });
    $('#tab4').click(function () {
        $('#tab4').addClass("is-active-tab");
        $('#tab1').removeClass("is-active-tab");
        $('#tab2').removeClass("is-active-tab");
        $('#tab3').removeClass("is-active-tab");
        window.location.href = "#/movies/top_rated"
    });
});

