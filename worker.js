self.addEventListener('fetch', function(event) {
fetch(event.request).then(function(response){
  console.log(response.headers);
});
});
