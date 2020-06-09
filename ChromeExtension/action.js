chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url
    //console.log(url);
    fetch(url).then(r => r.text()).then(result => {
        console.log(result)
    })  
    .catch(err => console.log(err));
    
});


