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
  var imgUrl = info.srcUrl;
  var req = new XMLHttpRequest();
  req.open("GET", imgUrl, true);
  req.responseType = "arraybuffer";

  req.onload = function(e) {
    var arrayBuffer = req.response;
    var fd = new FormData();
    fd.append('text', '');
    fd.append('access_token', auth.getAccessToken());
    fd.append('media_type', 'photo');
    fd.append('media', new Blob([arrayBuffer]));
    $.ajax({
      url: 'https://api.via.me/v1/post',
      type: 'POST',
      contentType: false,
      processData: false,
      data: fd,
      success: function(data) {
        console.log(data);
      }
    });
  };
  req.send();
}

// Add item to context menu
chrome.contextMenus.create({
  title: "Post to via.me",
  contexts: ["image"],
  onclick: displayForm
});
