$(document).ready(function(){
    $('#top').click(function(){
        var btn = $('#top');
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        $("#filter").css("display", "block");
        $("#pages").css("display", "block");

        var tops = $('#topstreams');
        tops.parent().children().css("display", "none");
        tops.css("display", "block");
    });
});