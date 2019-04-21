$(document).ready(function(){
    $('#fav').click(function(){
        var btn = $('#fav');
        btn.parent().children().css("background-color", "#1C2644");
        btn.css("background-color", "#52709C");

        var value = localStorage.getItem("user");
        if (value == null) {
            var topbar = document.getElementById('topbar');
            topbar.innerHTML = '';

            var content = document.getElementById('content');
            content.innerHTML = '';
            content.innerHTML += '<div id="unauth">Вы не вошли<br><button id="login">Вход</button></div>';

            $("#login").click(function(){
                content.innerHTML = '';
            });
        }
    });

    $('#fav').click();
});