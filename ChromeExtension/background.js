chrome.runtime.onMessage.addListener(fetchUrl);
function fetchUrl(tab) {
  let re = "<!-- https://www.ksml.fi(.*?)-->";
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;

    fetch(url)
      .then((r) => r.text())
      .then((result) => {
        //console.log(result);
        let array = [...result.matchAll(re)];
        //console.log(array.join());
        let finalurl = array[0][0].replace("<!-- ", "").replace(" -->", "");
        console.log(finalurl);
        chrome.tabs.update(tab.id, { url: finalurl });
      })
      .catch((err) => console.log(err));
  });
}
