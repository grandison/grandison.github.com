self.addEventListener('fetch', function(event) {
fetch(event.request).then(function(response){
    console.log(response.headers.get('location'));  

    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
});
});
