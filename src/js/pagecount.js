(function top() {
  var time = localStorage.getItem("ggnowtimeupdate");
  var itime = parseInt(time);
  var interval = itime * 60 * 1000;

  var p = new XMLHttpRequest();
  p.open("GET", "https://goodgame.ru/api/4/stream/", true);
  p.send();
  p.onload = function() {
    if (p.status == 200) {
      var answer = JSON.parse(p.responseText);
      var count = answer.queryInfo.qty;
      var onpage = answer.queryInfo.onPage;
      if (count % onpage == 0) {
        pagecount = count / onpage;
      } else {
        pagecount = Math.trunc(count / onpage + 1);
      }
      chrome.runtime.onMessage.addListener(function(
        response,
        _sender,
        sendResponse
      ) {
        if (response.msg == "page") {
          sendResponse(pagecount);
        }
      });
    }
  };
  setTimeout(top, interval);
})();
