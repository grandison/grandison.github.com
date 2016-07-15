self.addEventListener('fetch', function(event) {
var s = fetch(event.request);
console.log(s);
return s;
});
