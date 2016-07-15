self.addEventListener('fetch', function(event) {
fetch(event.request).then(function(response){
  i = response;
});
});
