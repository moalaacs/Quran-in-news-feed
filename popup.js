document.addEventListener("DOMContentLoaded", () => {
  var i = 0;
  //Send message from start button to the target tab
  const startBtn = document.querySelector(".start-btn");
  startBtn.addEventListener("click", () => {
    startBtn.classList.add("clicked");
    stopBtn.classList.remove("clicked");
    if (i != 1) {
      chrome.storage.sync.set({ state: "start" });
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          todo: "start",
        });
      });
    }
    i = 1;
  });

  //Send message from stop button to the target tab
  const stopBtn = document.querySelector(".stop-btn");
  stopBtn.addEventListener("click", () => {
    stopBtn.classList.add("clicked");
    startBtn.classList.remove("clicked");
    if (i != 2) {
      chrome.storage.sync.set({ state: "end" });
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          todo: "end",
        });
      });
    }
    i = 2;
  });

  //Keep buttons style after close popup
  chrome.storage.sync.get("state", function (storage) {
    if (storage.state == "start") {
      startBtn.classList.add("clicked");
    } else {
      startBtn.classList.remove("clicked");
      stopBtn.classList.add("clicked");
    }
  });
});
