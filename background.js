// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'changeColor') {
//       chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//           chrome.scripting.executeScript({
//               target: { tabId: tabs[0].id },
//               function: setPageBackgroundColor
//           });
//       });
//   }
// });

// function setPageBackgroundColor() {
//   document.body.style.backgroundColor = 'lightblue';
// }
