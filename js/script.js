$(document).ready(function(){
    
    // Get geolocation
    var location = document.getElementById('location');
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }else{
            location.innerHTML = 'Geolocation not allowed';
        }
    }
    
    function showPosition(position){
        location.innerHTML = 'Location: ' + position.coords.latitude + position.coords.longitude;
    }
    getLocation();
    
    $.ajax({
        headers: '223322d200bb33281a277d8383d5d2af',
        url: 'https://api.darksky.net/forecast/223322d200bb33281a277d8383d5d2af/37.8267,-122.4233',
        datatype: 'json',
        success: function(response){
            console.log('responded', response);
            }
    });
});

// Call dark sky api
// html5 geolocation
// Display weather in current location
// Different animated icons - rain, sunny, cloudy, thunderstorm, snow - use snap svg
// Button to toggle F/C