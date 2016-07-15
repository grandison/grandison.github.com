self.addEventListener('fetch', function(event) {
var s = fetch(event.request);
s.then(function(response){
  console.log(response);
})
return s;
});
