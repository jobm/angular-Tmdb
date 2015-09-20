$(function(){
    $('#tab1').click(function(){
        $('#tab1').addClass("is-active-tab");
        $('#tab2').removeClass("is-active-tab");
        $('#tab3').removeClass("is-active-tab");
        $('#tab4').removeClass("is-active-tab");
        window.location.href = "#/movies/popular";
    });
      $('#tab2').click(function(){
        $('#tab2').addClass("is-active-tab");
        $('#tab1').removeClass("is-active-tab");
        $('#tab3').removeClass("is-active-tab");
        $('#tab4').removeClass("is-active-tab");
        window.location.href = "#/movies/now_playing";
    });
      $('#tab3').click(function(){
        $('#tab3').addClass("is-active-tab");
        $('#tab1').removeClass("is-active-tab");
        $('#tab2').removeClass("is-active-tab");
        $('#tab4').removeClass("is-active-tab");
        window.location.href = "#/movies/upcoming";
    });
      $('#tab4').click(function(){
        $('#tab4').addClass("is-active-tab");
        $('#tab1').removeClass("is-active-tab");
        $('#tab2').removeClass("is-active-tab");
        $('#tab3').removeClass("is-active-tab");
         window.location.href ="#/movies/top_rated"
    });
});

