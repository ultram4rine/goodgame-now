import { getFavoriteStreams } from "../api";
import { countInterval } from "../helpers";

// difference between two arrays.
const diff = (a1, a2) => {
  return a1
    .filter((i) => !a2.includes(i))
    .concat(a2.filter((i) => !a1.includes(i)));
};

// compare two arrays.
const compare = (a1, a2) => {
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
};

let online = [];

(function notify() {
  const interval = countInterval();

  let previous = online;
  online = [];

  getFavoriteStreams().then((streams) => {
    streams.forEach((s) => {
      if (s.status) {
        online.push(s.streamer.nickname);
      }
    });

    if (online.length > 0) {
      chrome.browserAction.setBadgeText({ text: online.length.toString() });
      chrome.browserAction.setBadgeBackgroundColor({ color: "#52709c" });
    } else {
      chrome.browserAction.setBadgeText({ text: "" });
    }

    const difference = diff(online, previous);

    chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
      if (request.msg == "get") {
        sendResponse(online);
      }
    });

    if (
      online.length != 0 &&
      !compare(online, previous) &&
      !previous.some((s) => difference.indexOf(s) >= 0)
    ) {
      let becomeOnline = "";
      for (const newOnlineStream of difference) {
        if (newOnlineStream != undefined) {
          becomeOnline += newOnlineStream + "\n";
        }
      }

      chrome.notifications.create({
        type: "basic",
        iconUrl: chrome.extension.getURL("../icons/64.png"),
        title: "GoodGame Now",
        message: becomeOnline,
      });
    }
  });

  setTimeout(notify, interval);
})();
