function fetchUrl() {
  let re = "<!-- https://www.ksml.fi(.*?)-->";
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    fetch(url)
      .then((r) => r.text())
      .then((result) => {
        //console.log(result);
        let array = [...result.matchAll(re)];
        //console.log(array.join());
        let finalurl = array[0][0];
        return finalurl;
      })

      .catch((err) => console.log(err));
  });
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting == "hello") sendResponse({ farewell: fetchUrl() });
});