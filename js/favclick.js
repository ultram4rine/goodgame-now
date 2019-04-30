$(document).ready(function(){
    $('#nonactive').click(function(){
        $('#offline').css("display", "block");
        $('#nonactive').css("display", "none");
    })

    $('#fav').click(function(){
        var btn = $('#fav');
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        if ($('#nostreams').length > 0) {
            $("#filter").css("display", "none");
        } else {
            $("#filter").css("display", "block");
        }
        $('#offline').css("display", "none");
        $('#nonactive').css("display", "block");

        var favs = $('#favorite');
        favs.parent().children().css("display", "none");
        favs.css("display", "block");
    });

    $('#fav').click();
});