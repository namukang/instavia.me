var auth = new OAuth2('viame', {
    client_id: '3slsfzrsluzze7qs74n442wpy',
    client_secret: 'cjmym83dwlewqqk06bvg6x06g'
});

setTimeout(function() {
  auth.authorize(function() {
    // Ready for action
    console.log('Authorized!');
  });
}, 500);

function displayForm(info, tab) {
  console.log("Clicked!");
}

// Add item to context menu
chrome.contextMenus.create({
  title: "Post to via.me",
  contexts: ["image"],
  onclick: displayForm
});
