chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
  console.log(response.arguments);
});
