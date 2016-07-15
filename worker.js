self.addEventListener('fetch', function(event) {
fetch(event.request).then(function(response){
  for (var i in response){console.log(i);};
});
});
