var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;
    queries = queryString.split("&");
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

var value = localStorage.getItem("user");
if (value == null) {
    if (window.location.href.includes("https://api2.goodgame.ru/oauth/receivecode#access_token=")) {
        var tokenParams = parseQueryString(window.location.hash.substr(1));
        window.close();
        var x = new XMLHttpRequest();
        x.open("GET", 'https://api2.goodgame.ru/oauth/resource?access_token=' + tokenParams.access_token, true);
        x.onload = function(){
            var answer = JSON.parse(x.responseText);
            if (answer.success == true) {
                localStorage.setItem("user", "ultram4rine")
            }
        }
        x.send()
    }
}
