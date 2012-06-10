var auth = new OAuth2('viame', {
    client_id: '3slsfzrsluzze7qs74n442wpy',
    client_secret: 'cjmym83dwlewqqk06bvg6x06g'
});

auth.authorize(function() {
  // Ready for action
  console.log('Authorized!');
});
