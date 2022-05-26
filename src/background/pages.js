import { getPages } from "../api/streams";
import { countInterval } from "../helpers";

(function pages() {
  const interval = countInterval();

  getPages().then((pages) => {
    chrome.runtime.onMessage.addListener(function (
      request,
      _sender,
      sendResponse
    ) {
      if (request.msg == "page") {
        sendResponse(pages);
      }
    });
  });

  setTimeout(pages, interval);
})();
