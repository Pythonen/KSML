/* 
chrome.runtime.onMessage.addListener(gotUrl);

function gotUrl(message, sender, sendResponse){
  let url = message.replace("<!-- ", "");
  let finalurl = url.replace(" -->", "");
  console.log(finalurl);
  chrome.tabs.create({'url': finalurl});
} */