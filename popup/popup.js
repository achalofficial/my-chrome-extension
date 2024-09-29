document.getElementById('changeColor').addEventListener('click', function() {
    // Changes the background color of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: setPageBackgroundColor
        });
    });
});

function setPageBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}
