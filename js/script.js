$(document).ready(function(){
    
    var location = document.getElementById('location');
    
    // Get geolocation
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }else{
            location.innerHTML = 'Location not found';
        }
    }
    
    function showPosition(position){
        // Call Dark Sky API for current location position
        $.ajax({
            // Input current geolocation coords into API endpoint
            url: 'https://api.darksky.net/forecast/223322d200bb33281a277d8383d5d2af/' + position.coords.latitude + ',' + position.coords.longitude,
            // Use jsonp to circumvent CORS proxy issue
            dataType: 'jsonp',
            success: function(response){
                console.log('responded', response);
                // Print current location
                location.innerHTML = 'Location: ' + response.timezone;
                
                var summary = document.getElementById('summary'),
                    temperature = document.getElementById('temperature');
                
                // Print current summary and temperature
                summary.innerHTML = '<p>' + response.currently.icon + '</p>';
                temperature.innerHTML = '<p>' + response.currently.temperature + '&#176;F</p>';
                
                // Weather conditions - clear-day, clear-night, rain, snow, sleet, 
                // wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night
                var condition = response.currently.icon,
                    weatherIcon = document.getElementById('weatherIcon');
                // Switch statements for each weather condition
                // Each case displays different SVG weather icon
                switch(condition){
                    case 'clear-day':
                        $('#weatherIcon i').addClass('wi-day-sunny');
                    break;
                    case 'clear-night':
                        $('#weatherImage').addClass('wi-night-clear');
                    break;
                    case 'rain':
                        $('#weatherImage').addClass('wi-rain');
                    break;
                    case 'snow':
                        $('#weatherImage').addClass('wi-snow');
                    break;
                    case 'sleet':
                        $('#weatherImage').addClass('wi-sleet');
                    break;
                    case 'wind':
                        $('#weatherImage').addClass('wi-windy');
                    break;
                    case 'fog':
                        $('#weatherImage').addClass('wi-fog');
                    break;
                    case 'cloudy':
                        $('#weatherImage').addClass('wi-cloudy');
                    break;
                    case 'partly-cloudy-day':
                        $('#weatherImage').addClass('wi-day-cloudy');
                    break;
                    case 'partly-cloudy-night':
                        $('#weatherImage').addClass('wi-night-alt-cloudy');
                    break;
                    }
                }
        });
    }
    // Run function
    getLocation();
    
    // Toggles Celsius/Farenheit
    // 0F = -17.77778C
    // tempC = (tempF - 32)/1.8
    $('#tempBtn').on('click', function(){
        if(true){
           // change to F
        }else{
           // change to C
        } 
    });
        
    
});

// Different animated icons - rain, sunny, cloudy, thunderstorm, snow - use snap svg
// Button to toggle F/C