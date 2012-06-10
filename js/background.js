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
  $.get(imgUrl, function(imgData) {
    var fd = new FormData();
    fd.append('text', 'status form testing');
    fd.append('access_token', auth.getAccessToken());
    fd.append('media_type', 'status');
    // fd.append('media', imgData);
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
  }, 'text');

  // $.ajax({
  //   url: 'https://api.via.me/v1/post',
  //   type: 'POST',
  //   data: {
  //     text: 'status testing 2!',
  //     access_token: auth.getAccessToken(),
  //     media_type: 'status'
  //   },
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });
}

// Add item to context menu
chrome.contextMenus.create({
  title: "Post to via.me",
  contexts: ["image"],
  onclick: displayForm
});
